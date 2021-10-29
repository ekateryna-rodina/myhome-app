import { useLazyQuery } from "@apollo/client";
import {
  GoogleMap,
  InfoWindow,
  Marker,
  useJsApiLoader,
} from "@react-google-maps/api";
import { AppContext } from "components/AppContextWrapper/AppContextWrapper";
import { InfoWindowContent } from "components/InfoWindowContent";
import React, { useContext, useEffect, useState } from "react";
import { GET_PROPERTIES_QUERY } from "src/utils/constants";
import useDebounce from "src/utils/hooks/useDebounce";
import { Listing } from "src/utils/types";
import { respondTo } from "src/utils/_respondTo";
import styled from "styled-components";

const MapContainer = styled.div`
  position: fixed;
  top: 80px;
  left: 0;
  right: 0;
  height: 95vh;

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
  const [map, setMap] = useState(null);
  let defaultProps = {
    center: {
      lat: -10.33996375490696,
      lng: -40.83884220436968,
    },
    zoom: 13,
  };
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: secret?.toString() ?? "",
  });
  const onLoad = React.useCallback(function callback(map) {
    console.log("on load", properties);
    setMap(map);
  }, []);
  useEffect(() => {
    if (!map || !properties) return;
    const bounds = new window.google.maps.LatLngBounds();
    let markers = properties.map(
      (p) => new window.google.maps.LatLng(+p.lat, +p.long)
    );
    for (let i = 0; i < markers.length; i++) {
      bounds.extend(markers[i]);
    }
    (map as any).fitBounds(bounds);
  }, [map]);
  const onUnmount = React.useCallback(function callback(map) {
    setMap(null);
  }, []);
  const { properties, filter, handleFilter, handleLoading, handleProperties } =
    useContext(AppContext);
  const [mapProps, setMapProps] = useState(defaultProps);

  const [showInfoWindow, setShowInfoWindow] = useState<{
    index: number;
    data: any;
  } | null>(null);
  const [boundaries, setBoundaries] = useState<{
    minLat: number;
    maxLat: number;
    minLng: number;
    maxLng: number;
  } | null>(null);

  // helps to define an active area for markers more precisely
  const markerBoundariesOffset = (value: number) => value * 0.095;
  const debouncedCenter = useDebounce<{}>(mapProps.center, 1000);
  const [getPropertiesByCoordinates, { loading, data, error }] =
    useLazyQuery(GET_PROPERTIES_QUERY);

  useEffect(() => {
    // const centerResult: { lat: number; lng: number } | boolean =
    //   getCenter(activeProperties);
    // if (!Object.keys(centerResult).length) return;
    // const { lat, lng } = centerResult as Coordinates;
    // const center = {
    //   lat,
    //   lng,
    // };
    // setMapProps({ ...mapProps, center });
    // reset bounds
    onLoad(map);
  }, [properties]);
  useEffect(() => {
    if (
      !boundaries ||
      !Object.keys(boundaries).length ||
      Object.values(boundaries).every((i) => !i)
    )
      return;
    // set global context in case if we want to apply new filter with given coordinates
    handleFilter({ ...filter, mapCoordinates: boundaries });
  }, [boundaries]);
  useEffect(() => {
    // load new properties
    const newFilter = JSON.stringify({
      ...filter,
      mapCoordinates: filter.mapCoordinates,
    });
    getPropertiesByCoordinates({
      variables: {
        locationId: 0,
        filter: newFilter,
      },
    });
    console.log("coordinatea chanfe");
  }, [filter.mapCoordinates]);
  useEffect(() => {
    // save properties to the context after coordinates changed
    if (data == undefined) return;
    handleLoading(loading);
    handleProperties(data.properties);
    // eslint-disable-next-line
  }, [data]);
  const onCenterChanged = () => {
    // changes local state
    if (!map || !map) return;
    const bounds = (map as any).getBounds();
    if (!bounds) return;
    console.log("center is changed");
    const { Pa, yb } = bounds;
    const [minLng, maxLng] = [
      +Pa["g"] + markerBoundariesOffset(Pa["h"] - Pa["g"]),
      +Pa["h"] - markerBoundariesOffset(Pa["h"] - Pa["g"]),
    ];
    const [minLat, maxLat] = [
      +yb["g"] + markerBoundariesOffset(yb["h"] - yb["g"]),
      +yb["h"] - markerBoundariesOffset(yb["h"] - yb["g"]),
    ];
    setBoundaries((boundaries) => {
      return { minLng, maxLng, minLat, maxLat };
    });
  };
  return (
    <>
      <MapContainer>
        {isLoaded && properties ? (
          <GoogleMap
            mapContainerStyle={{ width: "100%", height: "100%" }}
            center={mapProps.center}
            zoom={mapProps.zoom}
            onLoad={onLoad}
            onUnmount={onUnmount}
            onCenterChanged={onCenterChanged}
            onZoomChanged={onCenterChanged}
          >
            {properties.map((prop, index) => (
              <Marker
                key={prop.id}
                position={new google.maps.LatLng(+prop.lat, +prop.long)}
                icon={{
                  url: "https://res.cloudinary.com/kariecloud/image/upload/v1635431425/home_xbygk3.png",
                  scaledSize: new window.google.maps.Size(30, 30),
                  origin: new window.google.maps.Point(0, 0),
                  anchor: new window.google.maps.Point(32, 65),
                }}
                onClick={(e) => setShowInfoWindow({ index, data: prop })}
              >
                {showInfoWindow?.index == index && (
                  <InfoWindow>
                    <InfoWindowContent data={showInfoWindow.data} />
                  </InfoWindow>
                )}
              </Marker>
            ))}
            <Marker
              onClick={() => console.log("max")}
              position={
                new google.maps.LatLng(
                  boundaries?.maxLat ?? 0,
                  boundaries?.maxLng ?? 0
                )
              }
            ></Marker>
            <Marker
              onClick={() => console.log("min")}
              position={
                new google.maps.LatLng(
                  boundaries?.minLat ?? 0,
                  boundaries?.minLng ?? 0
                )
              }
            ></Marker>
            <></>
          </GoogleMap>
        ) : (
          <></>
        )}
      </MapContainer>
    </>
  );
};

export default Map;

// import { AppContext } from "components/AppContextWrapper/AppContextWrapper";
// import { Marker } from "components/Marker";
// import GoogleMapReact from "google-map-react";
// import React, { useContext, useEffect, useMemo, useRef, useState } from "react";
// import { Coordinates, Listing } from "src/utils/types";
// import { respondTo } from "src/utils/_respondTo";
// import styled from "styled-components";

// const MapContainer = styled.div`
//   position: fixed;
//   top: 80px;
//   left: 0;
//   right: 0;
//   height: 100vh;

