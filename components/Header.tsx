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
const FlexGroup = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;
const Header = () => {
  return (
    <StyledHeader>
      <Container direction="row" justifyContent="space-between">
        <Logo />
        <DropDownSearch />
        <AddPropertyButton />
        <FlexGroup>
          <MessagesIcon />
          <NotificationsIcon />
          <User />
        </FlexGroup>
      </Container>
    </StyledHeader>
  );
};

export default Header;
