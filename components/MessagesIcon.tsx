import React from "react";
import { useTheme } from "styled-components";
import { Icons } from "../utils/enums";
import Icon from "./Icon.style";
import IconContainer from "./IconContainer.style";

const MessagesIcon = () => {
  const theme = useTheme();
  return (
    <IconContainer>
      <Icon iconType={Icons.Message} color={(theme as any).gray} />
    </IconContainer>
  );
};

export default MessagesIcon;
