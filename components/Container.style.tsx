import React, { useContext } from "react";
import styled from "styled-components";
import { Context } from "../pages/_app";
import { IMediaQuery } from "../types/media";

const StyledContainer = styled.div<{
  media: IMediaQuery;
  paddingVertical: string | undefined;
  direction: string | undefined;
  justifyContent: string | undefined;
  alignItems: string | undefined;
}>`
  padding: ${(props) => `${props.paddingVertical}rem 1rem`};
  ${({ direction, justifyContent, alignItems }) =>
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
  const mediaMap: IMediaQuery = useContext(Context).breakpoints;
  return (
    <StyledContainer
      direction={direction}
      justifyContent={justifyContent}
      paddingVertical={paddingVertical}
      alignItems={alignItems}
      media={mediaMap}
    >
      {children}
    </StyledContainer>
  );
};

export default Container;
