import React from "react";
import styled from "styled-components";
import Icon from "./Icon.style";

const NotificationsIconContainer = styled.div`
  position: relative;
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 50%;
  background: ${(props) => props.theme.light};
`;
const NotificationsIcon = () => {
  return (
    <NotificationsIconContainer>
      <Icon content="\f0f3" />
    </NotificationsIconContainer>
  );
};

export default NotificationsIcon;
