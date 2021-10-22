import React, { useState } from "react";
import styled, { useTheme } from "styled-components";
import Icon from "../../components/Icon.style";
import { DEFAULT_ROOMS_NUMBER_LIST } from "../../src/utils/constants";
import { Icons } from "../../src/utils/enums";
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
interface MultichoiceDropdownProps {
  type: "bed" | "bath";
  pushRight?: boolean;
  onSelected?: Function;
}

const MultichoiceDropdown = (props: MultichoiceDropdownProps) => {
  const { type, pushRight } = props;
  const defaultSelected = type === "bed" ? 2 : 1;
  const [showOptions, setShowOptions] = useState<boolean>(false);
  const [selectedValues, setSelectedValues] = useState<number[]>([
    defaultSelected,
  ]);

  let iconTypes = {
    bed: Icons.Bed,
    bath: Icons.Bath,
  };

  let theme = useTheme();
  return (
    <Container pushRight={pushRight} data-testid={"multichoiceDropdownTestId"}>
      <DropDownSelected>
        <Icon iconType={iconTypes[type]} color={(theme as any).secondary} />
        <NumberSelected data-testid={"selectedTestId"}>
          {selectedValues.map(String).join(", ")}
        </NumberSelected>
        <Caret onClick={() => setShowOptions(!showOptions)} />
      </DropDownSelected>
      <DropDownOptionsContainer
        show={showOptions}
        data-testid="multichoiceOptionsTestId"
      >
        <OptionsList data-testid={"multichoiceListTestId"}>
          {DEFAULT_ROOMS_NUMBER_LIST.map((option) => (
            <OptionsItem role="listitem" key={option}></OptionsItem>
          ))}
        </OptionsList>
      </DropDownOptionsContainer>
    </Container>
  );
};

export default MultichoiceDropdown;
