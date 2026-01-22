import { TextField, MenuItem } from "@mui/material";

function Filters({ searchText, statusFilter, onSearchChange, onStatusChange }) {
  return (
    <div style={{ display: "flex", gap: 16, marginBottom: 12 }}>
      <TextField
        label="Search Project"
        size="small"
        value={searchText}
        onChange={(e) => onSearchChange(e.target.value)}
        fullWidth
      />

      <TextField
        select
        label="Status"
        size="small"
        value={statusFilter}
        onChange={(e) => onStatusChange(e.target.value)}
        style={{ width: 160 }}
      >
        <MenuItem value="all">All</MenuItem>
        <MenuItem value="Active">Active</MenuItem>
        <MenuItem value="Inactive">Inactive</MenuItem>
      </TextField>
    </div>
  );
}

export default Filters;
