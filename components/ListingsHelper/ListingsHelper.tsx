import { AppContext } from "components/AppContextWrapper/AppContextWrapper";
import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { Location } from "../../src/utils/types";
const Container = styled.div`
  position: relative;
  width: 100%;
  height: 4rem;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-end;
`;
const Label = styled.span`
  font-size: 1.5rem;
  font-weight: 600;
  color: ${(props) => props.theme.dark};
`;
type ListingsHelperProps = {
  totalResults: number | null;
};
const ListingsHelper = ({ totalResults }: ListingsHelperProps) => {
  const { locations, selectedLocationId, resultsChanged } =
    useContext(AppContext);
  const [location, setLocation] = useState<string>("");
  useEffect(() => {
    const selected: { city: string; country: string } | undefined =
      locations.filter((l) => l.id == selectedLocationId)[0];
    if (!selected) {
      setLocation("");
      return;
    }
    setLocation(
      `for ${(selected as Location).city} in ${(selected as Location).country}`
    );
  }, [locations, selectedLocationId]);
  return (
    <Container>
      <Label>
        {totalResults} results {location}
      </Label>
    </Container>
  );
};

export default ListingsHelper;
