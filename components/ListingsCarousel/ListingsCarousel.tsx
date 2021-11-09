import React from "react";
import styled from "styled-components";

const Container = styled.div`
  height: 100%;
`;

const ListingsCarousel: React.FC<{
  setCurrent: Function;
  current: number;
  total: number;
}> = ({ children, setCurrent, current, total }) => {
  return <Container>{children}</Container>;
};

export default ListingsCarousel;
