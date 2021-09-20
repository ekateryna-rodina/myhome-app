import React, { useContext } from "react";
import styled from "styled-components";
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
`;
interface CategoryProps {
  name: string;
  isSelected: boolean;
  index: number;
}
const Category: React.FC<CategoryProps> = ({ name, isSelected, index }) => {
  const mediaMap = useContext(Context);
  return (
    <CategoryContainer isSelected={isSelected} media={mediaMap}>
      <Label isSelected={isSelected}>{name}</Label>
    </CategoryContainer>
  );
};

export default Category;
