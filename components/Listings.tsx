import React from "react";
import styled from "styled-components";
import { data } from "../stays";
import ListingItem from "./ListingItem";
const ListingsContainer = styled.div`
  flex: 2;
  padding: 2rem 1rem 1rem 0;
  overflow-y: auto;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: center;
  gap: 1rem;
`;
const Listings = () => {
  return (
    <ListingsContainer>
      {data.map((item, index) => (
        <ListingItem key={index} {...item} />
      ))}
    </ListingsContainer>
  );
};

export default Listings;
