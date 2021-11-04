import React from "react";
import styled from "styled-components";
import BedIcon from "../assets/bed.svg";
import NotificationIcon from "../assets/bell.svg";
import ApartmentIcon from "../assets/building.svg";
import CloseIcon from "../assets/close.svg";
import MessageIcon from "../assets/email.svg";
import VisiteIcon from "../assets/enter.svg";
import FavouriteIcon from "../assets/favourite.svg";
import FilterIcon from "../assets/filter.svg";
import SizeIcon from "../assets/house-design.svg";
import HouseIcon from "../assets/house.svg";
import LandIcon from "../assets/land.svg";
import GlassIcon from "../assets/loupe.svg";
import OfficeIcon from "../assets/office-building.svg";
import SadIcon from "../assets/sad.svg";
import BathIcon from "../assets/toilet.svg";
import { Icons } from "../src/utils/enums";

const StyledIcon = styled.div`
  cursor: pointer;
  display: inline-flex;
`;
type IconProps = {
  iconType: Icons;
  color: string;
  size?: number;
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
  [Icons.Bed]: BedIcon,
  [Icons.Bath]: BathIcon,
  [Icons.Size]: SizeIcon,
  [Icons.Favourite]: FavouriteIcon,
  [Icons.Visit]: VisiteIcon,
  [Icons.Close]: CloseIcon,
  [Icons.Sad]: SadIcon,
};

const Icon = (props: IconProps) => {
  const { iconType, color, size } = props;
  let Icn = iconTypes[iconType];
  return (
    <StyledIcon>
      <Icn width={size ?? 20} height={size ?? 20} fill={color} />
    </StyledIcon>
  );
};

export default Icon;
