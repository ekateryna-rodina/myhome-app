import { Carousel } from "components/Carousel";
import { DotNavigation } from "components/DotNavigation";
import Icon from "components/Icon.style";
import React, { MouseEventHandler } from "react";
import { Icons } from "src/utils/enums";
import styled, { useTheme } from "styled-components";
const Container = styled.div`
  height: 100%;
  position: relative;
`;
const Button = styled.button<{ isDisabled: boolean }>`
  pointer-events: ${({ isDisabled }) => (isDisabled ? "none" : "auto")};
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.5);
  align-items: center;
  display: flex;
  flex-direction: row;
  justify-content: center;
  z-index: 100;
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
  position: absolute;
  top: 50%;
  left: 1rem;
  right: 1rem;
  transform: translateY(-50%);
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  & ${Button}:nth-child(1) {
    margin-right: 2rem;
  }
`;
type ImagesCarouselWrappedProps = {
  onClickLeftHandler: MouseEventHandler<HTMLButtonElement>;
  onClickRightHandler: MouseEventHandler<HTMLButtonElement>;
  disabled: string | null;
  total: number;
  current: number;
};
const ImagesCarouselWrapped: React.FC<ImagesCarouselWrappedProps> = ({
  onClickLeftHandler,
  onClickRightHandler,
  disabled,
  children,
}) => {
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
              disabled == "left" ? (theme as any)?.gray : (theme as any)?.white
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
              disabled == "right" ? (theme as any)?.gray : (theme as any)?.white
            }
          />
        </Button>
      </ControlsContainer>
      <DotNavigation total={3} current={2} />
    </Container>
  );
};

const ImagesCarousel = Carousel(ImagesCarouselWrapped, {
  current: 0,
  setCurrent: () => {},
  total: 0,
});
export default ImagesCarousel;
