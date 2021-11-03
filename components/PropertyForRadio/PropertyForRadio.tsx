import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { AppContext } from "../../components/AppContextWrapper/AppContextWrapper";
import { PropertyFor } from "../../src/utils/enums";
const Container = styled.div<{ isLeftSelected: boolean }>`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-right: 0.35rem;
  border-radius: 0.5rem;
  border: ${({ theme }) => `.5px solid ${theme.light}`};
  background: ${({ theme, isLeftSelected }) => `
  linear-gradient(
    ${!isLeftSelected ? "to right" : "to left"},
    rgba(255, 0, 0, 0) 0%,
    rgba(255, 0, 0, 0) 50%,
    ${theme.dark} 30%,
    ${theme.dark} 100%
  );
  `};
`;
const Option = styled.div`
  padding: 0.27rem 0.7rem;
`;

const Label = styled.label<{ isSelected: boolean }>`
  cursor: pointer;
  color: ${({ theme, isSelected }) => (isSelected ? theme.white : theme.dark)};
`;
const Input = styled.input`
  position: fixed;
  opacity: 0;
  pointer-events: none;
`;
const PropertyForRadio = () => {
  const { filter, handleFilter } = useContext(AppContext);
  const [checkedOption, setCheckedOption] = useState<PropertyFor>(
    filter.for ?? PropertyFor.RENT
  );
  useEffect(() => {
    console.log("handle filter");
    handleFilter({ ...filter, for: checkedOption });
  }, [checkedOption]);
  const getAvailableOptions = () => {
    let result: string[] = [];
    const isString = (val: number | string) => isNaN(+val);
    result = Object.keys(PropertyFor)
      .filter(isString)
      .map((k) => PropertyFor[k as keyof typeof PropertyFor]);
    return result;
  };
  const availableOptions = getAvailableOptions();
  const propertyForCheck = (chosen: string) => {
    let keyChosen = Object.keys(PropertyFor).filter(
      (x) => PropertyFor[x as keyof typeof PropertyFor] == chosen
    )[0];
    const optionTyped = PropertyFor[keyChosen as keyof typeof PropertyFor];
    setCheckedOption(optionTyped);
  };
  const isChecked = (o: string) => {
    let isChecked = false;
    let key = Object.keys(PropertyFor).filter(
      (x) => PropertyFor[x as keyof typeof PropertyFor] == o
    )[0];
    const curentTyped: PropertyFor =
      PropertyFor[key as keyof typeof PropertyFor];
    isChecked = checkedOption === curentTyped;
    return isChecked;
  };
  return (
    <Container
      data-testid={"propertyForRadioTestId"}
      isLeftSelected={checkedOption == PropertyFor.RENT}
    >
      {availableOptions.map((o) => (
        <Option key={o}>
          <Label
            onClick={propertyForCheck.bind(null, o)}
            isSelected={isChecked.apply(null, [o])}
          >
            {o}
          </Label>
          <Input
            data-testid={o}
            type="radio"
            id="propertyFor"
            value={o}
            onChange={propertyForCheck.bind(null, o)}
            checked={isChecked.apply(null, [o])}
          ></Input>
        </Option>
      ))}
    </Container>
  );
};

export default PropertyForRadio;
