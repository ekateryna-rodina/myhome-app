import React from "react";
import styled from "styled-components";

const StyledContainer = styled.div<{
  direction: string;
  justifyContent: string;
}>`
  width: 94%;
  margin: auto;
  padding: 0.5rem;
  display: flex;
  flex-direction: ${(props) => props.direction};
  justify-content: space-between;
  align-items: center;
`;
interface ContainerProps {
  direction: string;
  justifyContent: string;
}
const Container: React.FC<ContainerProps> = ({
  children,
  direction,
  justifyContent,
}) => {
  return (
    <StyledContainer direction={direction} justifyContent={justifyContent}>
      {children}
    </StyledContainer>
  );
};

export default Container;
