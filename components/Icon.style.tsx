import React from "react";
import styled from "styled-components";
import NotificationIcon from "../assets/bell.svg";
import ApartmentIcon from "../assets/building.svg";
import MessageIcon from "../assets/email.svg";
import FilterIcon from "../assets/filter.svg";
import HouseIcon from "../assets/house.svg";
import LandIcon from "../assets/land.svg";
import GlassIcon from "../assets/loupe.svg";
import OfficeIcon from "../assets/office-building.svg";
import { Icons } from "../types/enums";

const StyledIcon = styled.div`
  cursor: pointer;
  display: inline-flex;
`;
type IconProps = {
  iconType: Icons;
  color: string;
};
const iconTypes: Record<Icons, any> = {
  [Icons.Office]: OfficeIcon,
  [Icons.House]: HouseIcon,
  [Icons.Apartment]: ApartmentIcon,
  [Icons.Landplot]: LandIcon,
  [Icons.Glass]: GlassIcon,
  [Icons.Filter]: FilterIcon,
  [Icons.Message]: MessageIcon,
  [Icons.Notification]: NotificationIcon,
};

const Icon = (props: IconProps) => {
  const { iconType, color } = props;
  let Icn = iconTypes[iconType];
  return (
    <StyledIcon>
      <Icn width={20} height={20} fill={color} />
    </StyledIcon>
  );
};

export default Icon;

// &:after {
//   position: absolute;
//   top: 50%;
//   left: 50%;
//   transform: translate(-50%, -50%);
//   font-family: "Font Awesome 5 Free";
//   content: "${(props) => props.before}";
//   color: ${(props) => props.theme.gray};
//   font-size: 1.3rem;
// }
