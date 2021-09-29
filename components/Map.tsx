import GoogleMapReact from "google-map-react";
import React, { useContext } from "react";
import { Context } from "../pages/_app";

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

  const mediaMap = useContext(Context).breakpoints;
  return (
    // Important! Always set the container height explicitly
    <div
      style={{
        height:
          mediaMap["isLaptop"] ||
          mediaMap["isDesktop"] ||
          mediaMap["isBigDesktop"]
            ? "calc(100vh - 4.5rem)"
            : "40vh",
        // flex: 1,
      }}
    >
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
