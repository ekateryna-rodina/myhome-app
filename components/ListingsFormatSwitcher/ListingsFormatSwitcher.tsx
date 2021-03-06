import { AppContext } from "components/AppContextWrapper/AppContextWrapper";
import React, { useContext } from "react";
import { ListingsFormat } from "src/utils/enums";
import styled from "styled-components";

const Container = styled.fieldset`
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 0;
  padding: 0;
  overflow: hidden;
  border: ${(props) => `.5px solid ${props.theme.light}`};
  height: 2.5rem;
  border-radius: 0.5rem;
  background-color: ${(props) => props.theme.white};
`;
const Radio = styled.input`
  cursor: pointer;
  position: relative;
  z-index: 5;
  -webkit-appearance: none;
  appearance: none;
  outline: none;
  &:focus-visible {
    outline: thin dotted;
    outline-color: ${(props) => props.theme.primary};
  }
`;
const GridRadio = styled(Radio)<{ checked: boolean }>`
  margin: 0 0 0 .25rem;
  background: ${({
    checked,
  }) => `url('data:image/svg+xml;utf8,<svg enable-background="new 0 0 32 32" version="1.1" viewBox="-2.5 -1 36 36" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <g>
      <g id="Grid"/>
      <g id="Meter"/>
      <g id="Email"/>
      <g id="Email_Notification"/>
      <g id="Inbox"/>
      <g id="Inbox_Notification"/>
      <g id="List"/>
          <g id="Grid_1_">
          <path d="M15.1,15.1H5V7c0-1.1,0.9-2,2-2h8.1V15.1z" fill="none" stroke="%23${
            checked ? "fff" : "063970"
          }" stroke-miterlimit="10"/>
          <path d="M27,15.1H16.9V5H25c1.1,0,2,0.9,2,2V15.1z" fill="none" stroke="%23${
            checked ? "fff" : "063970"
          }" stroke-miterlimit="10"/>
          <path d="M25,27h-8.1V16.9H27V25C27,26.1,26.1,27,25,27z" fill="none" stroke="%23${
            checked ? "fff" : "063970"
          }" stroke-miterlimit="10"/>
          <path d="M15.1,27H7c-1.1,0-2-0.9-2-2v-8.1h10.1V27z" fill="none" stroke="%23${
            checked ? "fff" : "063970"
          }" stroke-miterlimit="10"/>
          </g>
      <g id="Add"/>
      <g id="Minus"/>
      <g id="Basket"/>
  </g>
  </svg>');`}
  background-position: center;
  background-repeat: no-repeat;
  background-size: 2rem;
  width: 2.5rem;
  height: 2rem;
  transition: all .5s;
`;
const AutoRadio = styled(Radio)<{ checked: boolean }>`
  margin: 0;
  background: ${({
    checked,
  }) => `url('data:image/svg+xml;utf8,<svg fill="none" height="24" viewBox="0.5 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
  <path d="M19.6287 11.75L11.7778 11.7499" stroke="%23${
    checked ? "fff" : "063970"
  }" stroke-linecap="round" stroke-width="0.8"/>
  <path d="M4.36195 11.75L12.2129 11.7499" stroke="%23${
    checked ? "fff" : "063970"
  }" stroke-linecap="round" stroke-width="0.8"/>
  <path d="M15.8318 7.36897L20.2128 11.75L15.8318 16.1309" stroke="%23${
    checked ? "fff" : "063970"
  }" stroke-linecap="round" stroke-width="0.8"/>
  <path d="M8.15881 7.36897L3.77783 11.75L8.15881 16.1309" stroke="%23${
    checked ? "fff" : "063970"
  }" stroke-linecap="round" stroke-width="0.8"/></svg>');`}
  background-position: center;
  background-repeat: no-repeat;
  background-size: 2rem;
  width: 2.5rem;
  height: 2rem;
  transition: all .5s;
