import Icon from "components/Icon.style";
import { ListingsHelper } from "components/ListingsHelper";
import dynamic from "next/dynamic";
import React, { useContext, useEffect, useState } from "react";
import { Icons } from "src/utils/enums";
import { respondTo } from "src/utils/_respondTo";
import styled, { useTheme } from "styled-components";
import { AppContext } from "../AppContextWrapper/AppContextWrapper";
const ListingItem = dynamic(() => import("../ListingItem/ListingItem"), {
  loading: () => <p>...</p>,
});

const ListingsContainer = styled.div<{
  noResults: boolean;
  isFilterOpen: boolean;
}>`
  margin-top: 40vh;
  padding: 2rem 1rem 1rem 1rem;
  overflow-y: auto;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: ${({ noResults }) =>
    noResults ? "center" : "space-between"};
  align-items: ${({ noResults }) => (noResults ? "center" : "flex-start")};
  gap: 1rem;
  z-index: 5;
  position: relative;
  background: #fff;
  border-top-left-radius: 2rem;
  border-top-right-radius: 2rem;
  ${respondTo.laptopAndDesktop`
  transition: margin .1s linear;
  margin-left: ${({ isFilterOpen }: any) => (isFilterOpen ? "18rem" : "0")};
  margin-top: 0;
  width: 55vw;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(16rem, 1fr));
  `}
`;
const NoResultsContainer = styled.div`
  min-width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  ${respondTo.laptopAndDesktop`
  min-width: 50vw;
  `}
`;

const Label = styled.span`
  font-size: 1.5rem;
  font-weight: 600;
  color: ${(props) => props.theme.dark};
  text-align: center;
  margin-top: 0.5rem;
`;
const Listings = () => {
  const { properties, loading, isFilterOpen } = useContext(AppContext);
  const [noResults, setNoResults] = useState<boolean>(false);
  const theme = useTheme();
  useEffect(() => {
    let noResults = !loading && properties !== null && !properties.length;
    setNoResults(noResults);
  }, [properties, loading]);
  return (
    <ListingsContainer
      noResults={noResults}
      isFilterOpen={isFilterOpen ?? false}
    >
      {!noResults && !loading && (
        <ListingsHelper totalResults={properties?.length ?? 0} />
      )}
      {noResults && (
        <NoResultsContainer>
          <Icon
            iconType={Icons.Sad}
            color={(theme as any)?.primary}
            size={80}
          />
          <Label>
            UPS... <br /> No results found for your request. <br /> Try other
            locations or filters
          </Label>
        </NoResultsContainer>
      )}
      {loading && <div>Loading</div>}
      {properties &&
        properties.map((item: any, index: any) => (
          <ListingItem key={index} {...item} />
        ))}
    </ListingsContainer>
  );
};

export default Listings;
