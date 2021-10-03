import { css } from "styled-components";
import { mediaQueries, QueryType } from "./_mediaQueries";

export const respondTo: Partial<Record<QueryType, any>> = Object.keys(
  mediaQueries
).reduce((accumulator: { [key: string]: any }, label) => {
  accumulator[label] = (...args: any) => css`
    @media ${mediaQueries[label as QueryType]} {
      ${css(...args)};
    }
  `;
  return accumulator;
}, {});
