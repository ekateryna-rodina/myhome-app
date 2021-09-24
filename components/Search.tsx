import React from "react";
import styled from "styled-components";
import { Icons } from "../types/enums";
import DropDownSearch from "./DropDownSearch";
import HeaderButton from "./HeaderButton.style";

const SearchContainer = styled.div`
  width: 100%;
  max-width: 25rem;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
`;
const FilterButtonContainer = styled.div`
  margin-left: 0.35rem;
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
