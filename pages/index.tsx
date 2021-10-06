import { gql } from "@apollo/client";
import type { NextPage } from "next";
import React from "react";
import { initializeApollo } from "src/lib/apollo";
import styled from "styled-components";
import Filters from "../components/Filters";
import Header from "../components/Header";
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
  }
`;
const quer = gql`
  query MyQuery {
    name
  }
`;
const Home: NextPage = (props) => {
  const key: string = process.env.NEXT_PUBLIC_GMAP_KEY || "";
  console.log(props);
  return (
    <>
      <Header />
      <Main>
        <Filters />
        {/* <Listings /> */}
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
