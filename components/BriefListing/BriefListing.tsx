import { Images } from "components/Images";
import RoomsInfo from "components/RoomsInfo.style";
import React from "react";
import { Listing } from "src/utils/types";
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
  height: 90%;
  grid-template-columns: 30% 1fr;
  grid-gap: 3em;
`;

const Price = styled.span`
  transform: translateX(var(--init-transform));
  animation: ${info} 0.2s ease-in-out forwards 0.5s;
  font-size: 2.5rem;
  color: ${(props) => props.theme.dark};
  padding-left: 1rem;
`;
const Features = styled.div`
  transform: translateX(var(--init-transform));
  animation: ${info} 0.2s ease-in-out forwards 0.9s;
`;
const Info = styled.div`
  display: grid;
  height: 80%;
  margin: auto;
  grid-template-rows: 1fr 1fr 2fr 3fr 1fr;

  & > div {
    padding: 0 1em;
  }
`;

const Description = styled.div`
  transform: translateX(var(--init-transform));
  animation: ${info} 0.2s ease-in-out forwards 1.1s;
  font-size: 1.2rem;
  color: ${(props) => props.theme.dark};
`;
const EnterButton = styled.button`
  width: max-content;
  background: ${(props) => props.theme.secondary};
  margin: auto 0 0 1rem;
  padding: 0.5rem;
  cursor: pointer;
  color: white;
  font-size: 1.1rem;
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
`;
const ButtonLabel = styled.span`
  color: ${(props) => props.theme.white};
  text-transform: uppercase;
  font-size: 1.2rem;
  font-weight: 600;
  letter-spacing: 0.1rem;
`;
const Address = styled.span`
  transform: translateX(var(--init-transform));
  animation: ${info} 0.2s ease-in-out forwards 0.7s;
  font-size: 1.5rem;
  color: ${(props) => props.theme.secondary};
  padding-left: 1rem;
  margin-top: -2rem;
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
        <Price>{"$3400.00"}</Price>
        <Address>{`${city}, ${country}`}</Address>
        <Features>
          <RoomsInfo {...{ beds, baths }} />
        </Features>

        <Description>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
          labore similique modi nobis eaque voluptatum omnis temporibus, quas
          quasi recusandae delectus at commodi optio quis mollitia libero totam
          quibusdam sapiente! Praesentium error, mollitia blanditiis alias
          perferendis repellat debitis, illum, aliquam quam doloremque velit
          iste ad. Iste eaque in officia natus? Adipisci rem assumenda in quae
          ea vero odit labore nihil molestiae, quo, dolorum et similique?
          Accusantium neque ducimus alias doloribus aperiam soluta optio sequi
          harum, molestias assumenda, expedita dicta sit eligendi. Possimus
          officia excepturi expedita beatae qui dolorum nisi sequi labore
          cupiditate sint voluptatibus, consectetur accusantium natus ratione
          reiciendis a?
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
