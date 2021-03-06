import React from "react";
import { respondTo } from "src/utils/_respondTo";
import styled from "styled-components";
const MenuContainer = styled.div`
  display: block;
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  height: 4rem;
  background: ${(props) => props.theme.dark};
  ${respondTo.laptopAndDesktop`
    display: none;
  `}
`;
const MobileMenu = () => {
  return <MenuContainer></MenuContainer>;
};

export default MobileMenu;
