import React from "react";
import styled from "styled-components";

const Container = styled.div<{ total: number }>`
  --dot-size: 0.5rem;
  position: absolute;
  width: ${({ total }) => `calc(${total} * var(--dot-size) + 3rem)`};
  bottom: 1rem;
  left: 50%;
  transform: translateX(-50%);
  z-index: 100;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
const DotStyled = styled.div<{ isActive: boolean }>`
  position: relative;
  width: var(--dot-size);
  height: var(--dot-size);
  border-radius: 50%;
  transition: background 0.2s linear;
  background: ${(props) =>
    props.isActive ? props.theme.secondary : props.theme.dark};
`;
const ActiveOverlay = styled.div<{ isActive: boolean }>`
  position: absolute;
  top: -0.1rem;
  left: -0.1rem;
  width: 0.7rem;
  height: 0.7rem;
  background: #fff;
  border-radius: 50%;
  transition: visibility 0.2s linear;
  visibility: ${(props) => (props.isActive ? "visible" : "hidden")};
  opacity: 0.2;
`;
type DotNavigationProps = {
  total: number;
  current: number;
};
const Dot = ({ isActive }: any) => {
  return (
    <>
      <DotStyled isActive={isActive}>
        <ActiveOverlay isActive={isActive} />
      </DotStyled>
    </>
  );
};

const DotNavigation = ({ total, current }: DotNavigationProps) => {
  return (
    <Container total={total}>
      {Array.from(Array(total).keys()).map((dot) => (
        <Dot key={dot} dot={dot} isActive={current == dot} />
      ))}
    </Container>
  );
};

export default DotNavigation;
