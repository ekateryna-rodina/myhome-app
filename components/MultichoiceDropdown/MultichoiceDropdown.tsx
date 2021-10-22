import React, { useState } from "react";
import styled, { useTheme } from "styled-components";
import Icon from "../../components/Icon.style";
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

interface MultichoiceDropdownProps {
  type: "bed" | "bath";
  pushRight?: boolean;
  onSelected?: Function;
}

const MultichoiceDropdown = (props: MultichoiceDropdownProps) => {
  const { type, pushRight } = props;
  const [showOptions, setShowOptions] = useState<boolean>(false);
  const numberOfRooms = [1, 2, 3, "more..."];
  let iconTypes = {
    bed: Icons.Bed,
    bath: Icons.Bath,
  };
  let theme = useTheme();
  return (
    <Container pushRight={pushRight} data-testid={"multichoiceDropdownTestId"}>
      <DropDownSelected>
        <Icon iconType={iconTypes[type]} color={(theme as any).secondary} />
        <NumberSelected>3</NumberSelected>
        <Caret onClick={() => setShowOptions(!showOptions)} />
      </DropDownSelected>
      <DropDownOptionsContainer show={showOptions}></DropDownOptionsContainer>
    </Container>
  );
};

export default MultichoiceDropdown;
