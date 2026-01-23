# 🌍 Geo Data Dashboard

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![MUI](https://img.shields.io/badge/MUI-007FFF?style=for-the-badge&logo=mui&logoColor=white)
![Leaflet](https://img.shields.io/badge/Leaflet-199900?style=for-the-badge&logo=leaflet&logoColor=white)
![License](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)

A high-performance **React-based Geo Data Dashboard** that visualizes spatial and tabular project data with **synchronized interactions** between a data table and an interactive map.

---

## 🚀 Objective

The goal of this project is to build a modern frontend dashboard that:

- **Displays** geo-spatial project data in a table and on a map.
- **Supports** searching, filtering, and pagination.
- **Keeps** the table and map fully synchronized.
- **Handles** large datasets efficiently.
- **Maintains** clean architecture and readable code.

---

## 🛠️ Tech Stack

| Technology                  | Purpose                             |
| --------------------------- | ----------------------------------- |
| **React + Vite**            | Fast development and modern tooling |
| **Material UI (DataGrid)**  | Performant, virtualized table       |
| **Leaflet + React-Leaflet** | Interactive maps                    |
| **JavaScript (ES6+)**       | Core logic                          |
| **Custom Hooks**            | Local state management (No Redux)   |

---

## 📁 Project Structure

```bash
src/
├── api/
│   └── api.js               # Mock API
├── data/
│   └── projects.json        # Mock dataset
├── features/
|   ├── dashboard/
|   │   ├── components/
|   │   │   ├── DataTable.jsx    # Tabular data view
|   │   │   ├── MapView.jsx      # Map + markers
|   │   │   └── Filters.jsx      # Search & status filters
|   │   └── hooks/
|   │       ├── useProjects.js   # Data fetching
|   │       └── useFilters.js    # Client-side filtering logic
|   └── Dashboard.jsx            # Main orchestrator
└── main.jsx
└── App.jsx
```

---

## 🧠 Architecture & Design Decisions

### 1. Component Decomposition

The application is decomposed by responsibility to ensure clarity, maintainability, and scalability.

- **Dashboard**: Acts as the orchestrator. Manages global state and connects data, table, and map.
- **DataTable**: Pure UI component responsible only for rendering rows, pagination, and row selection.
- **MapView**: Handles spatial visualization, marker rendering, centering, and popups.
- **Filters**: Captures user input (search text, status) and emits intent upward.
- **useProjects**: Fetches data and manages loading/error states.
- **useFilters**: Applies pure client-side filtering logic without rendering or side effects.

### 2. Data Flow

> Mock API → useProjects → useFilters → pagination slice → Table + Map

1. Data is fetched once from a mock API.
2. Filtering is applied client-side.
3. Pagination is applied after filtering.
4. Both table and map consume the same derived data.

---

## 📊 Features

### ✅ Data Table

- **Columns**: Project Name, Latitude, Longitude, Status, Last Updated.
- **Client-side search** and status filtering.
- **Pagination** with automatic page sizing based on screen height.
- **Row selection** highlights the corresponding map marker.
- **Efficient rendering** using virtualization (handles 5k+ rows smoothly).

### 🗺️ Map Integration

- **Leaflet map** with OpenStreetMap tiles.
- **Markers** plotted using latitude and longitude.
- **Interactions**:
  - Clicking a table row **highlights the marker** and opens the popup.
  - Smoothly **centers the map** on the selected location.
  - Clicking a marker **highlights the corresponding table row**.
- Proper icon and popup anchoring for accurate positioning at all zoom levels.

### 🔄 Synchronization

- Table and map are **fully synchronized** via shared state.
- Selection flows from either side (**table ↔ map**).
- Smooth UX with animated map transitions (`flyTo`).

---

## ⚡ Performance Considerations

- Uses **MUI DataGrid virtualization** to render only visible rows.
- **Client-side filtering** is efficient for datasets up to several thousand rows.
- **Map renders** only the currently visible subset.
- Architecture can be extended to **server-side filtering/pagination** if needed.

---

## 📐 Scalability Notes

For the given scope (mock API, up to ~5k rows), fetching data once and applying client-side filtering and pagination is:

- **Simple**
- **Predictable**
- **Highly performant**

For larger or real-time datasets, the architecture can be extended to server-side filtering and pagination without major refactoring.

---

## 🧪 Error Handling

- Loading and error states are handled in the data-fetching hook.
- UI remains stable even if the API fails.

---

## 📸 Screenshots / Demo

_(Add screenshots or a short screen recording here showing table–map interaction, filtering, and pagination.)_

---

## ⏱️ Time Spent

| Phase                         | Time           |
| ----------------------------- | -------------- |
| Planning & Architecture       | ~2 hours       |
| Core Implementation           | ~4–5 hours     |
| UI Polish & Interaction Fixes | ~2 hours       |
| **Total**                     | **~8–9 hours** |

---

## 📌 Evaluation Criteria Mapping

| Criterion                    | Addressed                               |
| ---------------------------- | --------------------------------------- |
| **Component decomposition**  | ✅ Clear separation of responsibilities |
| **Handling large datasets**  | ✅ Virtualization + efficient state     |
| **Map + UI synchronization** | ✅ Bi-directional sync                  |
| **Code readability**         | ✅ Modular, clean, and documented       |

---

## 📎 How to Run Locally

1. **Install dependencies**

   ```bash
   npm install
   ```

2. **Start the development server**

   ```bash
   npm run dev
   ```

3. **Open the app**
   Open [http://localhost:5173](http://localhost:5173) in your browser.

---

## ✅ Final Notes

This project focuses on **clarity, correctness, and extensibility** rather than over-engineering. All major design decisions are intentional and aligned with the assignment requirements.
