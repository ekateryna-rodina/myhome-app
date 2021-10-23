import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import {
  AdditionalFilterKeys,
  AdditionalFilterMap,
  AdditionalFiltersStringMap,
} from "../src/utils/types";
import { AppContext } from "./AppContextWrapper/AppContextWrapper";
import Checkbox from "./Checkbox.style";

const Container = styled.div`
  margin-top: 1rem;
  width: 85%;
`;
const CheckWithLabelContainer = styled.div`
  margin: 0.5rem 0;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  height: 1.5rem;
  line-height: 1.5rem;
`;
const Label = styled.span`
  text-transform: capitalize;
  color: ${(props) => props.theme.gray};
  margin-left: 0.2rem;
`;
interface CheckboxGroupProps {
  onSelected?: Function;
  data: AdditionalFilterMap;
}
const CheckboxGroup = (props: CheckboxGroupProps) => {
  const { data } = props;
  const [additional, setAdditional] = useState<AdditionalFilterMap>(data);
  const { filter, handleFilter } = useContext(AppContext);
  useEffect(() => {
    handleFilter({ ...filter, additional: { ...additional } });
  }, [additional]);
  return (
    <Container>
      {Object.keys(additional).map((property: string) => (
        <CheckWithLabelContainer key={property}>
          <Checkbox
            dataTestId={property}
            onChange={() =>
              setAdditional({
                ...additional,
                [property]: !additional[property as AdditionalFilterKeys],
              })
            }
            checked={additional[property as AdditionalFilterKeys]}
          />
          <Label>
            {AdditionalFiltersStringMap[property as AdditionalFilterKeys]}
          </Label>
        </CheckWithLabelContainer>
      ))}
    </Container>
  );
};

export default CheckboxGroup;
