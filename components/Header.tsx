import React from "react";
import styled from "styled-components";
import Container from "./Container.style";
import DropDownSearch from "./DropDownSearch";
import Logo from "./Logo";
const StyledHeader = styled.header`
  ${(props) => `border-bottom: 1px solid ${props.theme.light}`};
`;

const Header = () => {
  return (
    <StyledHeader>
      <Container direction="row">
        <Logo />
        <DropDownSearch />
      </Container>
    </StyledHeader>
  );
};

export default Header;
