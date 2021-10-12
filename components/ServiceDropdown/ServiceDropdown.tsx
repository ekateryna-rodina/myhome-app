import Caret from "components/Caret.style";
import React, { useState } from "react";
import { ServiceType } from "src/utils/enums";
import styled from "styled-components";
import { respondTo } from "../../src/utils/_respondTo";
// dropdown
const DropDownContainer = styled.div`
  flex: 1;
  display: none;
  position: relative;
  ${respondTo.laptopAndDesktop`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-right: 1rem;
  border-right: ${(props: any) => `1px solid ${props.theme.light}`};
  `}
`;
const Selected = styled.span`
  font-size: 0.9rem;
  font-weight: bold;
  color: ${(props) => props.theme.dark};
`;
const OptionsContainer = styled.div<{ show: boolean }>`
  display: ${({ show }) => (show ? "block" : "none")};
  position: absolute;
  top: 1.8rem;
  left: -0.7rem;
  right: 0;
  background: #fff;
  z-index: 100;
  border: ${(props) => `1px solid ${props.theme.light}`};
  border-radius: 0.3rem;
`;
const OptionsList = styled.ul`
  list-style: none;
  padding: 0.5rem 0;
`;
const Option = styled.li`
  color: ${(props) => props.theme.dark};
  padding: 0 0.7rem;
  font-size: 0.8rem;
  :hover {
    background: ${(props) => props.theme.light};
  }
`;
const ServiceDropdown = () => {
  const [type, setType] = useState(ServiceType.RENT);
  const [show, setShow] = useState(false);
  const options = Object.values(ServiceType);
  const setTypeHandler = (type: ServiceType) => {
    setType(type);
    console.log(type);
  };
  return (
    <DropDownContainer>
      <Selected>{type}</Selected>
      <Caret onClick={() => setShow(!show)} />
      <OptionsContainer show={show}>
        <OptionsList>
          {options.map((o) => (
            <Option key={o} onClick={() => setTypeHandler(o)}>
              {o}
            </Option>
          ))}
        </OptionsList>
      </OptionsContainer>
    </DropDownContainer>
  );
};

export default ServiceDropdown;
