import { useLazyQuery } from "@apollo/client";
import {
  GoogleMap,
  InfoWindow,
  Marker,
  useJsApiLoader,
} from "@react-google-maps/api";
import { AppContext } from "components/AppContextWrapper/AppContextWrapper";
import { InfoWindowContent } from "components/InfoWindowContent";
import React, { useContext, useEffect, useRef, useState } from "react";
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
    lat += parseFloat(property.lat);
    lng += parseFloat(property.long);
  }

  lat = lat / propertiesLength;
  lng = lng / propertiesLength;

  return { lat, lng };
};
const center = {
  lat: 40.04633228616252, //geographical center of USA
  lng: -75.2759768540747,
};
const mapContainerStyle = { width: "100%", height: "100%" };
const Map = () => {
  const googleMapsApiKey = process.env.NEXT_PUBLIC_GMAP_KEY?.toString() ?? "";
  // const [map, setMap] = useState(null);
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey,
  });
  const { properties, filter, handleFilter, handleLoading, handleProperties } =
    useContext(AppContext);
  const mapRef = useRef(null);
  const onLoad = React.useCallback(function callback(map) {
    mapRef.current = map;
    // setMap(map);
    console.log("load map");
    const bounds = new window.google.maps.LatLngBounds();

    // if (properties?.length) {
    //   console.log("nooooooo");
    //   let markers = properties.map(
    //     (p) => new window.google.maps.LatLng(+p.lat, +p.long)
    //   );
    //   for (let i = 0; i < markers.length; i++) {
    //     bounds.extend(markers[i]);
    //   }
    // }
    // console.log(mapRef.current.getCenter().lat());
    (mapRef.current as any).fitBounds(bounds);
    // setMapProps({
    //   lat: (mapRef.current as any).getCenter().lat(),
    //   lng: (mapRef.current as any).getCenter().lng(),
    // });
  }, []);

  const [mapProps, setMapProps] = useState({
    lat: 40.04633228616252, //geographical center of USA
    lng: -75.2759768540747,
  });
  useEffect(() => {
    if (!mapRef.current || !properties || !properties.length) return;
    // setMapProps({
    //   lat: (mapRef.current as any).getCenter().lat(),
    //   lng: (mapRef.current as any).getCenter().lng(),
    // });
    // console.log("load markers and bounds");
    const bounds = new window.google.maps.LatLngBounds();
    console.log(properties.length);
    if (properties.length) {
      console.log("nooooooo");
      let markers = properties.map(
        (p) => new window.google.maps.LatLng(+p.lat, +p.long)
      );
      for (let i = 0; i < markers.length; i++) {
        bounds.extend(markers[i]);
      }
    }

    (mapRef.current as any).fitBounds(bounds);
    // const newCenter = getCenter(properties);
    // if (!newCenter) return;
    // (mapRef.current as any).setCenter(newCenter);
    console.log(properties);
  }, [properties]);
  const onUnmount = React.useCallback(function callback(map) {
    mapRef.current = null;
    // setMap(null);
  }, []);

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
  const debouncedActiveRegion = useDebounce<any>(boundaries);
  const [getPropertiesByCoordinates, { loading, data, error }] =
    useLazyQuery(GET_PROPERTIES_QUERY);

  // useEffect(() => {
  //   if (!properties) return;
  //   const centerResult: { lat: number; lng: number } | boolean =
  //     getCenter(properties);
  //   if (!Object.keys(centerResult).length) return;
  //   const { lat, lng } = centerResult as Coordinates;
  //   const center = {
  //     lat,
  //     lng,
  //   };
  //   setMapProps(center);
  // }, [properties]);
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
    if (!mapRef.current) return;
    const bounds = (mapRef.current as any).getBounds();

    if (!bounds) return;
    console.log("center changed");
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
            ref={mapRef}
            mapContainerStyle={mapContainerStyle}
            center={center}
            onLoad={onLoad}
            onUnmount={onUnmount}
            onDragEnd={onCenterChanged}
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
