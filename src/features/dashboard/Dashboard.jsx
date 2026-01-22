import { useState } from "react";
import { useProjects } from "./hooks/useProjects";
import { useFilters } from "./hooks/useFilters";
import DataTable from "./components/DataTable";
import MapView from "./components/MapView";
import Filters from "./components/Filters";
import { Typography } from "@mui/material";

function Dashboard() {
  const [page, setPage] = useState(0);
  const [pageSize, setPageSize] = useState(10);
  const [selectedProjectId, setSelectedProjectId] = useState(null);

  const { projects, totalCount, loading, error } = useProjects({
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

  return (
    <div style={{ height: "100vh", overflow: "hidden", position: "relative" }}>
      <div
        style={{
          padding: 12,
          position: "absolute",
          right: 0,
          bottom: 0,
          zIndex: 1000,
          background: "#fff",
          borderRadius: "20px",
        }}
      >
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
          rows={filteredData}
          totalCount={totalCount}
          page={page}
          pageSize={pageSize}
          loading={loading}
          selectedProjectId={selectedProjectId}
          onPageChange={setPage}
          onPageSizeChange={setPageSize}
          onRowSelect={setSelectedProjectId}
        />

        {error && <div>{error}</div>}
      </div>

      <div style={{ minWidth: 0, height: "100vh", width: "100%" }}>
        <MapView
          projects={filteredData}
          selectedProjectId={selectedProjectId}
          onMarkerSelect={setSelectedProjectId}
        />
      </div>
    </div>
  );
}

export default Dashboard;
