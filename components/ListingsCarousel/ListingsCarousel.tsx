import { Carousel } from "components/Carousel";
import Icon from "components/Icon.style";
import React, { MouseEventHandler } from "react";
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
  opacity: ${({ isDisabled }) => (isDisabled ? "0" : "1")};
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
const ListingsCarouselWrapped: React.FC<{
  onClickLeftHandler: MouseEventHandler<HTMLButtonElement>;
  onClickRightHandler: MouseEventHandler<HTMLButtonElement>;
  disabled: string | null;
}> = ({ onClickLeftHandler, onClickRightHandler, disabled, children }) => {
  const theme = useTheme();
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
            iconType={Icons.ChevronLeft}
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
            iconType={Icons.ChevronRight}
            color={
              disabled == "right" ? (theme as any)?.gray : (theme as any)?.dark
            }
          />
        </Button>
      </ControlsContainer>
    </Container>
  );
};

const ListingsCarousel = Carousel(ListingsCarouselWrapped, {
  current: 0,
  setCurrent: () => {},
  total: 0,
});
export default ListingsCarousel;
