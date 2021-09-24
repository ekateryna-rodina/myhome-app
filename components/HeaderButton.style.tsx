import React from "react";
import styled from "styled-components";
import { Icons } from "../types/enums";
import Icon from "./Icon.style";

const Button = styled.button<{ icon: Icons }>`
  width: 2.2rem;
  height: 2.2rem;
  border-radius: 0.5rem;
  outline: 0;
  border: none;
  background: ${(props) =>
    props.icon === Icons.Glass ? props.theme.secondary : props.theme.primary};
  color: white;
  font-size: 1.1rem;
  cursor: pointer;
  box-shadow: 0 3px 15px rgba(0, 0, 0, 0.1);
  transition: all 0.5s;
  display: flex;
  justify-content: center;
  align-items: center;
`;

type HeaderButtonProps = {
  icon: Icons;
};

const HeaderButton = (props: HeaderButtonProps) => {
  return (
    <Button icon={props.icon}>
      <Icon iconType={props.icon} color={"#fff"} />
    </Button>
  );
};

export default HeaderButton;
