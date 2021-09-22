import GoogleMapReact from "google-map-react";
import React from "react";

const AnyReactComponent = ({ text }) => <div>{text}</div>;

interface MapProps {
  secret: string;
}
const Map = (props: MapProps) => {
  const { secret } = props;

  let defaultProps = {
    center: {
      lat: 59.95,
      lng: 30.33,
    },
    zoom: 11,
  };

  return (
    // Important! Always set the container height explicitly
    <div style={{ height: "100vh", width: "30%" }}>
      {secret && (
        <GoogleMapReact
          bootstrapURLKeys={{ key: secret }}
          defaultCenter={defaultProps.center}
          defaultZoom={defaultProps.zoom}
        >
          <AnyReactComponent lat={59.955413} lng={30.337844} text="My Marker" />
        </GoogleMapReact>
      )}
    </div>
  );
};

export default Map;
