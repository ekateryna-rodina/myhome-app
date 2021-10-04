import { gql, useQuery } from "@apollo/client";
import type { NextPage } from "next";
import React from "react";
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
  background: red;
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

const Home: NextPage = (props) => {
  console.log(props);
  const key: string = process.env.NEXT_PUBLIC_GMAP_KEY || "";
  const { data, loading } = useQuery(PPOPERTIES);
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

// Home.getInitialProps = async (ctx) => {
//   const apolloClient = initializeApollo();
//   await apolloClient.query({
//     query: PPOPERTIES,
//   });
//   return {
//     props: {
//       initialeApolloState: apolloClient.cache.exract(),
//     },
//   };
// };

export default Home;
