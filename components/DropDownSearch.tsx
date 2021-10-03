import React from "react";
import styled from "styled-components";
import { respondTo } from "utils/_respondTo";
import { Icons } from "../utils/enums";
import Caret from "./Caret.style";
import HeaderButton from "./HeaderButton.style";

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
const DropDownContainer = styled.div`
  flex: 1;
  display: none;

  ${respondTo.laptopAndDesktop`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-right: 1rem;
  border-right: ${(props: any) => `2px solid ${props.theme.gray}`};
  `}
`;
const Selected = styled.span`
  font-size: 0.9rem;
  font-weight: bold;
  color: ${(props) => props.theme.dark};
`;

// search
const SeachContainer = styled.div`
  flex: 4;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-right: 0.3rem;
  margin-left: 0;
  ${respondTo.tablet`
  margin-left: 1rem;
  `}
  ${respondTo.laptopAndDesktop`
  margin-left: 1rem;
  `}
`;
const Search = styled.input`
  height: 90%;
  width: 100%;
  font-size: 0.9rem;
  border: 0;
  outline: 0;
  color: ${(props) => props.theme.gray};
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
const SearchButtonContainer = styled.div`
  position: absolute;
  top: 50%;
  right: 0.35rem;
  transform: translateY(-50%);
`;
const DropDownSearch = () => {
  return (
    <DropDownSearchContainer>
      <DropDownContainer>
        <Selected>Rent</Selected>
        <Caret />
      </DropDownContainer>
      <SeachContainer>
        <MarkerIcon />
        <Search placeholder="Where should I search?" />
        <SearchButtonContainer>
          <HeaderButton
            icon={Icons.Glass}
            handler={() => console.log("search")}
          />
        </SearchButtonContainer>
      </SeachContainer>
    </DropDownSearchContainer>
  );
};

export default DropDownSearch;
