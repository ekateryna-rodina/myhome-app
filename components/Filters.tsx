import React, { useContext } from "react";
import styled from "styled-components";
import { Context } from "../pages/_app";
import { IMediaQuery } from "../types/media";
import Category from "./Category";
import Container from "./Container.style";
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
const Filters = () => {
  const categories = [
    ["house", true],
    ["apartment", true],
    ["office", false],
    ["landplot", false],
  ];
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
        <Slider />
      </Container>
    </FiltersContainer>
  );
};

export default Filters;
