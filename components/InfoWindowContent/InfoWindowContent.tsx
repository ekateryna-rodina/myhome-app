import React from "react";
import { Icons } from "src/utils/enums";
import { Listing } from "src/utils/types";
import styled, { useTheme } from "styled-components";
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
const ImageOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  transition: all 0.5s;
  background: rgba(255, 255, 255, 0.3);
  opacity: 0;
  &:hover {
    opacity: 1;
  }
`;
const IconContainer = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  opacity: 0;
  transition: all 0.5s;
  ${ImageContainer}:hover & {
    opacity: 1;
  }
`;
const Image = styled.div.attrs((props: { src: string }) => ({
  src: props.src,
}))`
  width: 100px;
  height: 75px;
`;

type InfoWindowContentProps = {
  data: Listing;
};
const InfoWindowContent = ({ data }: InfoWindowContentProps) => {
  const { photo, beds } = data;
  const theme = useTheme();
  return (
    <>
      <ImageContainer>
        {/* <Image src={photo} layout="fill" objectFit="cover" /> */}
        <img src={photo} width={100} height={75}></img>
        <ImageOverlay></ImageOverlay>
        {/* <EnterIcon src={"#"} color={(theme as any).dark} size={38} /> */}
      </ImageContainer>
      <BriefDescription>
        <Price>$1200</Price>
        <Bed>
          {/* <Icon iconType={Icons.Bed} color={(theme as any).gray} size={15} /> */}
          <Number>{beds}</Number>
          <Label>{Icons.Bed.toString()}</Label>
        </Bed>
      </BriefDescription>
    </>
  );
};

export default InfoWindowContent;
