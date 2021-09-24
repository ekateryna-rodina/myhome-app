import React, { useContext } from "react";
import styled, { useTheme } from "styled-components";
import { Context } from "../pages/_app";
import { Icons } from "../types/enums";
import { IMediaQuery } from "../types/media";
import Icon from "./Icon.style";
const CategoryContainer = styled.div<{
  isSelected: boolean;
  media: Partial<IMediaQuery>;
}>`
  width: ${({ media }) =>
    media["isMobile"] || media["isSmallMobile"] ? "7rem" : "5.2rem"};
  height: 4.8rem;
  border-radius: 0.2rem;
  border: ${(props) =>
    `1px solid ${props.isSelected ? props.theme.dark : props.theme.light}`};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  flex-grow: ${({ media }) =>
    media["isTablet"] || media["isSmallMobile"] || media["isMobile"]
      ? "1"
      : "0"};
`;
const Label = styled.span<{ isSelected: boolean }>`
  color: ${(props) => (props.isSelected ? props.theme.dark : props.theme.gray)};
  text-transform: capitalize;
  margin-top: 0.2rem;
`;

interface CategoryProps {
  name: Icons;
  isSelected: boolean;
  index: number;
}
const Category: React.FC<CategoryProps> = ({ name, isSelected, index }) => {
  const mediaMap = useContext(Context).breakpoints;
  const theme = useTheme();
  return (
    <CategoryContainer isSelected={isSelected} media={mediaMap}>
      <Icon
        color={isSelected ? (theme as any).dark : (theme as any).gray}
        iconType={name}
      />

      <Label isSelected={isSelected}>{name.toString()}</Label>
    </CategoryContainer>
  );
};

export default Category;
