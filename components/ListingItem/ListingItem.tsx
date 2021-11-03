import { AppContext } from "components/AppContextWrapper/AppContextWrapper";
import Image from "next/image";
import React, { useContext } from "react";
import styled, { useTheme } from "styled-components";
import { Icons } from "../../src/utils/enums";
import { respondTo } from "../../src/utils/_respondTo";
import Icon from "../Icon.style";
const ListingItemContainer = styled.div`
  width: 16rem;
  height: 20rem;
  border: ${(props) => `1px solid ${props.theme.light}`};
  border-radius: 1rem;
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  ${respondTo.laptopAndDesktop`
  flex-grow: 0;
  `}
`;

const ImageContainer = styled.div`
  position: relative;
  width: 100%;
  height: 50%;
  border-radius: 1rem;
  overflow: hidden;
`;
const ContentContainer = styled.div`
  width: 90%;
  height: 70%;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
`;
const Title = styled.h3`
  margin: 0;
  padding: 0;
  color: ${(props) => props.theme.dark};
  font-size: 0.9rem;
  font-weight: 700;
`;
const Address = styled.span`
  color: ${(props) => props.theme.gray};
  font-size: 0.8rem;
`;
const Features = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`;
const Description = styled.div`
  flex: 2;
`;
const ItemFooter = styled.div`
  flex: 1;
  border-bottom-left-radius: 1rem;
  border-bottom-right-radius: 1rem;
  border-top: ${({ theme }) => `1px solid ${theme.light}`};
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0 1rem;
`;

const Bed = styled.div`
  margin-right: 0.5rem;
  display: flex;
`;
const Bath = styled.div`
  margin-right: 0.5rem;
`;
const Size = styled.div``;
const Label = styled.span`
  color: ${(props) => props.theme.gray};
  font-size: 0.7rem;
  margin-right: 0.3rem;
`;
const Number = styled.span`
  color: ${(props) => props.theme.gray};
  font-size: 0.7rem;
  margin-right: 0.3rem;
  margin-left: 0.5rem;
`;
const Price = styled.div`
  color: ${(props) => props.theme.primary};
  font-size: 1.1rem;

  span {
    color: ${(props) => props.theme.gray};
    font-size: 0.8rem;
  }
`;
interface ListingItemProps {
  id: number;
  superHost?: boolean;
  title: string;
  type: string;
  beds: number;
  baths: number;
  photo: string;
  location: { city: string; country: string };
}
const ListingItem = (props: ListingItemProps) => {
  const {
    id,
    location: { city, country },
    superHost,
    title,
    type,
    baths,
    beds,
    photo,
  } = props;
  const theme = useTheme();
  const { handleFocusItemListId } = useContext(AppContext);
  const onHoverHandler = () => {
    handleFocusItemListId(id);
  };
  const onUnhoverHandler = () => {
    handleFocusItemListId(0);
  };
  return (
    <ListingItemContainer
      data-testid={`listItemIdTestId_${id}`}
      onMouseEnter={onHoverHandler}
      onMouseLeave={onUnhoverHandler}
    >
      <ImageContainer>
        {photo && (
          <Image src={photo} alt="" layout="fill" objectFit="cover"></Image>
        )}
      </ImageContainer>
      <Description>
        <ContentContainer>
          <Title>{title}</Title>
          <Address>
            {city}, {country}
          </Address>
          <Features>
            <Bed>
              <Icon
                iconType={Icons.Bed}
                color={(theme as any).gray}
                size={15}
              />
              <Number>{beds}</Number>
              <Label>{Icons.Bed.toString()}</Label>
            </Bed>
            <Bath>
              <Icon
                iconType={Icons.Bath}
                color={(theme as any).gray}
                size={15}
              />
              <Number>{baths}</Number>
              <Label>{Icons.Bath.toString()}</Label>
            </Bath>
            <Size>
              <Icon
                iconType={Icons.Size}
                color={(theme as any).gray}
                size={15}
              />
              <Number>{1200}</Number>
              <Label>{Icons.Size.toString()}</Label>
            </Size>
          </Features>
        </ContentContainer>
      </Description>
      <ItemFooter>
        <Price>
          ${2000.0}
          <span>/month</span>
        </Price>
        <Icon
          iconType={Icons.Favourite}
          color={(theme as any).gray}
          size={25}
        />
      </ItemFooter>
    </ListingItemContainer>
  );
};

export default ListingItem;
