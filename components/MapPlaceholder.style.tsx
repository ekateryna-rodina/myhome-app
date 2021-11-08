import React from "react";
import { Icons } from "src/utils/enums";
import styled, { css, keyframes, useTheme } from "styled-components";
import Icon from "./Icon.style";

const opacity = keyframes`
from{
  opacity: .3;
}
to{
  opacity: .2;
}
`;
const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const Placeholder = styled.div`
  position: relative;
  width: 10rem;
  height: 10rem;
  margin-right: 2rem;
`;
const ContainerColored = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  background: #fff;
  width: 10rem;
  height: 10rem;
`;
const Block = styled.div<{ color: string; loading: boolean }>`
  background: ${({ color }) => color};
  opacity: 0.3;
  filter: blur(2px);
  animation: ${({ loading }) =>
    loading
      ? css`
          ${opacity} 1s ease-out alternate infinite
        `
      : "none"};
`;
const IconContainer = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  z-index: 300;
`;
const ContainerBase = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
`;
const Base = styled.div`
  position: relative;
  overflow: hidden;
  width: 10rem;
  height: 10rem;
  top: 0;
  background-color: white;
  mix-blend-mode: hard-light;
  box-shadow: 0 0 0 4px rgba(255, 255, 255, 1);
`;
const Hole = styled.div`
  width: 8rem;
  height: 8rem;
  margin: auto;
  margin-top: 50%;
  transform: translateY(-50%);
  border-radius: 50%;
  background-color: gray;
  filter: blur(2px);
  box-shadow: 0 0 5px 7px rgba(0, 0, 0, 0.5);
`;

const MapPlaceholder = () => {
  const theme = useTheme() as any;
  const colors = [theme.white, theme.secondary, theme.dark, theme.primary];
  return (
    <Container>
      <Placeholder>
        <ContainerColored>
          {colors.map((color) => (
            <Block key={color} color={color} loading={false} />
          ))}
        </ContainerColored>
        <ContainerBase>
          <Base>
            <Hole />
          </Base>
          <IconContainer>
            <Icon
              iconType={Icons.Pin}
              color={(theme as any)?.light}
              size={50}
            />
          </IconContainer>
        </ContainerBase>
      </Placeholder>
    </Container>
  );
};

export default MapPlaceholder;
