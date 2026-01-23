export const dashboardStyles = {
  root: {
    height: "100vh",
    overflow: "hidden",
    display: "grid",
    gridTemplateColumns: "1fr 40%",
  },

  mapContainer: {
    minWidth: 0,
    height: "100vh",
    width: "100%",
  },

  sidePanel: {
    padding: 12,
    background: "#fff",
    borderRadius: "20px",
    display: "flex",
    flexDirection: "column",
  },

  headerSection: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    marginBottom: 16,
  },

  titleWrapper: {
    marginBottom: 8,
  },

  statsRow: {
    display: "flex",
    gap: 16,
    marginBottom: 4,
  },

  helperText: {
    marginBottom: 4,
    textAlign: "center",
  },

  statsCardWrapper: {
    flex: 1,
    padding: 16,
    borderRadius: 12,
    background: "#f8f9fb",
    textAlign: "center",
  },
};
