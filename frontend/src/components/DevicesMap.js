import { useState } from "react";
import { useNavigate } from "react-router-dom";
import ReactMapGL, { Marker } from "react-map-gl";
import { Room } from "@mui/icons-material";
import "mapbox-gl/dist/mapbox-gl.css";

const DevicesMap = ({ devicesData }) => {
  const navigate = useNavigate();

  const [viewState, setViewState] = useState({
    latitude: 40.3155,
    longitude: -3.7126,
    zoom: 10,
  });

  return (
    <div style={{ width: 1400, height: 600, border: "1px solid black" }}>
      <ReactMapGL
        mapboxAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
        {...viewState}
        onMove={(e) => setViewState(e.viewState)}
        style={{ width: 1400, height: 600 }}
        onViewportChange={(viewState) => setViewState(viewState)}
        mapStyle="mapbox://styles/mapbox/streets-v9"
      >
        {devicesData.map((entry) => (
          <>
            <Marker
              key={entry.id}
              latitude={entry.latitude}
              longitude={entry.longitud}
            >
              <Room
                style={{
                  fontSize: 28,
                  color: "red",
                  cursor: "pointer",
                }}
                onClick={() => navigate(`/devices/${entry.id}`)}
              />
            </Marker>
          </>
        ))}
      </ReactMapGL>
    </div>
  );
};

export default DevicesMap;
