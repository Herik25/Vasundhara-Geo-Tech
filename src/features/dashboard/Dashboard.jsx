import React, { useMemo, useState } from "react";
import { useProjects } from "./hooks/useProjects";
import { useFilters } from "./hooks/useFilters";
import DataTable from "./components/DataTable";
import MapView from "./components/MapView";
import Filters from "./components/Filters";
import { Typography } from "@mui/material";
import StatCard from "./components/StatCard";

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
    <div
      style={{
        height: "100vh",
        overflow: "hidden",
        display: "grid",
        gridTemplateColumns: "1fr 40%",
      }}
    >
      <div style={{ minWidth: 0, height: "100vh", width: "100%" }}>
        <MapView
          projects={filteredData}
          selectedProjectId={selectedProjectId}
          onMarkerSelect={setSelectedProjectId}
        />
      </div>

      <div
        style={{
          padding: 12,
          background: "#fff",
          borderRadius: "20px",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <div
          style={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            marginBottom: 16,
          }}
        >
          <div style={{ marginBottom: 8 }}>
            <Typography variant="h4" fontWeight={600}>
              Vasundhara Geo Technologies
            </Typography>
          </div>
          <div
            style={{
              display: "flex",
              gap: 16,
              marginBottom: 4,
            }}
          >
            <StatCard label="Total Projects" value={projects.length} />
            <StatCard
              label="Active"
              value={projects.filter((p) => p.status === "Active").length}
            />
            <StatCard
              label="Inactive"
              value={projects.filter((p) => p.status === "Inactive").length}
            />
          </div>
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
        </div>

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
      </div>
    </div>
  );
}

export default Dashboard;
