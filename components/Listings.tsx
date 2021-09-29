import React, { useContext } from "react";
import styled from "styled-components";
import { Context } from "../pages/_app";
import { data } from "../stays";
import { IMediaQuery } from "../types/media";
import ListingItem from "./ListingItem";
const ListingsContainer = styled.div<{ media: Partial<IMediaQuery> }>`
  margin-top: 21rem;
  padding: 2rem 1rem 1rem 1rem;
  overflow-y: auto;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: center;
  gap: 1rem;
  z-index: 1000;
  position: relative;
  background: #fff;
  border-top-left-radius: 2rem;
  border-top-right-radius: 2rem;
  ${(props) =>
    props.media["isLaptop"] ||
    props.media["isDesktop"] ||
    props.media["isBigDesktop"]
      ? `flex: 2;
      border-top-left-radius: 0;
      border-top-right-radius: 0;`
      : ""}
`;
const Listings = () => {
  const mediaMap = useContext(Context).breakpoints;
  return (
    <ListingsContainer media={mediaMap}>
      {data.map((item, index) => (
        <ListingItem key={index} {...item} />
      ))}
    </ListingsContainer>
  );
};

export default Listings;
