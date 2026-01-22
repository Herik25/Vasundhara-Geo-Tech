import { useState } from "react";
import { useProjects } from "./hooks/useProjects";
import { useFilters } from "./hooks/useFilters";
import DataTable from "./components/DataTable";
import MapView from "./components/MapView";
import Filters from "./components/Filters";

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
    <div style={{ display: "flex", height: "100vh", overflow: "hidden" }}>
      <div style={{ flex: 1, minWidth: 0, padding: 12 }}>
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

      <div style={{ flex: 1, minWidth: 0 }}>
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
