import HeaderButton from "components/HeaderButton.style";
import React from "react";
import { respondTo } from "src/utils/_respondTo";
import styled from "styled-components";
import { Icons } from "../../src/utils/enums";

const Container = styled.div`
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
const Location = styled.input`
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

const LocationDropdown = () => {
  const autocompleteHandler = () => {};
  return (
    <Container>
      <MarkerIcon />
      <Location
        placeholder="Where should I search?"
        onChange={autocompleteHandler}
      />
      <SearchButtonContainer>
        <HeaderButton icon={Icons.Glass} handler={() => console.log()} />
      </SearchButtonContainer>
    </Container>
  );
};

export default LocationDropdown;
