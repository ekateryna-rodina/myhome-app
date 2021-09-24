import React, { useContext } from "react";
import styled from "styled-components";
import { Context } from "../pages/_app";
import { IMediaQuery } from "../types/media";
import AddPropertyButton from "./AddPropertyButton";
import Container from "./Container.style";
import Logo from "./Logo";
import MessagesIcon from "./MessagesIcon";
import NotificationsIcon from "./NotificationsIcon";
import Search from "./Search";
import User from "./User";
const StyledHeader = styled.header`
  position: absolute;
  z-index: 50;
  top: 0;
  width: 100%;
  background: white;
  ${(props) => `border-bottom: 1px solid ${props.theme.light}`};
`;
const FlexGroup = styled.div<{ media: Partial<IMediaQuery> }>`
  display: ${(props) =>
    `${
      props.media["isMobile"] ||
      props.media["isSmallMobile"] ||
      props.media["isTablet"]
        ? "none"
        : "flex"
    }`};
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const Header = () => {
  const mediaMap: Partial<IMediaQuery> = useContext(Context);
  return (
    <StyledHeader>
      <Container
        direction={mediaMap["isMobile"] ? "column" : "row"}
        justifyContent="space-between"
        paddingVertical="1"
        alignItems="center"
      >
        <Logo />
        <Search />
        <AddPropertyButton />
        <FlexGroup media={mediaMap}>
          <MessagesIcon />
          <NotificationsIcon />
          <User />
        </FlexGroup>
      </Container>
    </StyledHeader>
  );
};

export default Header;
