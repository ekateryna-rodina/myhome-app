import React from "react";
import styled from "styled-components";
const Container = styled.div`
  height: 40px;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
`;
const StyledBar = styled.div<{
  height: string;
  isActive: boolean;
  left: string;
}>`
  height: ${(props) => `${props.height}%`};
  background: ${(props) => (props.isActive ? "orange" : "gray")};
  width: 1px;
  position: absolute;
  bottom: 0;
  border-radius: 1px;
  left: ${(props) => `${props.left}px`};
`;
interface BarProps {
  left: number;
  height: number;
  isActive: boolean;
}
interface BarsProps {
  min: number;
  max: number;
  data: number[][];
  activeMin: number;
  activeMax: number;
}
const Bar = React.memo(
  (props: BarProps) => {
    const { left, height, isActive } = props;
    return (
      <StyledBar
        left={left.toString()}
        height={height.toString()}
        isActive={isActive}
      />
    );
  },
  (prevProps, nextProps) => {
    if (prevProps.isActive === nextProps.isActive) {
      return true;
    }
    return false;
  }
);
Bar.displayName = "Bar";

const Bars = (props: BarsProps) => {
  const { min, max, data, activeMin, activeMax } = props;
  const values = data.map((b) => +b[1]);
  const highest = Math.max.apply(null, values);
  const getHeight = (value: number) => {
    const maxAvailableHeight = 95;
    if (!value) return 0;
    return (maxAvailableHeight * value) / highest;
  };
  const isActive = (value: number) => value > activeMin && value < activeMax;
  return (
    <Container>
      {data.map((b: number[], i: number) => (
        <Bar
          key={i.toString()}
          left={b[0]}
          height={getHeight(b[1])}
          isActive={isActive(b[0])}
        />
      ))}
    </Container>
  );
};

export default Bars;
