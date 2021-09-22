import React from "react";
import styled from "styled-components";

const StyledCheckbox = styled.input`
  cursor: pointer;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  outline: 0;
  background: transparent;
  height: 1rem;
  width: 1rem;
  border: 0.5px solid white;
  border-radius: 3px;
  border: 0.5px solid rgba(0, 0, 0, 0.3);
  margin-left: 0;

  :hover {
    filter: brightness(110%);
  }

  :checked {
    background: ${(props) => props.theme.secondary};
    border: none;
  }

  :disabled {
    background: #fff;
    opacity: 0.6;
    pointer-events: none;
  }

  :after {
    content: "";
    position: relative;
    left: 40%;
    top: 20%;
    width: 15%;
    height: 40%;
    transform: rotate(45deg);
    display: none;
    border: solid white;
    border-width: 0 1px 1px 0;
  }

  :checked:after {
    display: block;
  }

  :disabled:after {
    border-color: #7b7b7b;
  }
`;
const Checkbox = () => {
  return <StyledCheckbox type="checkbox"></StyledCheckbox>;
};

export default Checkbox;
