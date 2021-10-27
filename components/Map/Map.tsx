import { AppContext } from "components/AppContextWrapper/AppContextWrapper";
import { Marker } from "components/Marker";
import GoogleMapReact from "google-map-react";
import React, { useContext, useEffect, useMemo, useState } from "react";
import { Coordinates, Listing } from "src/utils/types";
import { respondTo } from "src/utils/_respondTo";
import styled from "styled-components";

const MapContainer = styled.div`
  position: fixed;
  top: 80px;
  left: 0;
  right: 0;
  height: 100vh;

  ${respondTo.laptopAndDesktop`
      height:"calc(100vh - 4.5rem)";
      position: inherit;
      top: 0;
      bottom: 0;
      flex: 1;
      `}
`;

const getCenter = (properties: Listing[]) => {
  if (!properties.length) return false;
  let lat = 0;
  let lng = 0;
  let propertiesLength = properties.length;

  for (var i = 0; i < properties.length; i++) {
    const property = properties[i];
    lat += +property.lat;
    lng += +property.long;
  }

  lat = lat / propertiesLength;
  lng = lng / propertiesLength;

  return { lat, lng };
};

const Map = () => {
  const secret = process.env.NEXT_PUBLIC_GMAP_KEY;
  let defaultProps = {
    center: {
      lat: 39.95351942865179,
      lng: -75.16838986985532,
    },
    zoom: 13,
  };
  const { properties } = useContext(AppContext);
  const [mapProps, setMapProps] = useState(defaultProps);
  const activeProperties = useMemo(() => {
    return properties.filter((prop) => prop.lat && prop.long);
  }, [properties]);
  useEffect(() => {
    const centerResult: { lat: number; lng: number } | boolean =
      getCenter(activeProperties);
    if (!Object.keys(centerResult).length) return;
    const { lat, lng } = centerResult as Coordinates;
    const center = {
      lat,
      lng,
    };
    setMapProps({ ...mapProps, center });
  }, [properties]);
  return (
    <>
      <MapContainer>
        {secret && (
          <GoogleMapReact
            bootstrapURLKeys={{ key: secret }}
            center={mapProps.center}
            defaultZoom={mapProps.zoom}
          >
            {properties.map((prop) => (
              <Marker lat={prop.lat} lng={prop.long} data={prop} />
            ))}
          </GoogleMapReact>
        )}
      </MapContainer>
    </>
  );
};

export default Map;
