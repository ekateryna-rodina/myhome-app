import { useLazyQuery } from "@apollo/client";
import {
  GoogleMap,
  InfoWindow,
  Marker,
  useJsApiLoader,
} from "@react-google-maps/api";
import { AppContext } from "components/AppContextWrapper/AppContextWrapper";
import { InfoWindowContent } from "components/InfoWindowContent";
import Link from "next/link";
import { theme } from "pages/_app";
import React, {
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import { GET_PROPERTIES_QUERY } from "src/utils/constants";
import { ListingsFormat } from "src/utils/enums";
import { respondTo } from "src/utils/_respondTo";
import styled from "styled-components";

const MapContainer = styled.div<{ listingsFormat: ListingsFormat }>`
  --transform: ${({ listingsFormat }: { listingsFormat: ListingsFormat }) =>
    listingsFormat === ListingsFormat.Grid
      ? "translateY(calc(100% + 3rem))"
      : ""};
  position: fixed;
  top: 2rem;
  left: 0;
  right: 0;
  height: 95vh;
  -webkit-transition: -webkit-all 0.8s linear;
  -moz-transition: -moz-all 0.8s linear;
  -o-transition: -o-all 0.8s linear;
  transition: all 0.5s linear;
  -webkit-transform: var(--transform);
  -moz-transform: var(--transform);
  -o-transform: var(--transform);
  transform: var(--transform);
  ${respondTo.laptopAndDesktop`
    --left: ${({ listingsFormat }: { listingsFormat: ListingsFormat }) =>
      listingsFormat === ListingsFormat.Map ? "calc(0rem + 2rem)" : "55vw"};
    --transform: ${({ listingsFormat }: { listingsFormat: ListingsFormat }) =>
      listingsFormat === ListingsFormat.Grid
        ? "translateX(calc(100% + 3rem))"
        : ""};
      height:calc(100vh - 4.5rem);
      position: absolute;
      top: 0;
      bottom: 0;
      left: var(--left);
      right: 4rem;
      -webkit-transform: var(--transform);
      -moz-transform: var(--transform);
      -ms-transform: var(--transform);
      -o-transform: var(--transform);
      transform: var(--transform);
      border-radius: 1rem;
      `};
`;
const ListingsFormatSwitcherContainer = styled.div<{ show: boolean }>`
  position: fixed;
  z-index: 30;
  opacity: ${({ show }) => (show ? "1" : "0")};
  left: 1rem;
  top: 4.5rem;
  transition: all 0.5s;
  ${respondTo.tablet`
      top: 5rem;
    `}
  ${respondTo.laptopAndDesktop`
      left: 3rem;
      top: 5rem;
  `}
`;

const mapContainerStyle = {
  width: "100%",
  height: "100%",
};
const center = {
  lat: 40.04633228616252, //geographical center of USA
  lng: -75.2759768540747,
};
const options = {
  disableDefaultUI: true,
  zoomControl: true,
};
const Map = () => {
  const googleMapsApiKey = process.env.NEXT_PUBLIC_GMAP_KEY?.toString() ?? "";
  const { isLoaded, loadError } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey,
  });
  const mapRef = useRef();
  const [map, setMap] = useState<any>(null);
  const [initialLoad, setInitialLoad] = useState<boolean>(true);
  const onMapLoad = useCallback(function callback(map) {
    mapRef.current = map;
    setMap(map);
  }, []);
  const {
    properties,
    filter,
    handleFilter,
    handleLoading,
    handleProperties,
    focusItemListId,
    listingsFormat,
  } = useContext(AppContext);
  const loadBounds = function () {
    if (!mapRef.current || !properties?.length) return;
    const bounds = new window.google.maps.LatLngBounds();
    if (properties?.length) {
      let markers = properties.map(
        (p) => new window.google.maps.LatLng(p.lat, p.long)
      );
      for (let i = 0; i < markers.length; i++) {
        bounds.extend(markers[i]);
        (mapRef.current as any).fitBounds(bounds);
      }
    }
  };
  const [getPropertiesByCoordinates, { loading, data, error }] =
    useLazyQuery(GET_PROPERTIES_QUERY);
  useEffect(() => {
    loadBounds();
  }, [properties, map]);
  const [boundaries, setBoundaries] = useState<{
    minLat: number;
    maxLat: number;
    minLng: number;
    maxLng: number;
  } | null>(null);
  const markerBoundariesOffset = (value: number) => value * 0.095;
  const [showInfoWindow, setShowInfoWindow] = useState<{
    index: number;
    data: any;
  } | null>(null);
  useEffect(() => {
    if (!boundaries) return;
    handleFilter({ ...filter, mapCoordinates: boundaries });
  }, [boundaries]);
  useEffect(() => {
    if (Object.values(filter.mapCoordinates).every((c) => !c)) return;
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
    if (error) console.log(error);
    handleLoading(loading);
  }, [error, loading]);
  useEffect(() => {
    if (!data?.properties) return;
    handleProperties(data.properties);
  }, [data]);
  const setBoundariesForProperties = () => {
    if (!mapRef.current) return;
    const bounds = (mapRef.current as any).getBounds();

    if (!bounds) return;
    const northEast = bounds.getNorthEast();
    const southWest = bounds.getSouthWest();
    let [minLng, minLat, maxLng, maxLat] = [
      southWest.lng(),
      southWest.lat(),
      northEast.lng(),
      northEast.lat(),
    ];
    minLng = minLng + markerBoundariesOffset(maxLng - minLng);
    maxLng = maxLng - markerBoundariesOffset(maxLng - minLng);
    minLat = minLat + markerBoundariesOffset(maxLat - minLat);
    maxLat = maxLat - markerBoundariesOffset(maxLat - minLat);

    setBoundaries((boundaries) => {
      return { minLng, maxLng, minLat, maxLat };
    });
    setInitialLoad(false);
  };
  const onDragEndHandler = () => {
    setBoundariesForProperties();
  };
  const onZoomChangedHandler = () => {
    if (initialLoad) return;
    setBoundariesForProperties();
  };
  if (loadError) return <div>{loadError}</div>;
  return (
    <>
      <MapContainer listingsFormat={listingsFormat}>
        {isLoaded && properties ? (
          <GoogleMap
            mapContainerStyle={mapContainerStyle}
            zoom={7}
            center={center}
            onLoad={onMapLoad}
            options={options}
            onDragEnd={onDragEndHandler}
            onZoomChanged={onZoomChangedHandler}
          >
            {properties.map((prop, index) => (
              <Marker
                key={prop.id}
                position={new google.maps.LatLng(+prop.lat, +prop.long)}
                icon={{
                  path: "M12.5,0A9.24,9.24,0,0,0,3,9.41c0,7.88,8.8,15.17,9.17,15.47a.5.5,0,0,0,.65,0C13.21,24.53,22,16.51,22,9.41A9.24,9.24,0,0,0,12.5,0Zm0,14A4.5,4.5,0,1,1,17,9.5,4.5,4.5,0,0,1,12.5,14Z",
                  fillColor:
                    focusItemListId === prop.id ? theme.secondary : theme.dark,
                  fillOpacity: 1,
                  strokeWeight: 0,
                  rotation: 0,
                  scale: 1,
                  anchor: new window.google.maps.Point(15, 30),
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
          </GoogleMap>
        ) : (
          <></>
        )}
      </MapContainer>
      {/* <ListingsFormatSwitcherContainer
        show={listingsFormat == ListingsFormat.Map}
      >
        <ListingsFormatSwitcher />
      </ListingsFormatSwitcherContainer> */}
      <ListingsFormatSwitcherContainer show={true}>
        <Link
          href={{ pathname: "propertiesByIds", query: { ids: "47|48|49" } }}
        >
          <a>Show me selected only</a>
        </Link>
      </ListingsFormatSwitcherContainer>
    </>
  );
};

export default Map;
