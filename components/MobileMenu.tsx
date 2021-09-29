import React, { useContext } from "react";
import styled from "styled-components";
import { Context } from "../pages/_app";
import { IMediaQuery } from "../types/media";
const MenuContainer = styled.div<{ media: Partial<IMediaQuery> }>`
  display: ${(props) =>
    props.media["isMobile"] || props.media["isSmallMobile"] ? "flex" : "none"};
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  height: 4rem;
  background: ${(props) => props.theme.dark};
`;
const MobileMenu = () => {
  const mediaMap = useContext(Context).breakpoints;
  return <MenuContainer media={mediaMap}></MenuContainer>;
};

export default MobileMenu;
