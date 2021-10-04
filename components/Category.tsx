import React from "react";
import styled, { useTheme } from "styled-components";
import { respondTo } from "utils/_respondTo";
import { Icons } from "../utils/enums";
import Icon from "./Icon.style";
const CategoryContainer = styled.div<{
  isSelected: boolean;
}>`
  width: 8rem;
  height: 4.8rem;
  border-radius: 0.2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-grow: 1;
  border: ${(props) =>
    `1px solid ${props.isSelected ? props.theme.dark : props.theme.light}`};
  ${respondTo.laptopAndDesktop`
  width: 5rem;
`}
  ${respondTo.mobileL`
width: 5rem;
`}
  ${respondTo.tablet`
width: 5rem;
`}
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
  const theme = useTheme();
  return (
    <CategoryContainer isSelected={isSelected}>
      <Icon
        color={isSelected ? (theme as any).dark : (theme as any).gray}
        iconType={name}
      />

      <Label isSelected={isSelected}>{name.toString()}</Label>
    </CategoryContainer>
  );
};

export default Category;
