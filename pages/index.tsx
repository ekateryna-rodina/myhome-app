import { gql } from "@apollo/client";
import Listings from "components/Listings";
import type { NextPage } from "next";
import React from "react";
import { initializeApollo } from "src/lib/apollo";
import { Listing } from "src/utils/types";
import styled from "styled-components";
import Filters from "../components/Filters";
import Header from "../components/Header/Header";
// import Map from "../components/Map";
const Main = styled.main`
  position: relative;
  height: 100vh;
  overflow-x: hidden;
  overflow-y: auto;
  display: flex;
  flex-direction: row;
  margin-top: 4.2rem;
  padding: 0 1rem;
`;
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
    locations {
      city
      country
    }
  }
`;

const Home: NextPage<{ initialApolloState: any }> = (props) => {
  const key: string = process.env.NEXT_PUBLIC_GMAP_KEY || "";
  const data = Object.values(props.initialApolloState || {}) as Listing[];
  console.log(data);
  return (
    <>
      <Header data-testid="headerTestId" />
      <Main>
        <Filters />
        <Listings data={data} />
        {/* {key && <Map secret={key} />} */}
        {/* <MobileMenu /> */}
      </Main>
    </>
  );
};

export default Home;

export async function getServerSideProps(ctx: any) {
  const client = initializeApollo();
  await client.query({
    query: PPOPERTIES,
  });
  return {
    props: {
      initialApolloState: client.cache.extract(),
    },
  };
}
