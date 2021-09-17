import Img from "next/image";
import { lighten } from "polished";
import React from "react";
import styled from "styled-components";
const LogoHeader = styled.h1`
  font-size: 1rem;
  text-transform: uppercase;
  font-weight: 700;
  position: relative;
  color: ${(props) => props.theme.primary};
`;
const Link = styled.a`
  color: inherit;
  transition: all 0.5s;
  position: absolute;
  left: 1.5625rem;
  top: 1.75rem;
  :hover,
  :focus {
    text-decoration: none;
    color: ${(props) => lighten(0.2, props.theme.primary)};
  }
`;
const Logo = () => {
  return (
    <LogoHeader>
      <Img
        src="https://res.cloudinary.com/kariecloud/image/upload/v1631839251/2021-09-16_20.27.45-removebg_op1mio.png"
        width="60"
        height="60"
      ></Img>
      <Link href="#">MYHOME</Link>
    </LogoHeader>
  );
};

export default Logo;
