import { useCallback, useMemo, useState } from "react";
import styled from "styled-components";
import SliderRange from "./SliderRange";

const Container = styled.div`
  width: 175px;
  height: 3.2rem;
  position: relative;
`;
const MinMaxLabels = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
`;
const Label = styled.span`
  font-weight: bold;
  color: ${(props) => props.theme.dark};
`;
export const Slider = () => {
  let min = 0;
  let max = 200;
  const barsData = useMemo(
    () =>
      new Array(150)
        .fill(null)
        .map((v, i) => [i + 25, Math.floor(Math.random() * 100)]),
    []
  );

  const [minValue, setMinValue] = useState(min);
  const [maxValue, setMaxValue] = useState(max);
  const sliderMinValueChanged = useCallback((val) => setMinValue(val), []);
  const sliderMaxValueChanged = useCallback((val) => setMaxValue(val), []);

  const sliderProps = useMemo(
    () => ({
      min,
      max,
      minValue: minValue,
      maxValue: maxValue,
      label: "This is a price range slider",
      onMinChange: (e: number) => sliderMinValueChanged(e),
      onMaxChange: (e: number) => sliderMaxValueChanged(e),
      withBars: null,
    }),
    //eslint-disable-next-line
    [minValue, maxValue]
  );
  return (
    <Container>
      <SliderRange {...sliderProps}></SliderRange>
      <MinMaxLabels>
        <Label>${minValue}</Label>
        <Label>${maxValue}</Label>
      </MinMaxLabels>
    </Container>
  );
};

export default Slider;
