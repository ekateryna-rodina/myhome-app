import { DropDownSearch } from "components/DropDownSearch";
import { PropertyForRadio } from "components/PropertyForRadio";
import React, { useContext } from "react";
import styled from "styled-components";
import { Icons } from "../../src/utils/enums";
import { AppContext } from "../AppContextWrapper/AppContextWrapper";
import HeaderButton from "../HeaderButton.style";

const SearchContainer = styled.div`
  width: 100%;
  max-width: 25rem;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  margin: 0.5rem auto;
`;
const FilterButtonContainer = styled.div`
  margin-left: 0.35rem;
`;

const Search = () => {
  const { isFilterOpen, handleIsFilterOpen } = useContext(AppContext);
  const toggleFilter = () => {
    handleIsFilterOpen(!isFilterOpen);
  };
  return (
    <SearchContainer data-testid="searchTestId">
      <PropertyForRadio />
      <DropDownSearch />
      <FilterButtonContainer>
        <HeaderButton icon={Icons.Filter} handler={toggleFilter} />
      </FilterButtonContainer>
    </SearchContainer>
  );
};

export default Search;
