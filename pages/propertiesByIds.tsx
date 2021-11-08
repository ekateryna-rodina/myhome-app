import type { NextPage } from "next";
import React from "react";
import { initializeApollo } from "src/lib/apollo";
import { PROPERTIES_BY_IDS } from "src/utils/constants";

const ProperiesByIds: NextPage<{}> = ({}) => {
  return <div>Next stars: {""}</div>;
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
    props: {
      initialApolloState: client.cache.extract(),
    },
  };
};
