import dynamic from "next/dynamic";
import React from "react";
import styled from "styled-components";
import { respondTo } from "utils/_respondTo";
const ListingItem = dynamic(() => import("./ListingItem"), { ssr: false });

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
  z-index: 1000;
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
  // const { data, loading } = useQuery(PPOPERTIES);
  if (loading) return <span>Loading</span>;
  const properties = data.properties;
  console.log(properties);
  return (
    <>
      <ListingsContainer>
        {properties.map((item: any, index: any) => (
          <ListingItem key={index} {...item} />
        ))}
      </ListingsContainer>
    </>
  );
};

export default Listings;
