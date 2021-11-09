import Icon from "components/Icon.style";
import React, { useEffect, useState } from "react";
import { Icons } from "src/utils/enums";
import styled, { useTheme } from "styled-components";

const Container = styled.div`
  height: 100%;
`;
const Button = styled.button<{ isDisabled: boolean }>`
  pointer-events: ${({ isDisabled }) => (isDisabled ? "none" : "auto")};
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 50%;
  background: #fff;
  align-items: center;
  display: flex;
  flex-direction: row;
  justify-content: center;
  border: ${(props) =>
    `1px solid ${props.isDisabled ? props.theme.gray : props.theme.dark}`};
  color: ${(props) => props.theme.dark};
  transition: background 0.2s linear;
  &:hover,
  &:focus-visible {
    border: ${(props) => `2px solid ${props.theme.secondary}`};
    outline: none;
  }
`;
const ControlsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  & ${Button}:nth-child(1) {
    margin-right: 2rem;
  }
`;
const ListingsCarousel: React.FC<{
  setCurrent: Function;
  current: number;
  total: number;
}> = ({ children, setCurrent, current, total }) => {
  const theme = useTheme();
  const [disabled, setDisabled] = useState<"left" | "right" | null>("left");
  useEffect(() => {
    console.log(current);
    if (current > 0 && current < total - 1) setDisabled(null);
    if (current <= 0) {
      setDisabled("left");
      return;
    }
    if (current >= total - 1) {
      setDisabled("right");
      return;
    }
  }, [current]);
  const onClickLeftHandler = () => {
    setCurrent(current - 1);
  };
  const onClickRightHandler = () => {
    setCurrent(current + 1);
  };
  return (
    <Container>
      {children}
      <ControlsContainer>
        <Button
          onClick={onClickLeftHandler}
          isDisabled={disabled == "left"}
          disabled={disabled == "left"}
        >
          <Icon
            iconType={Icons.ArrowLeft}
            color={
              disabled == "left" ? (theme as any)?.gray : (theme as any)?.dark
            }
          />
        </Button>
        <Button
          onClick={onClickRightHandler}
          isDisabled={disabled == "right"}
          disabled={disabled == "right"}
        >
          <Icon
            iconType={Icons.ArrowRight}
            color={
              disabled == "right" ? (theme as any)?.gray : (theme as any)?.dark
            }
          />
        </Button>
      </ControlsContainer>
    </Container>
  );
};

export default ListingsCarousel;
