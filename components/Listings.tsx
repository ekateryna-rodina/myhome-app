import React from "react";
import { Listing } from "src/utils/types";
import { respondTo } from "src/utils/_respondTo";
import styled from "styled-components";
import ListingItem from "./ListingItem";
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
interface ListingsProps {
  data: Listing[];
}
const Listings = (props: ListingsProps) => {
  const { data } = props;

  return (
    <>
      <ListingsContainer>
        {data.map((item: any, index: any) => (
          <ListingItem key={index} {...item} />
        ))}
      </ListingsContainer>
    </>
  );
};

export default Listings;
