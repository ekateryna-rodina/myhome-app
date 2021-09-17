import React from "react";
import styled from "styled-components";
import Icon from "./Icon.style";
import IconContainer from "./IconContainer.style";

const IconWithSpacing = styled.div`
  margin-right: 1.5rem;
`;
const NotificationsIcon = () => {
  return (
    <IconWithSpacing>
      <IconContainer radius={"50%"} background={"light"}>
        <Icon content="\f0f3" />
      </IconContainer>
    </IconWithSpacing>
  );
};

export default NotificationsIcon;
