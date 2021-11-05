import React from "react";
import styled from "styled-components";
import BedIcon from "../public/assets/bed.svg";
import NotificationIcon from "../public/assets/bell.svg";
import ApartmentIcon from "../public/assets/building.svg";
import CloseIcon from "../public/assets/close.svg";
import MessageIcon from "../public/assets/email.svg";
import VisiteIcon from "../public/assets/enter.svg";
import FavouriteIcon from "../public/assets/favourite.svg";
import FilterIcon from "../public/assets/filter.svg";
import SizeIcon from "../public/assets/house-design.svg";
import HouseIcon from "../public/assets/house.svg";
import LandIcon from "../public/assets/land.svg";
import GlassIcon from "../public/assets/loupe.svg";
import OfficeIcon from "../public/assets/office-building.svg";
import SadIcon from "../public/assets/sad.svg";
import BathIcon from "../public/assets/toilet.svg";
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
