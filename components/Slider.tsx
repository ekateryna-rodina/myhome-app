import { useCallback, useMemo, useState } from "react";
import styled from "styled-components";
import { Unit } from "../utils/enums";
import SliderRange from "./SliderRange";

const Container = styled.div<{
  pushRight?: boolean;
}>`
  width: 95%;
  height: 3.2rem;
  position: relative;
`;
const MinMaxLabels = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: auto;
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
`;
const Label = styled.span`
  font-weight: bold;
  color: ${(props) => props.theme.dark};
  font-size: 0.7rem;
`;
interface SliderProps {
  min: number;
  max: number;
  unit: Unit;
  pushRight?: boolean;
}
export const Slider = (props: SliderProps) => {
  const { min, max, unit, pushRight } = props;
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
    <Container pushRight={pushRight}>
      <SliderRange {...sliderProps}></SliderRange>
      <MinMaxLabels>
        <Label>
          {unit === Unit.USD ? Unit.USD.toString() : ""}
          {minValue}
          {unit === Unit.USD ? "" : " " + Unit.SQFT.toString()}
        </Label>
        <Label>
          {unit === Unit.USD ? Unit.USD.toString() : ""}
          {maxValue}
          {unit === Unit.USD ? "" : " " + Unit.SQFT.toString()}
        </Label>
      </MinMaxLabels>
    </Container>
  );
};

export default Slider;
