import React from "react";
import styled from "styled-components";

const Container = styled.div`
  padding: 0.8rem;
  border-radius: 1.5rem;
  border: ${(props) => `1px solid ${props.theme.gray}`};
  color: ${(props) => props.theme.gray};
  font-size: 1rem;
  text-transform: capitalize;
  width: max-content;
  margin-left: 0.5rem;
`;
const Feature = ({ feature }: { feature: string }) => {
  return <Container>{feature}</Container>;
};

export default Feature;
