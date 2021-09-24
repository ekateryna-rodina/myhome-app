import React from "react";
import styled from "styled-components";
import { Icons } from "../types/enums";
import DropDownSearch from "./DropDownSearch";
import HeaderButton from "./HeaderButton.style";

const SearchContainer = styled.div`
  position: relative;
  width: 100%;
  max-width: 21rem;
`;
const FilterButtonContainer = styled.div`
  position: absolute;
  top: 50%;
  right: -2.5rem;
  transform: translateY(-50%);
`;
const Search = () => {
  return (
    <SearchContainer>
      <DropDownSearch />
      <FilterButtonContainer>
        <HeaderButton icon={Icons.Filter} />
      </FilterButtonContainer>
    </SearchContainer>
  );
};

export default Search;
