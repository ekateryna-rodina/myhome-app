import React from "react";
import styled from "styled-components";

const StyledContainer = styled.div`
  width: 94%;
  margin: auto;
  padding: 0.5rem;
`;
const Container: React.FC<{}> = ({ children }) => {
  return <StyledContainer>{children}</StyledContainer>;
};

export default Container;
