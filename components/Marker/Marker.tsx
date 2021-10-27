import Image from "next/image";
import React, { memo, useCallback, useRef, useState } from "react";
import { Icons } from "src/utils/enums";
import useClickOutside from "src/utils/hooks/useClickOutside";
import { Listing } from "src/utils/types";
import styled, { useTheme } from "styled-components";
import Icon from "../Icon.style";
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

export default Marker;
