import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { Context } from "../pages/_app";
import { Icons, Unit } from "../types/enums";
import { IMediaQuery } from "../types/media";
import Category from "./Category";
import CheckboxGroup from "./CheckboxGroup";
import Container from "./Container.style";
import RoomsDropDown from "./RoomsDropDown";
import { Slider } from "./Slider";

const FiltersContainer = styled.div<{
  media: Partial<IMediaQuery>;
  isOpen: boolean;
  isInitialialized: boolean;
}>`
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  right: ${({ media }) =>
    media["isSmallMobile"] || media["isMobile"] || media["isTablet"]
      ? "0"
      : "72%"};
  bottom: 0;
  z-index: 5000;
  background: #fff;
  transition: 0.5s ease-out;
  transform: ${({ isOpen, media }) =>
    isOpen
      ? `translateX(0);`
      : media["isTablet"] || media["isMobile"] || media["isSmallMobile"]
      ? `translateX(-60rem);`
      : `translateX(-20rem);`};
  border-right: ${(props) =>
    props.media["isSmallMobile"] ||
    props.media["isMobile"] ||
    props.media["isTablet"]
      ? "none"
      : `1px solid ${props.theme.light}`};
  overflow-y: auto;
  ${({ media }) =>
    media["isDesktop"] || media["isBigDesktop"]
      ? `
  max-width: 15rem;
  `
      : ""}
`;
const Title = styled.span<{
  media?: Partial<IMediaQuery>;
  pushRight?: boolean;
}>`
  color: ${(props) => props.theme.dark};
  margin-top: 1rem;
  margin-left: ${({ pushRight, media }) =>
    pushRight && media && media["isTablet"] ? "20%" : "0"};
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

const RoomsContainer = styled.div<{ media: Partial<IMediaQuery> }>`
  margin-top: 1rem;
  display: flex;
  flex-direction: row;
  justify-content: ${({ media }) =>
    media["isTablet"] ? "flex-start" : "space-between"}
  align-items: center;
  width: ${({ media }) =>
    media["isTablet"]
      ? "30%"
      : media["isMobile"] || media["isSmallMobile"]
      ? "60%"
      : "85%"}
`;
const FlexibleRangeContainer = styled.div<{ media: Partial<IMediaQuery> }>`
  width: 100%;
  display: flex;
  flex-direction: ${({ media }) => (media["isTablet"] ? "row" : "column")};
  margin-top: 1rem;
  justify-content: ${({ media }) =>
    media["isTablet"] ? "space-around" : "center"};
`;
const PriceRange = styled.div`
  flex: 1;
  flex-grow: 2;
`;
const PropertySize = styled.div<{ media: Partial<IMediaQuery> }>`
  flex: 1;
  flex-grow: 2;
  ${({ media }) => (!media["isTablet"] ? `margin-top: 1rem;` : "")}
`;

const Filters = () => {
  const [isInitialialized, setIsInitialized] = useState(false);
  useEffect(() => {
    setIsInitialized(true);
  }, []);
  const categories = [
    [Icons.House, true],
    [Icons.Apartment, true],
    [Icons.Office, false],
    [Icons.Landplot, false],
  ];

  const additionalData = ["pets friendly", "furnished", "parking"];
  const mediaMap: Partial<IMediaQuery> = useContext(Context).breakpoints;
  const { isOpen } = useContext(Context).filters as any;
  console.log(mediaMap);
  console.log(`filters state is ${isOpen}`);
  return (
    <FiltersContainer
      media={mediaMap}
      isOpen={isOpen}
      isInitialialized={isInitialialized}
    >
      <Container
        direction="column"
        justifyContent="flex-start"
        paddingVertical="1"
        alignItems="flex-start"
        width={mediaMap["isTablet"] ? "100%" : "90%"}
      >
        <Title>Category</Title>
        <Categories>
          {categories.map((c: any[], index) => (
            <Category key={c[0]} name={c[0]} isSelected={c[1]} index={index} />
          ))}
        </Categories>
        <FlexibleRangeContainer media={mediaMap}>
          <PriceRange>
            <Title>Price Range</Title>
            <Slider min={0} max={300} unit={Unit.USD} />
          </PriceRange>
          <PropertySize media={mediaMap}>
            <Title media={mediaMap} pushRight={true}>
              Property Size
            </Title>
            <Slider min={0} max={5000} unit={Unit.SQFT} pushRight={true} />
          </PropertySize>
        </FlexibleRangeContainer>
        <Title>Rooms</Title>
        <RoomsContainer media={mediaMap}>
          <RoomsDropDown type="bed" onSelected={() => null} />
          <RoomsDropDown type="bath" onSelected={() => null} pushRight={true} />
        </RoomsContainer>
        <Title>Additional</Title>
        <CheckboxGroup data={additionalData} onSelected={() => null} />
      </Container>
    </FiltersContainer>
  );
};

export default Filters;
