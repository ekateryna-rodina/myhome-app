import React from "react";
import styled from "styled-components";

const StyledIcon = styled.div<{ before: string }>`
  &:after {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-family: "Font Awesome 5 Free";
    content: "${(props) => props.before}";
    color: ${(props) => props.theme.gray};
    font-size: 1.3rem;
  }
`;
type IconProps = {
  content: string;
};
const Icon = (props: IconProps) => {
  return <StyledIcon before={props.content}></StyledIcon>;
};

export default Icon;
