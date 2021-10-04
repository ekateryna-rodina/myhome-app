import Img from "next/image";
import { lighten } from "polished";
import React from "react";
import styled from "styled-components";
import { respondTo } from "utils/_respondTo";

const LogoHeader = styled.div`
  display: none;
  font-size: 1rem;
  text-transform: uppercase;
  font-weight: 700;
  position: relative;
  color: ${(props) => props.theme.dark};
  min-width: 6rem;
  ${respondTo.mobileL`
  display: block;
`}
  ${respondTo.laptopAndDesktop`
    display: block;
  `}
  ${respondTo.tablet`
    display: block;
  `}
`;
const Link = styled.a`
  display: none;
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

  ${respondTo.laptopAndDesktop`
    display: block;
  `}
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
