import React from "react";
import { respondTo } from "src/utils/_respondTo";
import styled from "styled-components";

const Container = styled.div`
  padding: 0.4rem;
  border-radius: 1.5rem;
  border: ${(props) => `1px solid ${props.theme.gray}`};
  color: ${(props) => props.theme.gray};
  font-size: 0.8rem;
  text-transform: capitalize;
  width: max-content;
  ${respondTo.laptopAndDesktop`
  padding: 0.8rem;
  font-size: 1rem;
  `}
`;
const Feature = ({ feature }: { feature: string }) => {
  return <Container>{feature}</Container>;
};

export default Feature;
