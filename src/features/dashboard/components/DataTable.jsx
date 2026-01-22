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
    <div>
      <DataGrid
        rows={rows}
        columns={columns}
        rowCount={totalCount}
        loading={loading}
        pagination
        paginationMode="server"
        paginationModel={{ page, pageSize }}
        onPaginationModelChange={(model) => {
          onPageChange(model.page);
          onPageSizeChange(model.pageSize);
        }}
        getRowId={(row) => row.id}
        onRowClick={(params) => onRowSelect(params.id)}
        getRowClassName={(params) =>
          params.id === selectedProjectId ? "selected-row" : ""
        }
        disableRowSelectionOnClick
        style={{
          minHeight: 632,
        }}
      />
    </div>
  );
}

export default DataTable;
