import { Typography } from "@mui/material";

function StatCard({ label, value }) {
  return (
    <div
      style={{
        flex: 1,
        padding: 16,
        borderRadius: 12,
        background: "#f8f9fb",
        textAlign: "center",
      }}
    >
      <Typography variant="h6">{value}</Typography>
      <Typography variant="body2" color="text.secondary">
        {label}
      </Typography>
    </div>
  );
}

export default StatCard;
