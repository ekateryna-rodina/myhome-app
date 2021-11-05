import React, { useState } from "react";
import { ListingsFormat } from "src/utils/enums";
import styled from "styled-components";

const Container = styled.fieldset`
  --width: 7rem;
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 0;
  padding: 0;
  overflow: hidden;
  border: ${(props) => `2px solid ${props.theme.dark}`};
  width: var(--width);
  height: 2.3rem;
  border-radius: 0.5rem;
  background-color: ${(props) => props.theme.white};
`;
const Radio = styled.input`
  cursor: pointer;
  position: relative;
  z-index: 6;
  -webkit-appearance: none;
  appearance: none;
  background-position: center;
  background-repeat: no-repeat;
  background-size: 2rem;
`;
const GridRadio = styled(Radio)`
  margin: 0 0 0 1rem;
  background-image: url(assets/test.png);

  //   background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath d='m13.5 4.18c-.276 0-.5-.224-.5-.5v-1.68c0-.551-.449-1-1-1s-1 .449-1 1v1.68c0 .276-.224.5-.5.5s-.5-.223-.5-.5v-1.68c0-1.103.897-2 2-2s2 .897 2 2v1.68c0 .277-.224.5-.5.5z"/></g><g><pathd="m12 24c-1.93 0-3.5-1.57-3.5-3.5 0-.276.224-.5.5-.5s.5.224.5.5c0 1.378 1.122 2.5 2.5 2.5s2.5-1.122 2.5-2.5c0-.276.224-.5.5-.5s.5.224.5.5c0 1.93-1.57 3.5-3.5 3.5z"/></g><g><pathd="m20.5 21h-17c-.827 0-1.5-.673-1.5-1.5 0-.439.191-.854.525-1.14 1.576-1.332 2.475-3.27 2.475-5.322v-3.038c0-3.86 3.14-7 7-7 3.86 0 7 3.14 7 7v3.038c0 2.053.899 3.99 2.467 5.315.342.293.533.708.533 1.147 0 .827-.672 1.5-1.5 1.5zm-8.5-17c-3.309 0-6 2.691-6 6v3.038c0 2.348-1.028 4.563-2.821 6.079-.115.098-.179.237-.179.383 0 .276.224.5.5.5h17c.276 0 .5-.224.5-.5 0-.146-.064-.285-.175-.38-1.796-1.519-2.825-3.735-2.825-6.082v-3.038c0-3.309-2.691-6-6-6z'/%3E%3C/svg%3E");
`;
const AutoRadio = styled(Radio)`
  margin: 0;
`;
const MapRadio = styled(Radio)`
  margin: 0 1rem 0 0;
`;
const Switcher = styled.div`
  position: absolute;
  //   top: 0;
  //   left: 0;
  //   width: 5rem;
  //   height: 2rem;
  //   border-radius: 10%;
  //   background-color: ${(props) => props.theme.dark};
`;

const ListingsFormatSwitcher = () => {
  const [format, setFormat] = useState<ListingsFormat>(ListingsFormat.Auto);
  const onChangeHandler = (format: ListingsFormat | number) => {
    setFormat(format);
  };
  return (
    <Container>
      <GridRadio
        type="radio"
        name="listings-format"
        value={ListingsFormat.Grid}
        title="Grid only"
        onChange={onChangeHandler.bind(null, ListingsFormat.Grid)}
        checked={format === ListingsFormat.Grid}
      />
      <AutoRadio
        type="radio"
        name="listings-format"
        value={ListingsFormat.Auto}
        onChange={onChangeHandler.bind(null, ListingsFormat.Auto)}
        checked={format === ListingsFormat.Auto}
      />
      <MapRadio
        type="radio"
        name="listings-format"
        value={ListingsFormat.Map}
        title="Map only"
        onChange={onChangeHandler.bind(null, ListingsFormat.Map)}
        checked={format === ListingsFormat.Map}
      />
      <Switcher />
    </Container>
  );
};

export default ListingsFormatSwitcher;
