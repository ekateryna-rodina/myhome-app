import Img from "next/image";
import { lighten } from "polished";
import React, { useContext } from "react";
import styled from "styled-components";
import { Context } from "../pages/_app";
import { IMediaQuery } from "../types/media";

const LogoHeader = styled.div<{ media: Partial<IMediaQuery> }>`
  display: ${(props) =>
    `${
      props.media["isMobile"] || props.media["isSmallMobile"] ? "none" : "block"
    }`};
  font-size: 1rem;
  text-transform: uppercase;
  font-weight: 700;
  position: relative;
  color: ${(props) => props.theme.dark};
  min-width: 6rem;
`;
const Link = styled.a<{ hide: boolean }>`
  display: ${({ hide }) => (hide ? "none" : "block")};
  color: inherit;
  transition: all 0.5s;
  position: absolute;
  left: 1.5625rem;
  top: 1.75rem;
  :hover,
  :focus {
    text-decoration: none;
    color: ${(props) => lighten(0.2, props.theme.dark)};
  }
`;
const Logo = () => {
  const mediaMap: Partial<IMediaQuery> = useContext(Context);
  return (
    <LogoHeader media={mediaMap}>
      <Img
        src="https://res.cloudinary.com/kariecloud/image/upload/v1631839251/2021-09-16_20.27.45-removebg_op1mio.png"
        width="60"
        height="60"
      ></Img>
      <Link href="#" hide={mediaMap["isTablet"] || false}>
        MYHOME
      </Link>
    </LogoHeader>
  );
};

export default Logo;
