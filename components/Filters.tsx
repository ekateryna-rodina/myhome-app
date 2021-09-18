import React, { useContext } from "react";
import styled from "styled-components";
import { Context } from "../pages/_app";
import { IMediaQuery } from "../types/media";
import Category from "./Category";
import Container from "./Container.style";

const FiltersContainer = styled.div<{ media: Partial<IMediaQuery> }>`
  height: 100%;
  position: absolute;
  left: 0;
  max-width: inherit;
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
  ${(props) =>
    (props.media["isLaptop"] ||
      props.media["isDesktop"] ||
      props.media["isBigDesktop"]) &&
    `
  max-width: 15rem;
  `}
`;
const Title = styled.span`
  color: ${(props) => props.theme.dark};
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
      </Container>
    </FiltersContainer>
  );
};

export default Filters;
