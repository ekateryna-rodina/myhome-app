import React, {
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import styled, { useTheme } from "styled-components";
import { AppContext } from "../../components/AppContextWrapper/AppContextWrapper";
import Checkbox from "../../components/Checkbox.style";
import Icon from "../../components/Icon.style";
import { DEFAULT_ROOMS_NUMBER_LIST } from "../../src/utils/constants";
import { Icons } from "../../src/utils/enums";
import useClickOutside from "../../src/utils/hooks/useClickOutside";
import Caret from "../Caret.style";
const Container = styled.div<{
  pushRight?: boolean;
}>`
  min-width: 5.3rem;
  height: 2.3rem;
  border: ${(props) => `1px solid ${props.theme.light}`};
  border-radius: 0.5rem;
`;
const DropDownSelected = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem;
`;
const NumberSelected = styled.span`
  color: ${(props) => props.theme.gray};
  font-size: 0.8rem;
`;
const DropDownOptionsContainer = styled.div<{ show: boolean }>`
  visibility: ${({ show }) => (show ? "visible" : "hidden")};
  background: #fff;
  position: relative;
  z-index: 300;
`;
const OptionsList = styled.ul`
  padding: 0;
`;
const OptionsItem = styled.li`
  padding: 0.3rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
const Label = styled.label.attrs((props: { forValue: string }) => ({
  htmlFor: props.forValue,
}))<{ forValue: string }>`
  cursor: pointer;
`;
interface MultichoiceDropdownProps {
  type: "bed" | "bath";
  pushRight?: boolean;
  onSelected?: Function;
}

const MultichoiceDropdown = (props: MultichoiceDropdownProps) => {
  const { type, pushRight } = props;
  const { filter, handleFilter } = useContext(AppContext);
  let typeOfFilterToUpdate =
    type == "bed" ? ("bedrooms" as const) : ("bathrooms" as const);
  const defaultSelected: number[] = filter[typeOfFilterToUpdate];
  const [showOptions, setShowOptions] = useState<boolean>(false);
  const [selectedValues, setSelectedValues] =
    useState<number[]>(defaultSelected);
  let iconTypes = {
    bed: Icons.Bed,
    bath: Icons.Bath,
  };
  const ref = useRef(null);
  let theme = useTheme();
  const useClickOutsideCallback = useCallback(() => setShowOptions(false), []);
  useClickOutside(ref, useClickOutsideCallback);
  const labelForMany = "4+";
  useEffect(() => {
    handleFilter({ ...filter, [typeOfFilterToUpdate]: selectedValues });
  }, [selectedValues]);

  const onNumberChecked = (option: number) => {
    setSelectedValues((oldSelected: number[]) => {
      let newSelected: number[] = [...oldSelected];
      if (oldSelected?.indexOf(option) === -1) {
        newSelected.push(option);
      } else {
        newSelected = newSelected.filter((number) => number !== option);
      }
      return newSelected;
    });
  };
  const isChecked = (option: number): boolean => {
    return selectedValues.indexOf(option) !== -1;
  };
  const label = (option: number) => (option == 10 ? labelForMany : option);
  const selectedLabel = () => {
    if (!selectedValues.length) return "";
    const manyMask = 10;
    return selectedValues
      .sort((a, b) => a - b)
      .map((val) => (val == manyMask ? labelForMany : val.toString()))
      .join(", ");
  };
  return (
    <Container pushRight={pushRight} data-testid={"multichoiceDropdownTestId"}>
      <DropDownSelected>
        <Icon iconType={iconTypes[type]} color={(theme as any).secondary} />
        <NumberSelected data-testid={"selectedTestId"}>
          {selectedLabel()}
        </NumberSelected>
        <Caret onClick={() => setShowOptions(!showOptions)} />
      </DropDownSelected>
      <DropDownOptionsContainer
        ref={ref}
        show={showOptions}
        data-testid="multichoiceOptionsTestId"
      >
        <OptionsList data-testid="multichoiceListTestId" role="list">
          {DEFAULT_ROOMS_NUMBER_LIST.map((option) => (
            <OptionsItem role="listitem" key={option}>
              <Checkbox
                onChange={onNumberChecked.bind(this, +option)}
                checked={isChecked(+option)}
                dataTestId={option.toString()}
              />{" "}
              <Label htmlFor={option.toString()} forValue={option.toString()}>
                {label(option)}
              </Label>
            </OptionsItem>
          ))}
        </OptionsList>
      </DropDownOptionsContainer>
    </Container>
  );
};

export default MultichoiceDropdown;
