import { Filters } from "components/Filters";
import { Listings } from "components/Listings";
import { Map } from "components/Map";
import { gql } from "graphql-tag";
import type { NextPage } from "next";
import React, { useContext, useEffect } from "react";
import { initializeApollo } from "src/lib/apollo";
import { initialFilter } from "src/utils/constants";
import { preprocessFilter } from "src/utils/helpers";
import { Location } from "src/utils/types";
import { respondTo } from "src/utils/_respondTo";
import styled from "styled-components";
import { AppContext } from "../components/AppContextWrapper/AppContextWrapper";
import Header from "../components/Header/Header";
const Main = styled.main`
  position: relative;
  height: 100vh;
  width: 100vw;
  overflow-x: hidden;
  overflow-y: auto;
  display: flex;
  flex-direction: row;
  margin-top: 4.2rem;

  ${respondTo.laptopAndDesktop`
  padding: 0 1rem;
  `}
`;
let filter = preprocessFilter(initialFilter);

const PROPERTIES = `
    properties(locationId: 0, filter: ${filter}) {
      id
      title
      beds
      baths
      size
      photo
      lat
      long
      locationId
      location {
        id
        city
        country
      }
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
    ${PROPERTIES}
    ${LOCATIONS}
  }
`;

const Home: NextPage<{ initialApolloState: any }> = (props) => {
  const data = props.initialApolloState;
  const properties = Object.keys(data)
    .filter((d) => d.startsWith("Property"))
    .map((key) => data[key]);
  const locations: Location[] = Object.keys(data)
    .filter((d) => d.startsWith("Location"))
    .map((key) => data[key]);

  const { handleLocations, handleProperties } = useContext(AppContext);
  useEffect(() => {
    handleLocations(
      locations.map((location: Location) => {
        return { ...location, __typename: "" };
      })
    );

    handleProperties(properties);
    //eslint-disable-next-line
  }, []);

  return (
    <>
      <Header data-testid="headerTestId" />
      <Main>
        <Filters />
        <Listings />
        <Map />
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
