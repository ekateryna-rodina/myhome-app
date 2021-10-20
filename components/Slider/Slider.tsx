import { AppContext } from "components/AppContextWrapper/AppContextWrapper";
import { SliderRange } from "components/SliderRange";
import { useCallback, useContext, useEffect, useMemo, useState } from "react";
import useDebounce from "src/utils/hooks/useDebounce";
import styled from "styled-components";
import { Unit } from "../../src/utils/enums";

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
  type: "price" | "size";
  min: number;
  max: number;
  unit: Unit;
  pushRight?: boolean;
}
const Slider = (props: SliderProps) => {
  const { type, min, max, unit, pushRight } = props;
  const [minValue, setMinValue] = useState(min);
  const [maxValue, setMaxValue] = useState(max);
  const debouncedMinValue = useDebounce<number>(minValue);
  const debouncedMaxValue = useDebounce<number>(maxValue);
  const { handleFilter, filter, handleProperties } = useContext(AppContext);
  const sliderMinValueChanged = useCallback(
    (val: number) => setMinValue(val),
    []
  );
  const sliderMaxValueChanged = useCallback((val) => setMaxValue(val), []);
  useEffect(() => {
    if (!filter) return;
    const typeRange =
      type === "price" ? ("priceRange" as const) : ("sizeRange" as const);
    const oldMax = (filter?.[typeRange] && filter?.[typeRange]![1]) ?? maxValue;
    const newRange = [debouncedMinValue, oldMax];
    handleFilter({ ...filter, [typeRange]: newRange });
    // eslint-disable-next-line
  }, [debouncedMinValue]);
  useEffect(() => {
    if (!filter) return;
    const typeRange =
      type === "price" ? ("priceRange" as const) : ("sizeRange" as const);
    const oldMin = (filter?.[typeRange] && filter?.[typeRange]![0]) ?? minValue;
    const newRange = [oldMin, debouncedMaxValue];
    handleFilter({ ...filter, [typeRange]: newRange });
    // eslint-disable-next-line
  }, [debouncedMaxValue]);

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
