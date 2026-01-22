import { DataGrid } from "@mui/x-data-grid";

function DataTable({
  rows,
  totalCount,
  page,
  pageSize,
  loading,
  selectedProjectId,
  onPageChange,
  onPageSizeChange,
  onRowSelect,
}) {
  const columns = [
    { field: "projectName", headerName: "Project Name", flex: 1 },
    { field: "latitude", headerName: "Latitude", width: 120 },
    { field: "longitude", headerName: "Longitude", width: 120 },
    { field: "status", headerName: "Status", width: 130 },
    { field: "lastUpdated", headerName: "Last Updated", width: 160 },
  ];

  return (
    <div style={{ height: "100%", width: "100%" }}>
      <DataGrid
        rows={rows}
        columns={columns}
        rowCount={totalCount}
        page={page}
        pageSize={pageSize}
        pagination
        paginationMode="server"
        onPageChange={(newPage) => onPageChange(newPage)}
        onPageSizeChange={(newPageSize) => onPageSizeChange(newPageSize)}
        loading={loading}
        getRowId={(row) => row.id}
        onRowClick={(params) => onRowSelect(params.id)}
        getRowClassName={(params) =>
          params.id === selectedProjectId ? "selected-row" : ""
        }
        disableRowSelectionOnClick
      />
    </div>
  );
}

export default DataTable;
