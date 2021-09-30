import type { NextPage } from "next";
import dynamic from "next/dynamic";
import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import Container from "../components/Container.style";
import MobileMenu from "../components/MobileMenu";
import { IMediaQuery } from "../types/media";
import { Context } from "./_app";
const Listings = dynamic(() => import("../components/Listings"), {
  ssr: false,
});
const Map = dynamic(() => import("../components/Map"), { ssr: false });
const Header = dynamic(() => import("../components/Header"), { ssr: false });
const Filters = dynamic(() => import("../components/Filters"), { ssr: false });
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
  margin-top: 6.1875rem`
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
          <Filters />
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
