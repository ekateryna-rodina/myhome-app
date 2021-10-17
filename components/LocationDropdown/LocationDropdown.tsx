import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import HeaderButton from "../../components/HeaderButton.style";
import { Icons } from "../../src/utils/enums";
import useAutocomplete from "../../src/utils/hooks/useAutocomplete";
import { Location } from "../../src/utils/types";
import { respondTo } from "../../src/utils/_respondTo";
import { FilterContext } from "../FilterProviderWrapper/FilterProviderWrapper";

const Container = styled.div`
  position: relative;
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
const LocationInput = styled.input`
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

const LocationsOptionsContainer = styled.div<{ show: boolean }>`
  position: absolute;
  left: 0;
  top: calc(100% + 0.6rem);
  width: 100%;
  height: 10rem;
  background: #fff;
  border-radius: 0.5rem;
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.3);
  opacity: ${({ show }) => (show ? "1" : "0")};
`;

const OptionsList = styled.ul`
  list-style: none;
  padding: 0;
`;
const LocationDropdown = () => {
  const { locations } = useContext(FilterContext);

  const [state, setState] = useState<{
    value: string;
    filteredOptions: Location[];
    activeOptions: number[];
  }>({
    value: "",
    filteredOptions: [],
    activeOptions: [],
  });
  const filteredOptions = useAutocomplete(state.value, locations);
  useEffect(() => {
    setState({ ...state, filteredOptions });
    //eslint-disable-next-line
  }, [filteredOptions]);
  const onKeyDownHandler = () => {};
  const onFilteredClickHandler = (id: number) => {
    const { city, country } = filteredOptions.filter((o) => o.id === id)[0];
    setState({
      ...state,
      activeOptions: [...state.activeOptions, id],
      value: `${city}, ${country}`,
    });
  };
  return (
    <Container data-testid="locationDropdownTestId">
      <MarkerIcon />
      <LocationInput
        value={state.value}
        placeholder="Where should I search?"
        onChange={(e) => setState({ ...state, value: e.currentTarget.value })}
        onKeyDown={onKeyDownHandler}
        data-testid="locationInputTestId"
      />
      <SearchButtonContainer>
        <HeaderButton icon={Icons.Glass} handler={() => console.log()} />
      </SearchButtonContainer>
      <LocationsOptionsContainer
        data-testid="locationsOptionsContainerTestId"
        show={filteredOptions.length > 0}
      >
        <OptionsList data-testid="locationsListTestId">
          {filteredOptions.length > 0 ? (
            filteredOptions.map((o) => (
              <li key={o.id} onClick={onFilteredClickHandler.bind(null, o.id)}>
                {o.city}, {o.country}
              </li>
            ))
          ) : (
            <li></li>
          )}
        </OptionsList>
      </LocationsOptionsContainer>
    </Container>
  );
};

export default LocationDropdown;
