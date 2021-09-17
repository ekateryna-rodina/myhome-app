import React from "react";
import styled from "styled-components";

const StyledContainer = styled.div<{ direction: string }>`
  width: 94%;
  margin: auto;
  padding: 0.5rem;
  display: flex;
  flex-direction: ${(props) => props.direction};
  align-items: center;
`;
interface ContainerProps {
  direction: string;
}
const Container: React.FC<ContainerProps> = ({ children, direction }) => {
  return <StyledContainer direction={direction}>{children}</StyledContainer>;
};

export default Container;
