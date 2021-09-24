import React, { useContext } from "react";
import styled, { useTheme } from "styled-components";
import BedIcon from "../assets/bed.svg";
import BathIcon from "../assets/toilet.svg";
import { Context } from "../pages/_app";
import { IMediaQuery } from "../types/media";
import Caret from "./Caret.style";
const DropDown = styled.div<{
  media: Partial<IMediaQuery>;
  pushRight?: boolean;
}>`
  width: 5.3rem;
  height: 2.3rem;
  border: ${(props) => `1px solid ${props.theme.light}`};
  border-radius: 0.5rem;
  ${({ media, pushRight }) =>
    media["isTablet"] && pushRight ? "margin-left: 2rem" : ``}
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
const DropDownContent = styled.div``;
interface RoomsDropDownProps {
  onSelected: Function;
  type: "bed" | "bath";
  pushRight?: boolean;
}
const RoomsDropDown = (props: RoomsDropDownProps) => {
  const { onSelected, type, pushRight } = props;
  const mediaMap = useContext(Context).breakpoints;
  let iconTypes = {
    bed: BedIcon,
    bath: BathIcon,
  };
  let theme = useTheme();
  const Icon = iconTypes[type];
  return (
    <DropDown media={mediaMap} pushRight={pushRight}>
      <DropDownSelected>
        <Icon width={20} height={20} fill={(theme as any).secondary} />
        <NumberSelected>3</NumberSelected>
        <Caret />
      </DropDownSelected>
      <DropDownContent></DropDownContent>
    </DropDown>
  );
};

export default RoomsDropDown;