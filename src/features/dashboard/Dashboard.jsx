import React, { useMemo, useState } from "react";
import { useProjects } from "./hooks/useProjects";
import { useFilters } from "./hooks/useFilters";
import DataTable from "./components/DataTable";
import MapView from "./components/MapView";
import Filters from "./components/Filters";
import { Box, Typography } from "@mui/material";
import StatCard from "./components/StatCard";
import { dashboardStyles as styles } from "./dashboard.styles";

function Dashboard() {
  const [page, setPage] = useState(0);
  const [pageSize, setPageSize] = useState(10);
  const [selectedProjectId, setSelectedProjectId] = useState(null);

  const { projects, loading, error } = useProjects({
    page,
    pageSize,
  });

  const {
    searchText,
    statusFilter,
    setSearchText,
    setStatusFilter,
    filteredData,
  } = useFilters(projects);

  const paginatedData = useMemo(() => {
    const start = page * pageSize;
    const end = start + pageSize;
    return filteredData.slice(start, end);
  }, [filteredData, page, pageSize]);

  return (
    <Box sx={styles.root}>
      <Box sx={styles.mapContainer}>
        <MapView
          projects={filteredData}
          selectedProjectId={selectedProjectId}
          onMarkerSelect={setSelectedProjectId}
        />
      </Box>

      <Box style={styles.sidePanel}>
        <Box style={styles.headerSection}>
          <Typography variant="h4" fontWeight={600}>
            Vasundhara Geo Technologies
          </Typography>
          <Box style={styles.statsRow}>
            <StatCard label="Total Projects" value={projects.length} />
            <StatCard
              label="Active"
              value={projects.filter((p) => p.status === "Active").length}
            />
            <StatCard
              label="Inactive"
              value={projects.filter((p) => p.status === "Inactive").length}
            />
          </Box>
          <div style={{ marginBottom: 4 }}>
            <Typography
              variant="body2"
              color="text.secondary"
              textAlign="center"
            >
              Click a row to focus the project on the map and Use filters to
              refine results.
            </Typography>
          </div>
        </Box>

        <React.Fragment>
          <Typography variant="h5" sx={{ mb: 2, fontWeight: 600 }}>
            Projects Overview
          </Typography>
          <Filters
            searchText={searchText}
            statusFilter={statusFilter}
            onSearchChange={setSearchText}
            onStatusChange={setStatusFilter}
          />

          <DataTable
            rows={paginatedData}
            totalCount={filteredData.length}
            page={page}
            pageSize={pageSize}
            loading={loading}
            selectedProjectId={selectedProjectId}
            onPageChange={setPage}
            onPageSizeChange={setPageSize}
            onRowSelect={setSelectedProjectId}
          />

          {error && <div>{error}</div>}
        </React.Fragment>
      </Box>
    </Box>
  );
}

export default Dashboard;
