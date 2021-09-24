import type { NextPage } from "next";
import dynamic from "next/dynamic";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Container from "../components/Container.style";
import Listings from "../components/Listings";
import Map from "../components/Map";
import MobileMenu from "../components/MobileMenu";
const Header = dynamic(import("../components/Header"));
const Filters = dynamic(import("../components/Filters"));
const Main = styled.main`
  position: relative;
  height: 100vh;
  overflow-x: hidden;
  overflow-y: auto;
  margin-top: 6.25rem;

  display: flex;
  flex-direction: row;
`;

const Home: NextPage = () => {
  const key: string = process.env.NEXT_PUBLIC_GMAP_KEY || "";
  const [winReady, setwinReady] = useState(false);
  useEffect(() => {
    setwinReady(true);
  }, []);
  return (
    <>
      {winReady && <Header />}
      <Container>
        <Main>
          {winReady && <Filters />}
          <Listings />
          {key && <Map secret={key} />}
          <MobileMenu />
        </Main>
      </Container>
    </>
  );
};

Home.getInitialProps = async (ctx) => {
  let key = process.env.NEXT_PUBLIC_GMAP_KEY;
  return {
    props: {
      key,
    },
  };
};

export default Home;
