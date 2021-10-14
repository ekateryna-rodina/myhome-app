import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import HeaderButton from "../../components/HeaderButton.style";
import { Context } from "../../pages/_app";
import { Icons } from "../../src/utils/enums";
import useAutocomplete from "../../src/utils/hooks/useAutocomplete";
import { respondTo } from "../../src/utils/_respondTo";

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

const LocationsOptions = styled.div`
  position: absolute;
  left: 0;
  top: calc(100% + 0.6rem);
  width: 100%;
  height: 10rem;
  background: #fff;
  border-radius: 0.5rem;
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.3);
  opacity: 0;
`;

const LocationDropdown = () => {
  const {
    locations: { data },
  } = useContext(Context);
  const [state, setState] = useState({
    value: "",
    filteredOptions: data,
    activeOptions: [],
  });
  const options = useAutocomplete(state.value, data);
  useEffect(() => {
    console.log(state.value);
  }, [state.value]);
  const onKeyDownHandler = () => {};
  return (
    <Container data-testid="locationDropdownTestId">
      <MarkerIcon />
      <Location
        value={state.value}
        placeholder="Where should I search?"
        onChange={(e) => setState({ ...state, value: e.currentTarget.value })}
        onKeyDown={onKeyDownHandler}
      />
      <SearchButtonContainer>
        <HeaderButton icon={Icons.Glass} handler={() => console.log()} />
      </SearchButtonContainer>
      <LocationsOptions data-testid="locationsOptionsTestId"></LocationsOptions>
    </Container>
  );
};

export default LocationDropdown;