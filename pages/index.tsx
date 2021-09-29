import type { NextPage } from "next";
import dynamic from "next/dynamic";
import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import Container from "../components/Container.style";
import Listings from "../components/Listings";
import Map from "../components/Map";
import MobileMenu from "../components/MobileMenu";
import { IMediaQuery } from "../types/media";
import { Context } from "./_app";
const Header = dynamic(import("../components/Header"));
const Filters = dynamic(import("../components/Filters"));
const Main = styled.main<{ media: Partial<IMediaQuery> }>`
  position: relative;
  height: 100vh;
  overflow-x: hidden;
  overflow-y: auto;
  margin-top: 5rem;
  ${({ media }) => (media["isTablet"] ? `margin-top: 6rem;` : "")}
  ${({ media }) =>
    media["isLaptop"] || media["isDesktop"] || media["isBigDesktop"]
      ? `display: flex;
  flex-direction: row;
  margin-top: 6rem;`
      : ""}
`;
const MapContainer = styled.div<{ media: Partial<IMediaQuery> }>`
  position: fixed;
  top: 80px;
  left: 0;
  right: 0;

  ${({ media }) =>
    media["isLaptop"] || media["isDesktop"] || media["isBigDesktop"]
      ? "position: inherit"
      : ""}
`;
const Home: NextPage = () => {
  const key: string = process.env.NEXT_PUBLIC_GMAP_KEY || "";
  const [winReady, setwinReady] = useState(false);
  const mediaMap = useContext(Context).breakpoints;
  useEffect(() => {
    setwinReady(true);
  }, []);
  return (
    <>
      {winReady && <Header />}
      <Container>
        <Main media={mediaMap}>
          {winReady && <Filters />}
          <Listings />
          {key && (
            <MapContainer media={mediaMap}>
              <Map secret={key} />
            </MapContainer>
          )}
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
