import React from "react";
import { respondTo } from "src/utils/_respondTo";
import styled from "styled-components";

const Container = styled.div`
  padding: 1rem;
  border-radius: 1.5rem;
  border: ${(props) => `2px solid ${props.theme.gray}`};
  ${respondTo.laptopAndDesktop`
    padding: 1rem;
    `};
  color: ${(props) => props.theme.gray};
  font-size: 1.2rem;
  text-transform: capitalize;
  width: max-content;
  margin-left: 0.5rem;
`;
const Feature = ({ feature }: { feature: string }) => {
  return <Container>{feature}</Container>;
};

export default Feature;
