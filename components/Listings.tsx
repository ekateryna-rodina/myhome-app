import { gql, useQuery } from "@apollo/client";
import dynamic from "next/dynamic";
import React, { useContext } from "react";
import styled from "styled-components";
import { Context } from "../pages/_app";
import { IMediaQuery } from "../types/media";
const ListingItem = dynamic(() => import("./ListingItem"), { ssr: false });

const PPOPERTIES = gql`
  query Properties {
    properties {
      id
      city
      country
      title
      beds
      baths
      size
      photo
    }
  }
`;
const ListingsContainer = styled.div<{ media: Partial<IMediaQuery> }>`
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
  ${(props) =>
    props.media["isLaptop"] ||
    props.media["isDesktop"] ||
    props.media["isBigDesktop"]
      ? `
      margin-top: 0;
      flex: 2;
      border-top-left-radius: 0;
      border-top-right-radius: 0;`
      : ""}
`;
const Listings = () => {
  const mediaMap = useContext(Context).breakpoints;
  const { data, loading } = useQuery(PPOPERTIES);
  if (loading) return <span>Loading</span>;
  const properties = data.properties;
  console.log(properties);
  return (
    <>
      <ListingsContainer media={mediaMap}>
        {properties.map((item: any, index: any) => (
          <ListingItem key={index} {...item} />
        ))}
      </ListingsContainer>
    </>
  );
};

export default Listings;
