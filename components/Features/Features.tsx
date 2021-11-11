import Feature from "components/Feature.styled";
import React from "react";
import { respondTo } from "src/utils/_respondTo";
import styled from "styled-components";

const FeaturesStyled = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  overflow-x: auto;
  gap: 0.5rem;
  ${respondTo.laptopAndDesktop`
  flex-wrap: wrap;
  `}
`;
const Features = ({ features }: { features: string[] }) => {
  return (
    <FeaturesStyled>
      {features.map((f) => (
        <Feature key={f} feature={f} />
      ))}
    </FeaturesStyled>
  );
};

export default Features;
