import React, { useContext } from "react";
import { respondTo } from "src/utils/_respondTo";
import styled from "styled-components";
import { AppContext } from "../AppContextWrapper/AppContextWrapper";
import { ListingItem } from "../ListingItem";
// const ListingItem = dynamic(() => import("./ListingItem"), { ssr: false });

const ListingsContainer = styled.div`
  margin-top: 40vh;
  padding: 2rem 1rem 1rem 1rem;
  overflow-y: auto;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: center;
  gap: 1rem;
  z-index: 5;
  position: relative;
  background: #fff;
  border-top-left-radius: 2rem;
  border-top-right-radius: 2rem;
  ${respondTo.laptopAndDesktop`
  margin-top: 0;
  flex: 2;
  border-top-left-radius: 0;
  border-top-right-radius: 0;`}
`;

const Listings = () => {
  const { properties, loading } = useContext(AppContext);
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
