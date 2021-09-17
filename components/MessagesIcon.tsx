import React from "react";
import styled from "styled-components";
import Icon from "./Icon.style";

const MessagesIconContainer = styled.div`
  position: relative;
  width: 2.5rem;
  height: 2.5rem;
`;

const MessagesIcon = () => {
  return (
    <MessagesIconContainer>
      <Icon content="\f0e0" />
    </MessagesIconContainer>
  );
};

export default MessagesIcon;
