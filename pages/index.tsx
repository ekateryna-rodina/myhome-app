import type { NextPage } from "next";
import dynamic from "next/dynamic";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Container from "../components/Container.style";
import Filters from "../components/Filters";
import Map from "../components/Map";
import MobileMenu from "../components/MobileMenu";
const Header = dynamic(import("../components/Header"));
const Main = styled.main`
  position: relative;
  height: 100vh;

  overflow-x: hidden;
  overflow-y: auto;
  margin-top: 5rem;
`;
const Home: NextPage = () => {
  const [winReady, setwinReady] = useState(false);
  useEffect(() => {
    setwinReady(true);
  }, []);
  return (
    <>
      {winReady && <Header />}
      <Container>
        <Main>
          <Filters />
          <Map />
          <MobileMenu />
        </Main>
      </Container>
    </>
  );
};

export default Home;
