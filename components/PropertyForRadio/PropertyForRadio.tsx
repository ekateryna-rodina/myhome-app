import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { AppContext } from "../../components/AppContextWrapper/AppContextWrapper";
import { PropertyFor } from "../../src/utils/enums";
const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
const Option = styled.div``;
const Radio = styled.input``;
const Label = styled.label``;
const PropertyForRadio = () => {
  const { filter, handleFilter } = useContext(AppContext);
  const [checkedOption, setCheckedOption] = useState<PropertyFor>(
    filter.for ?? PropertyFor.RENT
  );
  useEffect(() => {
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
    <Container data-testid={"propertyForRadioTestId"}>
      {availableOptions.map((o) => (
        <Option key={o}>
          <Radio
            data-testid={o}
            type="radio"
            id="propertyFor"
            name="propertyFor"
            value={o}
            onChange={propertyForCheck.bind(null, o)}
            checked={isChecked.apply(null, [o])}
          ></Radio>
          <Label htmlFor="propertyFor">{o}</Label>
        </Option>
      ))}
    </Container>
  );
};

export default PropertyForRadio;
