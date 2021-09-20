import React, { useContext } from "react";
import styled from "styled-components";
import { Context } from "../pages/_app";
import { Unit } from "../types/enums";
import { IMediaQuery } from "../types/media";
import Category from "./Category";
import CheckboxGroup from "./CheckboxGroup";
import Container from "./Container.style";
import RoomsDropDown from "./RoomsDropDown";
import { Slider } from "./Slider";

const FiltersContainer = styled.div<{ media: Partial<IMediaQuery> }>`
  height: 100%;
  position: absolute;
  left: 0;
  max-width: 15rem;
  right: ${({ media }) =>
    media["isSmallMobile"] || media["isMobile"] || media["isTablet"]
      ? "0"
      : "72%"};
  bottom: 0;
  border-right: ${(props) =>
    props.media["isSmallMobile"] ||
    props.media["isMobile"] ||
    props.media["isTablet"]
      ? "none"
      : `1px solid ${props.theme.light}`};
  overflow-y: auto;
`;
const Title = styled.span`
  color: ${(props) => props.theme.dark};
  margin-top: 1rem;
  font-weight: 700;
`;
const Categories = styled.div`
  width: 100%;
  flex-direction: row;
  margin-top: 1rem;
  display: inline-flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  justify-content: flex-start;
  align-items: center;
`;
const RoomsContainer = styled.div`
  margin-top: 1rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 85%;
`;
const Filters = () => {
  const categories = [
    ["house", true],
    ["apartment", true],
    ["office", false],
    ["landplot", false],
  ];
  const additionalData = ["pets friendly", "furnished", "parking"];
  const mediaMap: Partial<IMediaQuery> = useContext(Context);
  console.log(mediaMap);
  return (
    <FiltersContainer media={mediaMap}>
      <Container
        direction="column"
        justifyContent="flex-start"
        paddingVertical="2"
        alignItems="flex-start"
        width={mediaMap["isTablet"] ? "100%" : "90%"}
      >
        <Title>Category</Title>
        <Categories>
          {categories.map((c: any[], index) => (
            <Category key={c[0]} name={c[0]} isSelected={c[1]} index={index} />
          ))}
        </Categories>
        <Title>Price Range</Title>
        <Slider min={0} max={300} unit={Unit.USD} />
        <Title>Property Size</Title>
        <Slider min={0} max={5000} unit={Unit.SQFT} />
        <Title>Rooms</Title>
        <RoomsContainer>
          <RoomsDropDown type="bed" onSelected={() => null} />
          <RoomsDropDown type="bath" onSelected={() => null} />
        </RoomsContainer>
        <Title>Additional</Title>
        <CheckboxGroup data={additionalData} onSelected={() => null} />
      </Container>
    </FiltersContainer>
  );
};

export default Filters;
