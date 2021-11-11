import { Features } from "components/Features";
import Icon from "components/Icon.style";
import React, { useState } from "react";
import { Icons } from "src/utils/enums";
import { respondTo } from "src/utils/_respondTo";
import styled, { useTheme } from "styled-components";
const ToggleMenu = styled.div`
  display: block;
  ${respondTo.laptopAndDesktop`
    display: none;
    `}
`;
const Popup = styled.div<{ show: boolean }>`
  position: absolute;
  width: max-content;
  bottom: -50%;
  transition: all 0.3s ease-in-out;
  transform: translateY(calc(-50% + 1.1rem));
  left: ${({ show }) => (show ? "0" : "-200rem")};
`;
type ToggleFeaturesProps = {
  features: string[];
};
const ToggleFeatures = ({ features }: ToggleFeaturesProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const theme = useTheme();
  return (
    <ToggleMenu onClick={() => setIsOpen(!isOpen)}>
      <Icon
        iconType={Icons.Filter}
        color={isOpen ? (theme as any).dark : (theme as any).gray}
      />
      <Popup show={isOpen}>
        <Features features={features} />
      </Popup>
    </ToggleMenu>
  );
};

export default ToggleFeatures;
