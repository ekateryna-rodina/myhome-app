import React, { useCallback, useEffect, useRef } from "react";
import styled from "styled-components";
import Bars from "./SliderBars";

const Container = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  bottom: 70%;
`;
const StyledThumbLeft = styled.input<{ zIndex: string }>`
  -webkit-appearance: none;
  -webkit-tap-highlight-color: transparent;
  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    -webkit-tap-highlight-color: red;
  }
  pointer-events: none;
  position: absolute;
  height: 0;
  width: 175px;
  outline: none;
  z-index: ${(props) => props.zIndex};

  ::-webkit-slider-thumb {
    background-color: #f1f5f7;
    border: none;
    border-radius: 50%;
    box-shadow: 0 0 1px 1px #ced4da;
    cursor: pointer;
    height: 10px;
    width: 10px;
    margin-top: 1px;
    pointer-events: all;
    position: relative;
  }

  ::-moz-range-thumb {
    background-color: #f1f5f7;
    border: none;
    border-radius: 50%;
    box-shadow: 0 0 1px 1px #ced4da;
    cursor: pointer;
    height: 10px;
    width: 10px;
    margin-top: 1px;
    pointer-events: all;
    position: relative;
  }
`;
const StyledThumbRight = styled.input`
  -webkit-appearance: none;
  -webkit-tap-highlight-color: transparent;
  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    -webkit-tap-highlight-color: red;
  }
  pointer-events: none;
  position: absolute;
  height: 0;
  width: 175px;
  outline: none;
  z-index: 4;

  ::-webkit-slider-thumb {
    background-color: #f1f5f7;
    border: none;
    border-radius: 50%;
    box-shadow: 0 0 1px 1px #ced4da;
    cursor: pointer;
    height: 10px;
    width: 10px;
    margin-top: 1px;
    pointer-events: all;
    position: relative;
  }

  ::-moz-range-thumb {
    background-color: #f1f5f7;
    border: none;
    border-radius: 50%;
    box-shadow: 0 0 1px 1px #ced4da;
    cursor: pointer;
    height: 10px;
    width: 10px;
    margin-top: 1px;
    pointer-events: all;
    position: relative;
  }
`;
const StyledSlider = styled.div`
  position: relative;
  width: 175px;
`;
const Track = styled.div`
  border-radius: 3px;
  height: 3px;
  position: absolute;
  background-color: yellow;
  width: 100%;
  z-index: 1;
`;
const Range = styled.div`
  border-radius: 3px;
  height: 3px;
  position: absolute;
  background-color: green;
  z-index: 2;
`;
type SliderRangeProps = {
  min: number;
  max: number;
  minValue: number;
  maxValue: number;
  onMinChange: Function;
  onMaxChange: Function;
  withBars: number[][] | null;
};
const SliderRange = (props: SliderRangeProps) => {
  const { min, max, minValue, maxValue, onMinChange, onMaxChange, withBars } =
    props;
  const minValRef = useRef(min);
  const maxValRef = useRef(max);
  const rangeRef = useRef(null);

  // Convert to percentage
  const getPercent = useCallback(
    (value) => {
      return Math.round(((value - min) / (max - min)) * 100);
    },
    [min, max]
  );

  useEffect(() => {
    const minPercent = getPercent(minValue);

    const maxPercent = getPercent(maxValRef.current);

    if (rangeRef.current) {
      (rangeRef.current as any).style.left = `${minPercent + 1}%`;
      (rangeRef.current as any).style.width = `${maxPercent - minPercent}%`;
    }
  }, [minValue, getPercent]);

  useEffect(() => {
    const minPercent = getPercent(minValRef.current);
    const maxPercent = getPercent(maxValue);

    if (rangeRef.current) {
      (rangeRef.current as any).style.width = `${maxPercent - minPercent}%`;
    }
  }, [maxValue, getPercent]);
  return (
    <Container>
      <StyledThumbLeft
        type="range"
        min={min}
        max={max}
        value={minValue}
        zIndex={minValue > max - 100 ? "5" : "3"}
        onChange={(event) => {
          const value = Math.min(+event.target.value, maxValue - 1);
          onMinChange(value);
          minValRef.current = value;
        }}
      />
      <StyledThumbRight
        type="range"
        min={min}
        max={max}
        value={maxValue}
        onChange={(event) => {
          const value = Math.max(+event.target.value, minValue + 1);
          onMaxChange(value);
          maxValRef.current = value;
        }}
      />
      <StyledSlider>
        {withBars?.length && (
          <Bars
            min={min}
            max={max}
            data={withBars}
            activeMin={minValue}
            activeMax={maxValue}
          />
        )}
        <Track />
        <Range ref={rangeRef} />
      </StyledSlider>
    </Container>
  );
};

export default SliderRange;
