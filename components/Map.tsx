import GoogleMapReact from "google-map-react";
import React, { useContext } from "react";
import styled from "styled-components";
import { IMediaQuery } from "types/media";
import { Context } from "../pages/_app";

const AnyReactComponent = ({ text }) => <div>{text}</div>;

const MapContainer = styled.div<{ media: Partial<IMediaQuery> }>`
  position: fixed;
  top: 80px;
  left: 0;
  right: 0;
  height: ${({ media }) =>
    media["isLaptop"] || media["isDesktop"] || media["isBigDesktop"]
      ? "calc(100vh - 4.5rem)"
      : "40vh"};
  ${({ media }) =>
    media["isLaptop"] || media["isDesktop"] || media["isBigDesktop"]
      ? `position: inherit;
      top: 0;
      flex: 1;`
      : ""}
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

  const mediaMap = useContext(Context).breakpoints;
  return (
    // Important! Always set the container height explicitly
    <MapContainer media={mediaMap}>
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
