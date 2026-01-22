import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { useRef } from "react";
import "leaflet/dist/leaflet.css";

const INDIA_CENTER = [22.5937, 78.9629];
const INDIA_BOUNDS = [
  [6.5546, 68.1114],
  [35.6745, 97.3956],
];

function MapView({ projects, selectedProjectId, onMarkerSelect }) {
  const mapRef = useRef(null);

  return (
    <MapContainer
      center={INDIA_CENTER}
      zoom={5}
      style={{ height: "100%", width: "100%" }}
      whenReady={(map) => {
        mapRef.current = map.target;
        map.target.invalidateSize();
        map.target.fitBounds(INDIA_BOUNDS, { padding: [20, 20] });
      }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution="&copy; OpenStreetMap contributors"
      />

      {projects.map((project) => (
        <Marker
          key={project.id}
          position={[project.latitude, project.longitude]}
          eventHandlers={{
            click: () => onMarkerSelect(project.id),
          }}
          opacity={project.id === selectedProjectId ? 1 : 0.7}
        >
          <Popup>
            <strong>{project.projectName}</strong>
            <br />
            Status: {project.status}
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}

export default MapView;
