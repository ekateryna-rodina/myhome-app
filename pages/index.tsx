import type { NextPage } from "next";
import dynamic from "next/dynamic";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
// const Listings = dynamic(() => import("../components/Listings"), {
// ssr: false,
// });
const Map = dynamic(() => import("../components/Map"), { ssr: false });
const Header = dynamic(() => import("../components/Header"), { ssr: false });
const Filters = dynamic(() => import("../components/Filters"), { ssr: false });
const Main = styled.main`
  position: relative;
  height: 100vh;
  overflow-x: hidden;
  overflow-y: auto;
  display: flex;
  flex-direction: row;
  background: red;
  margin-top: 4.2rem;
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
      <Main>
        <Filters />
        {/* <Listings /> */}
        {/* {key && <Map secret={key} />} */}
        {/* <MobileMenu /> */}
      </Main>
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
