import styled from "styled-components";
import AddPropertyButton from "../components/AddPropertyButton";
import Logo from "../components/Logo";
import MessagesIcon from "../components/MessagesIcon";
import NotificationsIcon from "../components/NotificationsIcon";
import Search from "../components/Search";
import User from "../components/User";
import { respondTo } from "../utils/_respondTo";
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
