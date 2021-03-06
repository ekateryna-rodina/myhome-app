import { NormalizedCacheObject } from "@apollo/client";
import BriefListing from "components/BriefListing/BriefListing";
import { Features } from "components/Features";
import { ListingsCarousel } from "components/ListingsCarousel";
import { Logo } from "components/Logo";
import { ToggleFeatures } from "components/ToggleFeatures";
import type { NextPage } from "next";
import React, { useEffect, useState } from "react";
import { initializeApollo } from "src/lib/apollo";
import { PROPERTIES_BY_IDS } from "src/utils/constants";
import { Listing } from "src/utils/types";
import { respondTo } from "src/utils/_respondTo";
import styled from "styled-components";

const initTransform = "-180%";
const Container = styled.div`
  --init-transform: ${initTransform};
  width: 100vw;
  height: 100vh;
  padding: 1.3rem;
  box-sizing: border-box;
  ${respondTo.laptopAndDesktop`
  padding: 2rem;
  `};
`;
const Header = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  position: relative;
`;

const FeaturesVisibility = styled.div`
  display: none;
  ${respondTo.laptopAndDesktop`
    display: block;
  `};
`;
const ProperiesByIds: NextPage<{ initialApolloState: NormalizedCacheObject }> =
  (props) => {
    const data = props.initialApolloState;
    const properties = Object.keys(data)
      .filter((d) => d.startsWith("Property"))
      .map((key) => {
        const property = data[key];
        if (!property) return {};
        const locationKey = (property as any)["location"]["__ref"];
        const [city, country] = [
          (data[locationKey] as any)["city"],
          (data[locationKey] as any)["country"],
        ];
        return { ...property, location: { city, country } };
      });

    const [current, setCurrent] = useState<number>(0);
    const [currentProperty, setCurrentProperty] = useState<Listing>(
      properties[current] as Listing
    );
    const [features, setFeatures] = useState<string[]>([
      "baby bed",
      "pets friendly",
      "breakfast included",
      "with parking",
    ]);
    const [randomKey, setRandomKey] = useState<number>(0);
    useEffect(() => {
      if (current === null || current === undefined) return;
      setRandomKey(Math.random());
      setCurrentProperty(properties[current] as Listing);
    }, [current]);
    return (
      <Container>
        <Header>
          <Logo hide={false} size={45} />
          <FeaturesVisibility>
            <Features features={features} />
          </FeaturesVisibility>
          <ToggleFeatures features={features} />
        </Header>
        <ListingsCarousel
          current={current}
          setCurrent={setCurrent}
          total={properties.length}
        >
          <BriefListing data={currentProperty} key={randomKey} />
        </ListingsCarousel>
      </Container>
    );
  };

export default ProperiesByIds;

ProperiesByIds.getInitialProps = async function (ctx) {
  const client = initializeApollo();
  await client.query({
    query: PROPERTIES_BY_IDS,
    variables: {
      ids: ctx.query.ids,
    },
  });
  return {
    initialApolloState: client.cache.extract(),
  };
};
