import { theme } from "pages/_app";
import React from "react";
import { Icons } from "src/utils/enums";
import styled from "styled-components";
import Icon from "./Icon.style";

const Container = styled.div`
  display: grid;
  width: 5rem;
  height: 5.5rem;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  align-items: center;
`;
const Label = styled.span`
  text-transform: capitalize;
  font-size: 1rem;
  color: ${(props) => props.theme.dark};
`;
type RoomsInfoProps = {
  beds: number;
  baths: number;
};
const RoomsInfo = ({ beds, baths }: RoomsInfoProps) => {
  return (
    <Container>
      <Icon iconType={Icons.Bed} color={(theme as any)?.dark} size={30} />
      <Label>{beds}</Label>
      <Icon iconType={Icons.Bath} color={(theme as any)?.dark} size={30} />
      <Label>{baths}</Label>
    </Container>
  );
};

export default RoomsInfo;
