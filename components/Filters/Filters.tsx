import { gql, useLazyQuery } from "@apollo/client";
import { AppContext } from "components/AppContextWrapper/AppContextWrapper";
import { Category } from "components/Category";
import CheckboxGroup from "components/CheckboxGroup";
import RoomsDropDown from "components/RoomsDropDown";
import Slider from "components/Slider";
import React, { useContext, useEffect, useState } from "react";
import { Icons, Unit } from "src/utils/enums";
import { respondTo } from "src/utils/_respondTo";
import styled from "styled-components";
const Container = styled.div<{
  isOpen: boolean;
  isInitialialized: boolean;
}>`
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 5000;
  background: #fff;
  overflow-y: auto;
  transition: 0.5s ease-out;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 0 1rem;
  transform: ${({ isOpen }) =>
    isOpen ? `translateX(0);` : `translateX(-60rem);`};
  transform: translateX(0);
  ${respondTo.tablet`
    max-width: 15rem;
    border-right: ${(props: any) => `1px solid ${props.theme.light}`}
    right: 72%;
    `}
  ${respondTo.laptopAndDesktop`
        max-width: 15rem;
        border-right: ${(props: any) => `1px solid ${props.theme.light}`}
        right: 72%;
        `}
    ${respondTo.laptopAndDesktop`
    padding: 0 2rem;
    `}
`;
const Title = styled.span<{
  pushRight?: boolean;
}>`
  color: ${(props) => props.theme.dark};
  margin-top: 1rem;
  font-weight: 700;
  ${respondTo.tablet`
    margin-left:${(props: any) => (props.pushRight ? "20%" : "0")}
    `}
`;
const Categories = styled.div`
  width: 100%;
  flex-direction: row;
  margin-top: 1rem;
  display: inline-flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  justify-content: flex-start;
  align-items: center;
`;

const RoomsContainer = styled.div`
  margin-top: 1rem;
  display: flex;
  flex-direction: row;
  justify-content: "space-between";
  align-items: center;
  width: 60%;
  ${respondTo.tablet`
        justify-content: flex-start;
        width: 30%;
        `}
  ${respondTo.laptopAndDesktop`
        justify-content: flex-start;
        width: 85%;
        `}
`;
const FlexibleRangeContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-top: 1rem;
  justify-content: center;
  ${respondTo.tablet`
      flex-direction: row;
      justify-content: space-around;
      `}
`;
const PriceRange = styled.div`
  flex: 1;
  flex-grow: 2;
`;
const PropertySize = styled.div`
  flex: 1;
  flex-grow: 2;
  ${respondTo.tablet`
    margin-top: 1rem;
    `}
`;

const GET_PROPERTIES_BY_PROPERTY_TYPE = gql`
  query properties($propertyTypes: PropertyType) {
    properties(propertyTypes: $propertyType) {
      id
      title
      beds
      baths
      size
      photo
      locationId
      location {
        city
        country
      }
    }
  }
`;
const Filters = () => {
  const [isInitialialized, setIsInitialized] = useState(false);
  const { handleProperties, handleLoading } = useContext(AppContext);
  const [getPropertiesByPropertyType, { loading, data, error }] = useLazyQuery(
    GET_PROPERTIES_BY_PROPERTY_TYPE
  );
  useEffect(() => {
    setIsInitialized(true);
  }, []);
  useEffect(() => {
    if (data == undefined) return;
    handleLoading(loading);
    handleProperties(data.properties);
    // eslint-disable-next-line
  }, [data]);
  const categories = [
    [Icons.House, true],
    [Icons.Apartment, true],
    [Icons.Office, false],
    [Icons.Landplot, false],
  ];
  const filterByPropertyType = () => {
    getPropertiesByPropertyType({
      variables: { propertyTypes: [] },
    });
  };
  const additionalData = ["pets friendly", "furnished", "parking"];
  const { isFilterOpen } = useContext(AppContext);
  return (
    <Container isOpen={isFilterOpen} isInitialialized={isInitialialized}>
      <Title>Category</Title>
      <Categories>
        {categories.map((c: any[], index) => (
          <Category key={c[0]} name={c[0]} isSelected={c[1]} index={index} />
        ))}
      </Categories>
      <FlexibleRangeContainer>
        <PriceRange>
          <Title>Price Range</Title>
          <Slider min={0} max={300} unit={Unit.USD} />
        </PriceRange>
        <PropertySize>
          <Title pushRight={true}>Property Size</Title>
          <Slider min={0} max={5000} unit={Unit.SQFT} pushRight={true} />
        </PropertySize>
      </FlexibleRangeContainer>
      <Title>Rooms</Title>
      <RoomsContainer>
        <RoomsDropDown type="bed" onSelected={() => null} />
        <RoomsDropDown type="bath" onSelected={() => null} pushRight={true} />
      </RoomsContainer>
      <Title>Additional</Title>
      <CheckboxGroup data={additionalData} onSelected={() => null} />
    </Container>
  );
};

export default Filters;
