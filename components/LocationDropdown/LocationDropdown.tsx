import { gql, useLazyQuery } from "@apollo/client";
import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import HeaderButton from "../../components/HeaderButton.style";
import { Icons } from "../../src/utils/enums";
import useAutocomplete from "../../src/utils/hooks/useAutocomplete";
import { Location } from "../../src/utils/types";
import { respondTo } from "../../src/utils/_respondTo";
import { AppContext } from "../AppContextWrapper/AppContextWrapper";

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
const GET_PROPERTIES_BY_LOCALTIONS = gql`
  query properties($locationId: Int) {
    properties(locationId: $locationId) {
      id
      title
      beds
      baths
      size
      photo
      locationId
      location {
        city
        country
      }
    }
  }
`;
const LocationDropdown = () => {
  const {
    locations,
    handleProperties,
    handleLoading,
    handleSelectedLocationId,
  } = useContext(AppContext);

  const [state, setState] = useState<{
    value: string;
    filteredOptions: Location[];
    activeOption: number | null;
  }>({
    value: "",
    filteredOptions: [],
    activeOption: null,
  });
  const [getPropertiesByLocation, { loading, data, error }] = useLazyQuery(
    GET_PROPERTIES_BY_LOCALTIONS
  );
  const filteredOptions = useAutocomplete(state.value, locations);

  const onKeyDownHandler = () => {};
  const onFilteredClickHandler = (id: number) => {
    const { city, country } = filteredOptions.filter((o) => o.id === id)[0];
    setState({
      ...state,
      activeOption: id,
      value: `${city}, ${country}`,
    });
  };

  useEffect(() => {
    if (data == undefined) return;
    handleLoading(loading);
    handleProperties(data.properties);
    // eslint-disable-next-line
  }, [data]);

  const locationInputHandler = (value: string) => {
    if (!value) {
      getPropertiesByLocation();
    }
    setState({ ...state, value });
    handleSelectedLocationId(state.activeOption ?? 0);
  };
  const searchLocationsHandler = () => {
    getPropertiesByLocation({
      variables: { locationId: Number(state.activeOption) },
    });
  };
  return (
    <Container data-testid="locationDropdownTestId">
      <MarkerIcon />
      <LocationInput
        value={state.value}
        placeholder="Where should I search?"
        onChange={(e) => locationInputHandler(e.currentTarget.value)}
        onKeyDown={onKeyDownHandler}
        data-testid="locationInputTestId"
      />
      <SearchButtonContainer>
        <HeaderButton icon={Icons.Glass} handler={searchLocationsHandler} />
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
