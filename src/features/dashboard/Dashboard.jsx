import { useState } from "react";
import { useProjects } from "./hooks/useProjects";
import DataTable from "./components/DataTable";
import MapView from "./components/MapView";

function Dashboard() {
  const [page, setPage] = useState(0);
  const [pageSize, setPageSize] = useState(50);
  const [selectedProjectId, setSelectedProjectId] = useState(null);

  const { projects, totalCount, loading, error } = useProjects({
    page,
    pageSize,
  });

  return (
    <div style={{ display: "flex", height: "100vh", overflow: "hidden" }}>
      {/* Table Section */}
      <div style={{ flex: 1, height: "100%", width: "100%" }}>
        <DataTable
          rows={projects}
          totalCount={totalCount}
          page={page}
          pageSize={pageSize}
          loading={loading}
          selectedProjectId={selectedProjectId}
          onPageChange={setPage}
          onPageSizeChange={setPageSize}
          onRowSelect={setSelectedProjectId}
        />
      </div>

      {/* Map Section */}
      <div style={{ flex: 1 }}>
        <MapView
          projects={projects}
          selectedProjectId={selectedProjectId}
          onMarkerSelect={setSelectedProjectId}
        />
      </div>

      {error && <div>{error}</div>}
    </div>
  );
}

export default Dashboard;