//   ${respondTo.laptopAndDesktop`
//       height:"calc(100vh - 4.5rem)";
//       position: inherit;
//       top: 0;
//       bottom: 0;
//       flex: 1;
//       `}
// `;

// const getCenter = (properties: Listing[]) => {
//   if (!properties.length) return false;
//   let lat = 0;
//   let lng = 0;
//   let propertiesLength = properties.length;

//   for (var i = 0; i < properties.length; i++) {
//     const property = properties[i];
//     lat += +property.lat;
//     lng += +property.long;
//   }

//   lat = lat / propertiesLength;
//   lng = lng / propertiesLength;

//   return { lat, lng };
// };

// const Map = () => {
//   const secret = process.env.NEXT_PUBLIC_GMAP_KEY;
//   let defaultProps = {
//     center: {
//       lat: 39.95351942865179,
//       lng: -75.16838986985532,
//     },
//     zoom: 13,
//   };
//   const { properties } = useContext(AppContext);
//   const [mapProps, setMapProps] = useState(defaultProps);
//   const [map, setMap] = useState(null);
//   const ref = useRef(null);
//   const activeProperties = useMemo(() => {
//     return properties.filter((prop) => prop.lat && prop.long);
//   }, [properties]);
//   useEffect(() => {
//     // new google.maps.Map(ref, defaultProps);
//   }, []);
//   useEffect(() => {
//     const centerResult: { lat: number; lng: number } | boolean =
//       getCenter(activeProperties);
//     if (!Object.keys(centerResult).length) return;
//     const { lat, lng } = centerResult as Coordinates;
//     const center = {
//       lat,
//       lng,
//     };
//     setMapProps({ ...mapProps, center });
//   }, [properties]);
//   const dragMapEndHandle = (e: any) => {
//     // console.log(e.center["lat"](), e.center["lng"]());
//     console.log(ref.current);
//   };
//   return (
//     <>
//       <MapContainer>
//         {secret && (
//           // <GoogleMapReact
//           //   ref={ref}
//           //   bootstrapURLKeys={{ key: secret }}
//           //   center={mapProps.center}
//           //   defaultZoom={mapProps.zoom}
//           //   onDragEnd={dragMapEndHandle}
//           // >
//           //   {properties.map((prop) => (
//           //     <Marker lat={prop.lat} lng={prop.long} data={prop} />
//           //   ))}
//           // </GoogleMapReact>
//         )}
//       </MapContainer>
//     </>
//   );
// };

// export default Map;
