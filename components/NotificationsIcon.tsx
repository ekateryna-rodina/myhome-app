import React from "react";
import styled, { useTheme } from "styled-components";
import { Icons } from "../src/utils/enums";
import Icon from "./Icon.style";
import IconContainer from "./IconContainer.style";

const IconWithSpacing = styled.div`
  margin-right: 1.5rem;
`;
const NotificationsIcon = () => {
  let theme = useTheme();
  return (
    <IconWithSpacing data-testid="notificationsTestId">
      <IconContainer radius={"50%"} background={"light"}>
        <Icon iconType={Icons.Notification} color={(theme as any)?.gray} />
      </IconContainer>
    </IconWithSpacing>
  );
};

export default NotificationsIcon;
