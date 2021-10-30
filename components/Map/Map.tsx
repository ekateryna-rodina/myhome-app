import { useLazyQuery } from "@apollo/client";
import {
  GoogleMap,
  InfoWindow,
  Marker,
  useJsApiLoader,
} from "@react-google-maps/api";
import { AppContext } from "components/AppContextWrapper/AppContextWrapper";
import { InfoWindowContent } from "components/InfoWindowContent";
import React, {
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import { GET_PROPERTIES_QUERY } from "src/utils/constants";
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
  const onMapLoad = useCallback(function callback(map) {
    mapRef.current = map;
    setMap(map);
  }, []);
  const { properties, filter, handleFilter } = useContext(AppContext);
  const loadBounds = function () {
    if (!mapRef.current || !properties?.length) return;
    const bounds = new window.google.maps.LatLngBounds();
    console.log(properties);
    if (properties?.length) {
      let markers = properties.map(
        (p) =>
          new window.google.maps.LatLng(parseFloat(p.lat), parseFloat(p.long))
      );
      for (let i = 0; i < markers.length; i++) {
        bounds.extend(markers[i]);
      }
    }
    (mapRef.current as any).fitBounds(bounds);
  };
  const [getPropertiesByCoordinates, { loading, data, error }] =
    useLazyQuery(GET_PROPERTIES_QUERY);
  useEffect(() => {
    loadBounds();
    console.log("we don");
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
    console.log(filter.mapCoordinates);
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
  const setBoundariesForProperties = () => {
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
  const onZoomChangedHandler = () => {
    setBoundariesForProperties();
  };
  const onDragEndHandler = () => {
    setBoundariesForProperties();
  };
  if (loadError) return <div>{loadError}</div>;
  return (
    <>
      <MapContainer>
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
          </GoogleMap>
        ) : (
          <></>
        )}
      </MapContainer>
    </>
  );
};

export default Map;

// import {
//   GoogleMap,
//   InfoWindow,
//   Marker,
//   useJsApiLoader,
// } from "@react-google-maps/api";
// import { AppContext } from "components/AppContextWrapper/AppContextWrapper";
// import { InfoWindowContent } from "components/InfoWindowContent";
// import React, {
//   useCallback,
//   useContext,
//   useEffect,
//   useRef,
//   useState,
// } from "react";
// import { respondTo } from "src/utils/_respondTo";
// import styled from "styled-components";
// const MapContainer = styled.div`
//   position: fixed;
//   top: 80px;
//   left: 0;
//   right: 0;
//   height: 95vh;

//   ${respondTo.laptopAndDesktop`
//       height:"calc(100vh - 4.5rem)";
//       position: inherit;
//       top: 0;
//       bottom: 0;
//       flex: 1;
//       `}
// `;
// const mapContainerStyle = {
//   width: "100%",
//   height: "100%",
// };
// const center = {
//   lat: 40.04633228616252, //geographical center of USA
//   lng: -75.2759768540747,
// };
// const options = {
//   disableDefaultUI: true,
//   zoomControl: true,
// };
// const Map = () => {
//   const googleMapsApiKey = process.env.NEXT_PUBLIC_GMAP_KEY?.toString() ?? "";
//   const { isLoaded, loadError } = useJsApiLoader({
//     id: "google-map-script",
//     googleMapsApiKey,
//   });
//   const mapRef = useRef();
//   const onMapLoad = useCallback(function callback(map) {
//     mapRef.current = map;
//   }, []);
//   const { properties } = useContext(AppContext);
//   useEffect(() => {
//     if (!mapRef.current) return;
//     const bounds = new window.google.maps.LatLngBounds();
//     if (properties?.length) {
//       let markers = properties.map(
//         (p) =>
//           new window.google.maps.LatLng(parseFloat(p.lat), parseFloat(p.long))
//       );
//       for (let i = 0; i < markers.length; i++) {
//         bounds.extend(markers[i]);
//       }
//     }
//     (mapRef.current as any).fitBounds(bounds);
//     console.log(properties);
//   }, [properties]);
//   const [showInfoWindow, setShowInfoWindow] = useState<{
//     index: number;
//     data: any;
//   } | null>(null);
//   if (loadError) return <div>{loadError}</div>;
//   return (
//     <>
//       <MapContainer>
//         {isLoaded && properties ? (
//           <GoogleMap
//             mapContainerStyle={mapContainerStyle}
//             zoom={7}
//             center={center}
//             onLoad={onMapLoad}
//             options={options}
//           >
//             {properties.map((prop, index) => (
//               <Marker
//                 key={prop.id}
//                 position={new google.maps.LatLng(+prop.lat, +prop.long)}
//                 icon={{
//                   url: "https://res.cloudinary.com/kariecloud/image/upload/v1635431425/home_xbygk3.png",
//                   scaledSize: new window.google.maps.Size(30, 30),
//                   origin: new window.google.maps.Point(0, 0),
//                   anchor: new window.google.maps.Point(32, 65),
//                 }}
//                 onClick={(e) => setShowInfoWindow({ index, data: prop })}
//               >
//                 {showInfoWindow?.index == index && (
//                   <InfoWindow>
//                     <InfoWindowContent data={showInfoWindow.data} />
//                   </InfoWindow>
//                 )}
//               </Marker>
//             ))}
//           </GoogleMap>
//         ) : (
//           <></>
//         )}
//       </MapContainer>
//     </>
//   );
// };

// export default Map;
