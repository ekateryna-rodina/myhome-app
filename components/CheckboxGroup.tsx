import React from "react";
import styled from "styled-components";
import Checkbox from "./Checkbox.style";

const Container = styled.div`
  margin-top: 1rem;
  width: 85%;
`;
const CheckWithLabelContainer = styled.div`
  margin: 0.5rem 0;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  height: 1.5rem;
  line-height: 1.5rem;
`;
const Label = styled.span`
  text-transform: capitalize;
  color: ${(props) => props.theme.gray};
  margin-left: 0.2rem;
`;
interface CheckboxGroupProps {
  onSelected: Function;
  data: string[];
}
const CheckboxGroup = (props: CheckboxGroupProps) => {
  const { onSelected, data } = props;
  return (
    <Container>
      {data.map((additional) => (
        <CheckWithLabelContainer key={additional}>
          <Checkbox />
          <Label>{additional}</Label>
        </CheckWithLabelContainer>
      ))}
    </Container>
  );
};

export default CheckboxGroup;
