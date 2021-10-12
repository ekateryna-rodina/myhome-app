import React from "react";
import styled from "styled-components";
const padding: { [key: string]: string } = {
  large: "1rem 1.25rem",
};
const StyledButton = styled.button<{
  size: "large" | "medium" | "small";
  background: string;
}>`
  padding: ${(props) => padding[props.size]};
  background: ${(props) => props.theme[props.background]};
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  border: none;
  border-radius: 0.2rem;
  color: #fff;
  transition: all 0.5s;
  font-size: 1rem;
  :hover,
  :focus {
    background: ${(props) => props.theme.lightenSecondary};
    border: none;
    outline: 0;
  }
`;
type ButtonProps = {
  size: "large" | "medium" | "small";
  background: string;
};
const Button: React.FC<ButtonProps> = ({ children, size, background }) => {
  return (
    <StyledButton size={size} background={background}>
      {children}
    </StyledButton>
  );
};

export default Button;
