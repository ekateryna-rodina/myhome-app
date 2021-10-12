import GoogleMapReact from "google-map-react";
import React from "react";
import { respondTo } from "src/utils/_respondTo";
import styled from "styled-components";

const AnyReactComponent = ({ text }) => <div>{text}</div>;

const MapContainer = styled.div`
  position: fixed;
  top: 80px;
  left: 0;
  right: 0;
  height: 40vh;

  ${respondTo.laptopAndDesktop`
      height:"calc(100vh - 4.5rem)";
      position: inherit;
      top: 0;
      flex: 1;
      `}
`;

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
    <MapContainer>
      {secret && (
        <GoogleMapReact
          bootstrapURLKeys={{ key: secret }}
          defaultCenter={defaultProps.center}
          defaultZoom={defaultProps.zoom}
        >
          <AnyReactComponent lat={59.955413} lng={30.337844} text="My Marker" />
        </GoogleMapReact>
      )}
    </MapContainer>
  );
};

export default Map;
