// import Icon from "components/Icon.style";
import Icon from "components/Icon.style";
import { ListingsHelper } from "components/ListingsHelper";
import dynamic from "next/dynamic";
import React, { useContext, useEffect, useState } from "react";
import { Icons, ListingsFormat } from "src/utils/enums";
import { respondTo } from "src/utils/_respondTo";
import styled, { useTheme } from "styled-components";
import { AppContext } from "../AppContextWrapper/AppContextWrapper";
const ListingItem = dynamic(() => import("../ListingItem/ListingItem"), {
  loading: () => <p>...</p>,
});

const ListingsContainer = styled.div<{
  noResults: boolean;
  isFilterOpen: boolean;
  listingsFormat: ListingsFormat;
}>`
  --transform: ${({ listingsFormat }) =>
    listingsFormat === ListingsFormat.Map
      ? "translateY(calc(100% - 3rem))"
      : "none"};
  --transition: margin 0.1s linear, width 0.5s ease-in-out,
    transform 1s ease-in-out;
  --margin-top: ${({ listingsFormat }) =>
    listingsFormat === ListingsFormat.Grid ? "0" : "40vh"};
  padding: 0rem 1rem 1rem 1rem;
  overflow-y: auto;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(16rem, 1fr));
  grid-gap: 1rem;
  grid-auto-rows: minmax(3rem, auto);
  width: 90vw;
  margin: var(--margin-top) auto 0 auto;
  z-index: 5;
  position: relative;
  background: #fff;
  border-top-left-radius: 2rem;
  border-top-right-radius: 2rem;
  transform: var(--transform);
  -webkit-transform: var(--transform);
  -webkit-transition: var(--transition);
  -moz-transition: var(--transition);
  -o-transition: var(--transition);
  transition: var(--transition);
  ${respondTo.laptopAndDesktop`
  --transform: ${({ listingsFormat }: { listingsFormat: ListingsFormat }) =>
    listingsFormat === ListingsFormat.Map
      ? "translateX(calc(-100% - 3rem))"
      : "none"};
  --width: ${({ listingsFormat }: { listingsFormat: ListingsFormat }) =>
    listingsFormat === ListingsFormat.Grid ? "calc(100% - 4rem)" : "52vw"};
  margin-left: ${({ isFilterOpen }: any) => (isFilterOpen ? "18rem" : "0")};
  margin-top: 0;
  width: var(--width);
  border-top-left-radius: 0;
  border-top-right-radius: 0;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(16rem, 1fr));
  -webkit-transform: var(--transform);
  -moz-transform: var(--transform);
  -o-transform: var(--transform);
  transform: var(--transform);
  `}
`;
const NoResultsContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  width: 100%;
  height: 100%;
  z-index: 1000;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  overflow: hidden;
`;

const Label = styled.span`
  font-size: 1.5rem;
  font-weight: 600;
  color: ${(props) => props.theme.dark};
  text-align: center;
  margin-top: 0.5rem;
`;
const GridHeader = styled.div`
  grid-column: 1/-1;
  position: sticky;
  top: 0;
  z-index: 500;
  background: ${(props) => props.theme.white};
`;

const Listings = () => {
  const { properties, loading, isFilterOpen, listingsFormat } =
    useContext(AppContext);
  const [noResults, setNoResults] = useState<boolean>(false);
  const theme = useTheme();
  useEffect(() => {
    let noResults = !loading && properties !== null && !properties.length;
    setNoResults(noResults);
  }, [properties, loading]);

  return (
    <>
      <ListingsContainer
        noResults={noResults}
        isFilterOpen={isFilterOpen ?? false}
        listingsFormat={listingsFormat}
      >
        {loading && <div>Loading</div>}
        <GridHeader>
          <ListingsHelper totalResults={properties?.length ?? null} />
        </GridHeader>

        {properties &&
          properties.map((item: any, index: any) => (
            <ListingItem key={index} {...item} />
          ))}

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
      </ListingsContainer>
    </>
  );
};

export default Listings;
