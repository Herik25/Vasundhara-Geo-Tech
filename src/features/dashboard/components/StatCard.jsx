import { Box, Typography } from "@mui/material";
import { dashboardStyles as styles } from "../dashboard.styles";

function StatCard({ label, value }) {
  return (
    <Box style={styles.statsCardWrapper}>
      <Typography variant="h6">{value}</Typography>
      <Typography variant="body2" color="text.secondary">
        {label}
      </Typography>
    </Box>
  );
}

export default StatCard;
