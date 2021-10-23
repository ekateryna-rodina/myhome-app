import "@testing-library/jest-dom/extend-expect";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import React from "react";
import { ThemeProvider } from "styled-components";
import { theme } from "../../../pages/_app";
import PropertyForRadio from "../PropertyForRadio";

jest.mock("../../../assets/bed.svg", () => () => null);
jest.mock("../../../assets/bell.svg", () => () => null);
jest.mock("../../../assets/building.svg", () => () => null);
jest.mock("../../../assets/email.svg", () => () => null);
jest.mock("../../../assets/favourite.svg", () => () => null);
jest.mock("../../../assets/filter.svg", () => () => null);
jest.mock("../../../assets/house-design.svg", () => () => null);
jest.mock("../../../assets/house.svg", () => () => null);
jest.mock("../../../assets/land.svg", () => () => null);
jest.mock("../../../assets/loupe.svg", () => () => null);
jest.mock("../../../assets/office-building.svg", () => () => null);
jest.mock("../../../assets/toilet.svg", () => () => null);
jest.mock("@atlaskit/css-reset/dist/bundle.css", () => () => null);
test("container is rendered", async () => {
  render(
    <ThemeProvider theme={theme}>
      <PropertyForRadio />
    </ThemeProvider>
  );
  expect(screen.getByTestId("propertyForRadioTestId")).toBeInTheDocument();
});
test("options BUY and RENT are rendered", async () => {
  const options = ["Rent", "Buy"];
  render(
    <ThemeProvider theme={theme}>
      <PropertyForRadio />
    </ThemeProvider>
  );
  options.forEach((o) => {
    expect(screen.getByTestId(o)).toBeInTheDocument();
  });
  expect(screen.getByTestId("propertyForRadioTestId")).toBeInTheDocument();
});
test("rent is selected by default", async () => {
  render(
    <ThemeProvider theme={theme}>
      <PropertyForRadio />
    </ThemeProvider>
  );
  expect(screen.getByTestId("Rent")).toBeChecked();
  expect(screen.getByTestId("Buy")).not.toBeChecked();
});
test("radio switches properly", async () => {
  render(
    <ThemeProvider theme={theme}>
      <PropertyForRadio />
    </ThemeProvider>
  );
  const rentInput = screen.getByTestId("Rent");
  const buyInput = screen.getByTestId("Buy");
  userEvent.click(buyInput);
  expect(buyInput).toBeChecked();
  expect(rentInput).not.toBeChecked();

  userEvent.click(rentInput);
  expect(rentInput).toBeChecked();
  expect(buyInput).not.toBeChecked();
});
