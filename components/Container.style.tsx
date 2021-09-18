import React from "react";
import styled from "styled-components";

const StyledContainer = styled.div<Partial<ContainerProps>>`
  padding: ${(props) => `${props.paddingVertical}rem 0`};
  width: ${({ width }) => width ?? "95%"};
  margin: 0 auto;
  ${({ direction, justifyContent, alignItems }) =>
    direction &&
    `
  display: flex;
  flex-direction: ${direction};
  justify-content: ${justifyContent};
  align-items: ${alignItems};
  `}
`;
interface ContainerProps {
  direction: string;
  justifyContent: string;
  paddingVertical: string;
  alignItems: string;
  width: string;
}
const Container: React.FC<Partial<ContainerProps>> = ({
  children,
  direction,
  justifyContent,
  paddingVertical,
  alignItems,
  width,
}) => {
  return (
    <StyledContainer
      direction={direction}
      justifyContent={justifyContent}
      paddingVertical={paddingVertical}
      alignItems={alignItems}
      width={width}
    >
      {children}
    </StyledContainer>
  );
};

export default Container;
