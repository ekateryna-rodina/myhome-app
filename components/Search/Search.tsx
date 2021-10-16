import React, { useContext } from "react";
import styled from "styled-components";
import { Icons } from "../../src/utils/enums";
import DropDownSearch from "../DropDownSearch/DropDownSearch";
import { FilterContext } from "../FilterProviderWrapper/FilterProviderWrapper";
import HeaderButton from "../HeaderButton.style";

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
  const { isFilterOpen, handleIsFilterOpen } = useContext(FilterContext);

  return (
    <SearchContainer data-testid="searchTestId">
      <DropDownSearch />
      <FilterButtonContainer>
        <HeaderButton
          icon={Icons.Filter}
          handler={() => handleIsFilterOpen(!isFilterOpen)}
        />
      </FilterButtonContainer>
    </SearchContainer>
  );
};

export default Search;
