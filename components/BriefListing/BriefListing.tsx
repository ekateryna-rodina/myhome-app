import { Images } from "components/Images";
import RoomsInfo from "components/RoomsInfo.style";
import React from "react";
import { Listing } from "src/utils/types";
import { respondTo } from "src/utils/_respondTo";
import styled, { keyframes } from "styled-components";

const info = keyframes`
from{
  transform: translateX(-150%);
}
to{
  transform: translateX(0);
}
`;
const opacity = keyframes`
from{
  opacity: 0;
}
to{
  opacity: 1;
}
`;
const Grid = styled.div`
  display: grid;
  width: 100%;
  height: 80vh;
  grid-template-columns: 1fr;
  grid-template-rows: 0.65fr 0.35fr;
  ${respondTo.laptopAndDesktop`
  grid-template-columns: 30% 1fr;
  grid-template-rows: 1fr;
  grid-gap: 3em;
  `}
`;

const Price = styled.span`
  transform: translateX(var(--init-transform));
  animation: ${info} 0.2s ease-in-out forwards 0.7s;
  font-size: 1.1rem;
  color: ${(props) => props.theme.dark};
  ${respondTo.laptopAndDesktop`
  margin: -2rem 0 0 1rem;
  `}
`;
const Address = styled.span`
  transform: translateX(var(--init-transform));
  animation: ${info} 0.2s ease-in-out forwards 0.5s;
  font-size: 0.8rem;
  color: ${(props) => props.theme.secondary};
  margin-top: 2px;
  ${respondTo.laptopAndDesktop`
    padding-left: 1rem;
  `}
`;
const Features = styled.div`
  transform: translateX(var(--init-transform));
  animation: ${info} 0.2s ease-in-out forwards 0.9s;
  overflow-x: auto;
  ${respondTo.laptopAndDesktop`
  margin-top: -1rem;
  `}
`;
const Info = styled.div`
  display: grid;
  height: 90%;
  margin: auto;
  order: 1;
  grid-template-columns: 0.3fr 0.7fr;
  align-items: start;
  ${respondTo.laptopAndDesktop`
    height: 80%;
    order: 0;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr 2fr 3fr 1fr;
    & > div {
      padding: 0 1em;
    }
  `}
`;

const Description = styled.div`
  transform: translateX(var(--init-transform));
  animation: ${info} 0.2s ease-in-out forwards 1.1s;
  font-size: 0.8rem;
  color: ${(props) => props.theme.dark};
  background: #fff;
`;
const EnterButton = styled.button`
  width: max-content;
  background: ${(props) => props.theme.secondary};
  padding: 0.5rem;
  cursor: pointer;
  color: white;
  cursor: pointer;
  box-shadow: 0 3px 15px rgba(0, 0, 0, 0.3);
  transition: all 0.5s;
  border-radius: 0.2rem;
  border: none;
  opacity: 0;
  animation: ${opacity} 0.5s ease-in-out forwards 1.3s;
  :hover,
  :focus {
    background: ${(props) => props.theme.lightenSecondary};
    border: none;
    outline: 0;
  }
  ${respondTo.laptopAndDesktop`
  margin: auto 0 0 1rem;
  `}
`;
const ButtonLabel = styled.span`
  color: ${(props) => props.theme.white};
  text-transform: uppercase;
  font-size: 0.6rem;
  font-weight: 600;
  letter-spacing: 0.1rem;
`;

const BriefListing: React.FC<{ data: Listing }> = ({
  data: {
    id,
    photo,
    beds,
    baths,
    location: { country, city },
  },
}) => {
  return (
    <Grid>
      <Info>
        <Address>{`${city}, ${country}`}</Address>
        <Price>{"$3400.00"}</Price>
        <Features>
          <RoomsInfo {...{ beds, baths }} />
        </Features>

        <Description>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
          labore similique modi nobis eaque voluptatum omnis temporibus, quas
          quasi recusandae delectus at commodi optio quis mollitia libero totam
          quibusdam sapiente!
        </Description>
        <EnterButton>
          <ButtonLabel>view Details</ButtonLabel>
        </EnterButton>
      </Info>
      <Images images={[photo, photo, photo, photo]} />
    </Grid>
  );
};

export default BriefListing;
