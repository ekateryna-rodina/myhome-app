import styled from "styled-components";
import { respondTo } from "../../src/utils/_respondTo";
import AddPropertyButton from "../AddPropertyButton";
import Logo from "../Logo/Logo";
import MessagesIcon from "../MessagesIcon";
import NotificationsIcon from "../NotificationsIcon";
import { Search } from "../Search";
import User from "../User";
const StyledHeader = styled.header`
  position: absolute;
  z-index: 50;
  top: 0;
  width: 100%;
  background: white;
  ${(props) => `border-bottom: 1px solid ${props.theme.light}`};
`;
const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0 1rem;
  ${respondTo.laptopAndDesktop`
  padding: 0 2rem;
  `}
`;
const FlexGroup = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  ${respondTo.mobile`
  display: none;`}
`;

const Header = () => {
  return (
    <StyledHeader>
      <Container>
        <Logo />
        <Search />
        <AddPropertyButton />
        <FlexGroup data-testid="iconsAndUserTestId">
          <MessagesIcon />
          <NotificationsIcon />
          <User />
        </FlexGroup>
      </Container>
    </StyledHeader>
  );
};

export default Header;
