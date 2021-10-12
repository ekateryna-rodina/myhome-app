import React from "react";
import styled from "styled-components";
const CaretIcon = styled.div`
  color: ${(props) => props.theme.gray};
  cursor: pointer;
  :after {
    font-family: "Font Awesome 5 Free";
    font-weight: 900;
    content: "\f0d7";
  }
`;
interface CaretProps {
  onClick: () => void;
}
const Caret = (props: CaretProps) => {
  return <CaretIcon onClick={props.onClick} />;
};

export default Caret;
