import dynamic from "next/dynamic";
import React, { useContext, useRef } from "react";
import { respondTo } from "src/utils/_respondTo";
import styled from "styled-components";
import { AppContext } from "../AppContextWrapper/AppContextWrapper";
const ListingItem = dynamic(() => import("../ListingItem/ListingItem"), {
  loading: () => <p>...</p>,
});

const ListingsContainer = styled.div`
  margin-top: 40vh;
  padding: 2rem 1rem 1rem 1rem;
  overflow-y: auto;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: flex-start;
  gap: 1rem;
  z-index: 5;
  position: relative;
  background: #fff;
  border-top-left-radius: 2rem;
  border-top-right-radius: 2rem;
  ${respondTo.laptopAndDesktop`
  margin-top: 0;
  width: 55vw;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(16rem, 1fr));
  `}
`;

const Listings = () => {
  const { properties, loading } = useContext(AppContext);
  const itemRef = useRef(null);
  return (
    <>
      <ListingsContainer>
        {properties && !loading ? (
          properties.map((item: any, index: any) => (
            <ListingItem key={index} {...item} />
          ))
        ) : (
          <div>Loading</div>
        )}
      </ListingsContainer>
    </>
  );
};

export default Listings;
