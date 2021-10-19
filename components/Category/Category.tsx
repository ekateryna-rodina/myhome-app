import { AppContext } from "components/AppContextWrapper/AppContextWrapper";
import React, { useContext, useEffect, useState } from "react";
import { respondTo } from "src/utils/_respondTo";
import styled, { useTheme } from "styled-components";
import { Icons, PropertyType } from "../../src/utils/enums";
// import { Icons, PropertyType } from "../../src/utils/enums";
import Icon from "../Icon.style";
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
  cursor: pointer;
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
  name: string;
}
const Category: React.FC<CategoryProps> = ({ name }) => {
  const theme = useTheme();
  const { filter, handleFilter } = useContext(AppContext);
  const isCurrentlySelected = (filter: any, name: string): boolean => {
    return Boolean(
      Object.entries(filter.propertyTypes).filter(
        (entry) => entry[0] == name
      )[0][1]
    );
  };
  const [selected, setSelected] = useState<boolean>(
    isCurrentlySelected(filter, name)
  );

  useEffect(() => {
    const isSelected = isCurrentlySelected(filter, name);
    setSelected(isSelected);
    // eslint-disable-next-line
  }, [filter.propertyTypes]);
  const toggleCategoryHandler = () => {
    const isSelected = isCurrentlySelected(filter, name);
    const propertyTypeName = name as keyof typeof PropertyType;
    const newPropertyTypes = {
      ...filter.propertyTypes,
      [PropertyType[propertyTypeName]]: !isSelected,
    };
    handleFilter({ ...filter, propertyTypes: newPropertyTypes });
  };

  return (
    <CategoryContainer onClick={toggleCategoryHandler} isSelected={selected}>
      <Icon
        color={selected ? (theme as any).dark : (theme as any).gray}
        iconType={Icons[name as keyof typeof Icons]}
      />

      <Label isSelected={selected}>{name.toString()}</Label>
    </CategoryContainer>
  );
};

export default Category;
