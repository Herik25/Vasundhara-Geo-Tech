import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { useEffect, useRef } from "react";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

const blueIcon = new L.Icon({
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  iconRetinaUrl:
    "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
  iconAnchor: [12, 41],
  popupAnchor: [0, -40],
});

const redIcon = new L.Icon({
  iconUrl:
    "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-red.png",
  iconRetinaUrl:
    "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-red-2x.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
  iconAnchor: [12, 41],
  popupAnchor: [0, -40],
});

const INDIA_CENTER = [22.5937, 78.9629];
const INDIA_BOUNDS = [
  [6.5546, 68.1114],
  [35.6745, 97.3956],
];

function MapView({ projects, selectedProjectId, onMarkerSelect }) {
  const mapRef = useRef(null);
  const markerRefs = useRef({});

  useEffect(() => {
    if (selectedProjectId && markerRefs.current[selectedProjectId]) {
      markerRefs.current[selectedProjectId].openPopup();
    }
  }, [selectedProjectId]);

  useEffect(() => {
    if (!selectedProjectId) return;

    const marker = markerRefs.current[selectedProjectId];
    const map = mapRef.current;

    if (marker && map) {
      const latLng = marker.getLatLng();

      map.flyTo(latLng, map.getZoom(), {
        animate: true,
        duration: 0.8,
      });

      marker.openPopup();
    }
  }, [selectedProjectId]);

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
          // opacity={project.id === selectedProjectId ? 1 : 0.7}
          icon={project.id === selectedProjectId ? redIcon : blueIcon}
          ref={(ref) => {
            if (ref) {
              markerRefs.current[project.id] = ref;
            }
          }}
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
