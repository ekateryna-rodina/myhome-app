import { useLazyQuery } from "@apollo/client";
import HeaderButton from "components/HeaderButton.style";
import Icon from "components/Icon.style";
import { theme } from "pages/_app";
import React, { useContext, useEffect, useState } from "react";
import { Icons } from "src/utils/enums";
import styled from "styled-components";
import { GET_PROPERTIES_QUERY } from "../../src/utils/constants";
import useAutocomplete from "../../src/utils/hooks/useAutocomplete";
import { Location } from "../../src/utils/types";
import { AppContext } from "../AppContextWrapper/AppContextWrapper";

const Container = styled.div`
  flex: 4;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-right: 0.3rem;
  margin-left: 0.5rem;
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
  :after {
    font-family: "Font Awesome 5 Free";
    font-weight: 900;
    content: "\f3c5";
  }
`;

const LocationsOptionsContainer = styled.div<{ show: boolean }>`
  opacity: ${({ show }) => (show ? "1" : "0")};
  position: absolute;
  left: 0;
  top: calc(100% + 0.6rem);
  width: 100%;
  padding: 1rem 0 1rem 1rem;
  background: #fff;
  border-radius: 0.5rem;
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.3);
  box-sizing: border-box;
  transition: all 100ms linear;
  pointer-events: ${({ show }) => (show ? "auto" : "none")};
  transform: ${({ show }) => (show ? "translateY(0)" : "translateY(-40px)")};
`;
const SearchButtonContainer = styled.div`
  position: absolute;
  top: 50%;
  right: 0.35rem;
  transform: translateY(-50%);
`;

const OptionsList = styled.ul`
  list-style: none;
  padding: 0;
`;

const IconContainer = styled.div`
  margin-right: 0.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const LocationDropdown = () => {
  const {
    locations,
    handleProperties,
    handleLoading,
    handleSelectedLocationId,
    filter,
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
  const [getPropertiesByLocation, { loading, data, error }] =
    useLazyQuery(GET_PROPERTIES_QUERY);
  const filteredOptions = useAutocomplete(state.value, locations);
  const onKeyDownHandler = () => {};
  const onFilteredClickHandler = (id: number) => {
    const { city, country } = filteredOptions.filter((o) => o.id === id)[0];
    setState({
      ...state,
      activeOption: id,
      value: `${city}, ${country}`,
    });
    handleSelectedLocationId(id);
  };

  useEffect(() => {
    if (data == undefined) return;
    handleLoading(loading);
    handleProperties(data.properties);
    // eslint-disable-next-line
  }, [data]);

  const clearInput = () => {
    setState({ ...state, value: "", activeOption: 0 });
    handleSelectedLocationId(0);
    getPropertiesByLocation({
      variables: { locationId: 0, filter: JSON.stringify(filter) },
    });
  };
  const locationInputHandler = (value: string) => {
    if (!value) {
      clearInput();
      return;
    }

    setState({ ...state, value });
  };
  const searchLocationsHandler = () => {
    getPropertiesByLocation({
      variables: { locationId: Number(state.activeOption) },
    });
  };
  const onCloseIconHandler = () => {
    if (!state.value) return;
    clearInput();
  };
  return (
    <Container data-testid="locationDropdownTestId">
      <IconContainer onClick={onCloseIconHandler}>
        {!state.value ? (
          <MarkerIcon />
        ) : (
          <Icon iconType={Icons.Close} color={theme.secondaryText} />
        )}
      </IconContainer>

      <LocationInput
        value={state.value}
        placeholder="Where should I search?"
        onChange={(e) => locationInputHandler(e.currentTarget.value)}
        onKeyDown={onKeyDownHandler}
        data-testid="locationInputTestId"
      />

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
      <SearchButtonContainer>
        <HeaderButton icon={Icons.Glass} handler={searchLocationsHandler} />
      </SearchButtonContainer>
    </Container>
  );
};

export default LocationDropdown;
