import React from "react";
import styled from "styled-components";
const IconContainerStyled = styled.div<IconContainerProps>`
  position: relative;
  width: 2.5rem;
  height: 2.5rem;
  border-radius: ${(props) => props.radius};
  background: ${(props) =>
    props.background ? props.theme[props.background] : "transparent"};
  display: flex;
  justify-content: center;
  align-items: center;
`;
type IconContainerProps = {
  radius?: string;
  background?: string;
};
const IconContainer: React.FC<IconContainerProps> = ({
  children,
  radius,
  background,
}) => {
  return (
    <IconContainerStyled radius={radius} background={background}>
      {children}
    </IconContainerStyled>
  );
};

export default IconContainer;
