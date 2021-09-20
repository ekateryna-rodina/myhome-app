import React, { useContext } from "react";
import styled, { useTheme } from "styled-components";
import ApartmentIcon from "../assets/building.svg";
import HouseIcon from "../assets/house.svg";
import LandIcon from "../assets/land.svg";
import OfficeIcon from "../assets/office-building.svg";
import { Context } from "../pages/_app";
import { IMediaQuery } from "../types/media";
const CategoryContainer = styled.div<{
  isSelected: boolean;
  media: Partial<IMediaQuery>;
}>`
  width: 5.2rem;
  height: 4.8rem;
  border-radius: 0.2rem;
  border: ${(props) =>
    `1px solid ${props.isSelected ? props.theme.dark : props.theme.light}`};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  flex-grow: ${({ media }) => (media["isTablet"] ? "1" : "0")};
`;
const Label = styled.span<{ isSelected: boolean }>`
  color: ${(props) => (props.isSelected ? props.theme.dark : props.theme.gray)};
  text-transform: capitalize;
  margin-top: 0.2rem;
`;

const iconTypes: Record<"office" | "house" | "apartment" | "landplot", any> = {
  office: OfficeIcon,
  house: HouseIcon,
  apartment: ApartmentIcon,
  landplot: LandIcon,
};
interface CategoryProps {
  name: "office" | "house" | "apartment" | "landplot";
  isSelected: boolean;
  index: number;
}
const Category: React.FC<CategoryProps> = ({ name, isSelected, index }) => {
  const mediaMap = useContext(Context);
  const theme = useTheme();
  let Icon = iconTypes[name];
  return (
    <CategoryContainer isSelected={isSelected} media={mediaMap}>
      <Icon
        width={20}
        height={20}
        fill={isSelected ? (theme as any).dark : (theme as any).gray}
      />

      <Label isSelected={isSelected}>{name}</Label>
    </CategoryContainer>
  );
};

export default Category;
