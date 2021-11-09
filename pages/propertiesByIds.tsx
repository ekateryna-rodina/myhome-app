import { NormalizedCacheObject } from "@apollo/client";
import BriefListing from "components/BriefListing/BriefListing";
import { ListingsCarousel } from "components/ListingsCarousel";
import type { NextPage } from "next";
import React, { useEffect, useState } from "react";
import { initializeApollo } from "src/lib/apollo";
import { PROPERTIES_BY_IDS } from "src/utils/constants";
import { Listing } from "src/utils/types";
import styled from "styled-components";

const initTransform = "-150%";
const Container = styled.div`
  --init-transform: ${initTransform};
  width: 100vw;
  height: 100vh;
  padding: 3rem;
  box-sizing: border-box;
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
    useEffect(() => {
      if (current === null || current === undefined) return;
      setCurrentProperty(properties[current] as Listing);
    }, [current]);
    return (
      <Container>
        <ListingsCarousel
          current={current}
          setCurrent={setCurrent}
          total={properties.length}
        >
          <BriefListing data={currentProperty} />
        </ListingsCarousel>
      </Container>
    );
  };

export default ProperiesByIds;

ProperiesByIds.getInitialProps = async function (ctx) {
  console.log(ctx.query.ids);
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
