import { AppContext } from "components/AppContextWrapper/AppContextWrapper";
import Icon from "components/Icon.style";
import GoogleMapReact from "google-map-react";
import Image from "next/image";
import React, {
  memo,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { Icons } from "src/utils/enums";
import useClickOutside from "src/utils/hooks/useClickOutside";
import { Coordinates, Listing } from "src/utils/types";
import { respondTo } from "src/utils/_respondTo";
import styled, { useTheme } from "styled-components";

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
const LightenedOverlay = styled.div`
  // position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  pointer-events: none;
  background: rgba(0, 0, 0, 0.5);
  position: relative;
  z-index: 1;
`;
const MarkerDot = styled.div`
  width: 15px;
  height: 15px;
  border-radius: 50%;
  background: rgba(0, 0, 0, 0.5);
  border: ${(props) => `3px solid ${props.theme.secondary}`};
  position: relative;
  cursor: pointer;
`;
const Popup = styled.div<{ show: boolean }>`
  position: absolute;
  z-index: 1;
  top: -87px;
  left: -45px;
  bottom: 0;
  width: 10rem;
  height: 8rem;
  background: #fff;
  opacity: 0.5;
  transform: scale(0%);
  transition: all 1s;
  border-radius: 0.2rem;
  padding-top: 0.5rem;
  transform-origin: 0% 100% 100%;
  ${({ show }) =>
    show
      ? `
  transform: scale(100%);
  opacity: 1;
`
      : ""}
`;
const ImageContainer = styled.div`
  position: relative;
  width: 90%;
  height: 80%;
  margin: auto;
  border-radius: 0.2rem;
  overflow: hidden;
`;
const BriefDescription = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 90%;
  margin: 0.4rem;
`;
const Price = styled.span`
  font-weight: bold;
  font-size: 0.8rem;
  color: ${({ theme }) => theme.dark};
`;
const Bed = styled.div`
  display: flex;
`;
const Number = styled.span`
  color: ${(props) => props.theme.gray};
  font-size: 0.7rem;
  margin-right: 0.3rem;
  margin-left: 0.5rem;
`;
const Label = styled.span`
  color: ${(props) => props.theme.gray};
  font-size: 0.7rem;
  margin-right: 0.3rem;
`;
const IconContainer = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`;
const ImageOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  pointer-events: none;
  background: rgba(255, 255, 255, 0.5);
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
type MarkerProps = {
  data: Listing;
};
const EnterIcon = ({
  src,
  color,
}: {
  src: string;
  color: string;
  size: number;
}) => (
  <IconContainer>
    <Icon color={color} iconType={Icons.Visit} size={38} />
  </IconContainer>
);
const Marker = memo(({ data }: MarkerProps) => {
  const { photo, beds } = data;
  const [showPopup, setShowPopup] = useState(false);
  const theme = useTheme();
  const ref = useRef(null);
  const useClickOutsideCallback = useCallback(() => setShowPopup(false), []);
  useClickOutside(ref, useClickOutsideCallback);
  {
    return (
      <MarkerDot onClick={() => setShowPopup(true)}>
        <Popup ref={ref} show={showPopup}>
          <ImageContainer>
            <Image src={photo} layout="fill" objectFit="cover" />
            <ImageOverlay></ImageOverlay>
          </ImageContainer>
          <BriefDescription>
            <Price>$1200</Price>
            <Bed>
              <Icon
                iconType={Icons.Bed}
                color={(theme as any).gray}
                size={15}
              />
              <Number>{beds}</Number>
              <Label>{Icons.Bed.toString()}</Label>
            </Bed>
          </BriefDescription>
          <EnterIcon src={"#"} color={(theme as any).dark} size={38} />
        </Popup>
      </MarkerDot>
    );
  }
});

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
      <LightenedOverlay></LightenedOverlay>
    </>
  );
};

export default Map;
