import React from "react";
import styled from "styled-components";

const Container = styled.div`
  position: absolute;
  bottom: 1rem;
  left: 50%;
  transform: translateX(-50%);
  z-index: 100;
`;

type DotNavigationProps = {
  total: number;
  current: number;
};
const DotNavigation = ({ total, current }: DotNavigationProps) => {
  return (
    <Container>
      {total}
      {current}
    </Container>
  );
};

export default DotNavigation;
