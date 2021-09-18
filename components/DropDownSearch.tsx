import { lighten } from "polished";
import React, { useContext } from "react";
import styled from "styled-components";
import { Context } from "../pages/_app";
import { IMediaQuery } from "../types/media";

// shared
const DropDownSearchContainer = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  max-width: 21rem;
  height: 2.93rem;
  border-radius: 0.5rem;
  cursor: pointer;
  padding: 0.7rem;
  box-sizing: border-box;
  border: ${(props) => `1px solid ${props.theme.light}`};
`;

// dropdown
const DropDownContainer = styled.div<{ media: Partial<IMediaQuery> }>`
  flex: 1;
  display: none;
  ${({ media, theme }) =>
    !media["isMobile"] &&
    !media["isSmallMobile"] &&
    `
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding-right: 1rem;
    border-right: ${`2px solid ${theme.light}`};
  `};
`;
const Selected = styled.span`
  font-size: 0.9rem;
  font-weight: bold;
  color: ${(props) => props.theme.dark};
`;
const CaretIcon = styled.div`
  color: ${(props) => props.theme.gray};
  :after {
    font-family: "Font Awesome 5 Free";
    font-weight: 900;
    content: "\f0d7";
  }
`;
// search
const SeachContainer = styled.div<{ media: Partial<IMediaQuery> }>`
  flex: 4;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-right: 0.3rem;
  margin-left: ${({ media }) =>
    media["isMobile"] || media["isSmallMobile"] ? "0" : "1rem"};
`;
const Search = styled.input`
  height: 90%;
  width: 100%;
  font-size: 0.9rem;
  border: 0;
  outline: 0;
  color: ${(props) => props.theme.gray};
`;
const Button = styled.button`
  position: absolute;
  top: 50%;
  right: 0.35rem;
  transform: translateY(-50%);
  width: 2.2rem;
  height: 2.2rem;
  border-radius: 0.5rem;
  outline: 0;
  border: none;
  background: ${(props) => props.theme.secondary};
  color: white;
  font-size: 1.1rem;
  cursor: pointer;
  box-shadow: 0 3px 15px rgba(0, 0, 0, 0.1);
  transition: all 0.5s;
  :after {
    font-family: "Font Awesome 5 Free";
    font-weight: 600;
    content: "\f002";
  }
  :hover,
  :focus {
    background: ${(props) => lighten(0.1, props.theme.secondary)};
  }
`;
const MarkerIcon = styled.div`
  color: ${(props) => props.theme.gray};
  margin-right: 0.3rem;
  :after {
    font-family: "Font Awesome 5 Free";
    font-weight: 900;
    content: "\f3c5";
  }
`;
const DropDownSearch = () => {
  const mediaMap = useContext(Context);
  return (
    <DropDownSearchContainer>
      <DropDownContainer media={mediaMap}>
        <Selected>Rent</Selected>
        <CaretIcon />
      </DropDownContainer>
      <SeachContainer media={mediaMap}>
        <MarkerIcon />
        <Search placeholder="Where should I search?" />
        <Button />
      </SeachContainer>
    </DropDownSearchContainer>
  );
};

export default DropDownSearch;