`;
const MapRadio = styled(Radio)<{ checked: boolean }>`
  margin: 0 .25rem 0 0;
  background: ${({
    checked,
  }) => `url('data:image/svg+xml;utf8,<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
  viewBox="-7 -3 120 120" style="enable-background:new 0 0 99.313 99.313;" xml:space="preserve">
<g fill="%23${checked ? "fff" : "063970"}">
 <path d="M69.693,38.046c0.005,0,0.011,0,0.016,0c2.087,0,4.049-0.812,5.527-2.286
     c1.482-1.479,2.3-3.445,2.302-5.539c0.004-4.323-3.508-7.844-7.828-7.85c-0.002,0-0.005,0-0.007,0c-4.319,0-7.835,3.508-7.84,7.823
     c-0.004,2.096,0.811,4.068,2.292,5.552C65.634,37.229,67.602,38.046,69.693,38.046z M69.702,25.34c0.002,0,0.004,0,0.005,0
     c2.684,0.003,4.864,2.192,4.862,4.878c-0.001,1.3-0.509,2.521-1.429,3.439c-0.918,0.916-2.137,1.419-3.435,1.419
     c-0.003,0-0.007,0-0.01,0c-1.3,0-2.521-0.507-3.44-1.427c-0.92-0.922-1.426-2.147-1.424-3.451
     C64.835,27.519,67.019,25.34,69.702,25.34z"/>
 <path d="M95.31,84.301L80.282,49.146l5.12-8.19c0.055-0.088,0.1-0.181,0.133-0.276
     c1.751-2.905,2.676-6.196,2.676-9.538c0.008-4.949-1.908-9.603-5.396-13.104c-3.489-3.503-8.137-5.437-13.088-5.444
     c-0.008,0-0.015,0-0.022,0c-10.2,0-18.51,8.292-18.526,18.496c0,3.393,0.928,6.703,2.687,9.59c0.028,0.071,0.062,0.141,0.103,0.208
     l2.779,4.667H21.197c-0.595,0-1.132,0.354-1.365,0.901L3.656,84.301c-0.195,0.458-0.148,0.985,0.126,1.401
     c0.275,0.416,0.74,0.667,1.239,0.667h88.927c0.499,0,0.964-0.25,1.239-0.667C95.459,85.286,95.505,84.759,95.31,84.301z
      M56.524,39.338c-1.556-2.468-2.378-5.32-2.378-8.245c0.015-8.567,6.991-15.529,15.557-15.529c0.007,0,0.013,0,0.02,0
     c4.156,0.006,8.06,1.629,10.989,4.57c2.928,2.94,4.537,6.848,4.53,11.004c0,0.001,0,0.001,0,0.002c0,2.891-0.827,5.741-2.393,8.241
     c-0.054,0.084-0.097,0.173-0.13,0.265l-13.335,21.33l-8.768-14.724c-0.011-0.018-0.02-0.036-0.032-0.053l-3.928-6.596
     C56.622,39.511,56.578,39.422,56.524,39.338z M22.173,48.524h3.383c0.212,4.235,3.843,5.83,6.52,6.998
     c1.405,0.613,2.858,1.246,3.314,2.024c0.72,1.228,0.255,2.083-1.155,4.041c-1.289,1.789-2.894,4.015-1.796,6.934
     c1.702,4.526,10.53,5.742,20.208,6.678c1.757,0.169,3.273,0.316,4.225,0.478c7.474,1.269,9.984,5.506,10.802,7.726H7.267
     L22.173,48.524z M70.791,83.4c-0.676-2.552-3.356-8.944-13.423-10.652c-1.056-0.179-2.621-0.331-4.435-0.506
     c-5.363-0.519-16.523-1.598-17.715-4.768c-0.512-1.36,0.208-2.464,1.425-4.152c1.298-1.8,3.074-4.266,1.308-7.279
     c-0.944-1.611-2.848-2.441-4.688-3.244c-2.793-1.217-4.529-2.153-4.72-4.276h29.97l9.565,16.062c0.265,0.445,0.742,0.72,1.26,0.725
     c0.005,0,0.011,0,0.016,0c0.512,0,0.987-0.263,1.259-0.697l7.752-12.4L91.697,83.4H70.791z"/>
</g>
</svg>');`}
  background-position: center;
  background-repeat: no-repeat;
  background-size: 2rem;
  width: 2.5rem;
  height: 2rem;
  transition: all .5s;
`;
const switcherStyles: Record<
  ListingsFormat,
  { left: number; transform: number; margin: number }
> = {
  [ListingsFormat.Grid]: {
    left: 0,
    transform: 50,
    margin: -0.45,
  },
  [ListingsFormat.Auto]: {
    left: 50,
    transform: -50,
    margin: -0.02,
  },
  [ListingsFormat.Map]: {
    left: 100,
    transform: -100,
    margin: -0.5,
  },
};
const Switcher = styled.div<{ selected: ListingsFormat }>`
  --x: ${({ selected }) => `${switcherStyles[selected].transform}%`};
  position: absolute;
  z-index: 2;
  width: 2rem;
  height: 2rem;
  top: 50%;
  left: ${({ selected }) => `${switcherStyles[selected].left}%`};
  transform: ${({ selected }) =>
    `translate(calc(var(--x) + ${switcherStyles[selected].margin}rem), -50%);`}
  border-radius: 0.5rem;
  background-color: ${(props) => props.theme.dark};
  transition: all .5s;
`;

const ListingsFormatSwitcher = () => {
  //   const [format, setFormat] = useState<ListingsFormat>(ListingsFormat.Auto);
  const { listingsFormat, handleListingsFormat } = useContext(AppContext);
  const onChangeHandler = (format: ListingsFormat | number) => {
    handleListingsFormat(format);
  };
  return (
    <Container>
      <GridRadio
        type="radio"
        name="listings-format"
        value={ListingsFormat.Grid}
        title="Grid only"
        onChange={onChangeHandler.bind(null, ListingsFormat.Grid)}
        checked={listingsFormat === ListingsFormat.Grid}
      />
      <AutoRadio
        type="radio"
        name="listings-format"
        value={ListingsFormat.Auto}
        onChange={onChangeHandler.bind(null, ListingsFormat.Auto)}
        checked={listingsFormat === ListingsFormat.Auto}
      />
      <MapRadio
        type="radio"
        name="listings-format"
        value={ListingsFormat.Map}
        title="Map only"
        onChange={onChangeHandler.bind(null, ListingsFormat.Map)}
        checked={listingsFormat === ListingsFormat.Map}
      />
      <Switcher selected={listingsFormat} />
    </Container>
  );
};

export default ListingsFormatSwitcher;
