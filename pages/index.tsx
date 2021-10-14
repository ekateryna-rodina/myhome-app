import { gql } from "@apollo/client";
import Listings from "components/Listings";
import { FilterContext } from "context/FilterProvider";
import type { NextPage } from "next";
import React, { useContext, useEffect } from "react";
import { initializeApollo } from "src/lib/apollo";
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

const PPOPERTIES = `
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
`;
const LOCATIONS = `
locations {
  id
  city
  country
  zip
}
`;

const COMPOSITE_QUERY = gql`
  query {
    ${LOCATIONS}
    ${PPOPERTIES}
  }
`;
const Home: NextPage<{ initialApolloState: any }> = (props) => {
  const key: string = process.env.NEXT_PUBLIC_GMAP_KEY || "";
  const data = props.initialApolloState;
  const locations = data.ROOT_QUERY.locations.map(
    (entry: any) => data[entry["__ref"]]
  );
  const properties = data.ROOT_QUERY.properties.map(
    (entry: any) => data[entry["__ref"]]
  );
  const { handleLocations } = useContext(FilterContext);
  useEffect(() => {
    handleLocations(locations);
    //eslint-disable-next-line
  }, []);

  return (
    <>
      <Header data-testid="headerTestId" />
      <Main>
        <Filters />
        <Listings data={properties} />
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
    query: COMPOSITE_QUERY,
  });
  return {
    props: {
      initialApolloState: client.cache.extract(),
    },
  };
}
