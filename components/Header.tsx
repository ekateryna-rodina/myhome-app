import React from "react";
import styled from "styled-components";
import AddPropertyButton from "./AddPropertyButton";
import Container from "./Container.style";
import DropDownSearch from "./DropDownSearch";
import Logo from "./Logo";
import MessagesIcon from "./MessagesIcon";
import NotificationsIcon from "./NotificationsIcon";
import User from "./User";
const StyledHeader = styled.header`
  ${(props) => `border-bottom: 1px solid ${props.theme.light}`};
`;

const Header = () => {
  return (
    <StyledHeader>
      <Container direction="row">
        <Logo />
        <DropDownSearch />
        <AddPropertyButton />
        <MessagesIcon />
        <NotificationsIcon />
        <User />
      </Container>
    </StyledHeader>
  );
};

export default Header;
