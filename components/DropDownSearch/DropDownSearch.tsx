import React from "react";
import styled from "styled-components";
import { LocationDropdown } from "../LocationDropdown";

const DropDownSearchContainer = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  max-width: 21rem;
  height: 2.93rem;
  border-radius: 0.5rem;
  cursor: pointer;
  padding: 0.7rem 0;
  box-sizing: border-box;
  border: ${(props) => `1px solid ${props.theme.light}`};
`;

const DropDownSearch = () => {
  return (
    <DropDownSearchContainer>
      <LocationDropdown />
    </DropDownSearchContainer>
  );
};

export default DropDownSearch;
