import "@testing-library/jest-dom/extend-expect";
import { act, fireEvent, render, screen, within } from "@testing-library/react";
import React from "react";
import { ThemeProvider } from "styled-components";
import { theme } from "../../../pages/_app";
import { DEFAULT_ROOMS_NUMBER_LIST } from "../../../src/utils/constants";
import MultichoiceDropdown from "../MultichoiceDropdown";

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

test("multichoice dropdown is rendered", async () => {
  render(
    <ThemeProvider theme={theme}>
      <MultichoiceDropdown type={"bath"} />
    </ThemeProvider>
  );
  expect(screen.getByTestId("multichoiceDropdownTestId")).toBeInTheDocument();
});
test("selected shows a default number", async () => {
  render(
    <ThemeProvider theme={theme}>
      <MultichoiceDropdown type={"bath"} />
    </ThemeProvider>
  );
  const { getByText } = within(screen.getByTestId("selectedTestId"));
  expect(getByText(1)).toBeInTheDocument();
});
test("options are shown on caret click", async () => {
  render(
    <ThemeProvider theme={theme}>
      <MultichoiceDropdown type={"bath"} />
    </ThemeProvider>
  );
  const button = screen.getByTestId("caretTestId");
  expect(button).toBeInTheDocument();

  act(() => {
    fireEvent.click(button);
  });
  expect(screen.getByTestId("multichoiceOptionsTestId")).toHaveStyle(
    "visibility: visible"
  );
  act(() => {
    fireEvent.click(button);
  });
  expect(screen.getByTestId("multichoiceOptionsTestId")).toHaveStyle(
    "visibility: hidden"
  );
});
test("dropdown options shows few rows with default being selected", async () => {
  render(
    <ThemeProvider theme={theme}>
      <MultichoiceDropdown type={"bath"} />
    </ThemeProvider>
  );
  const options = screen.getByTestId("multichoiceListTestId");
  expect(options).toBeInTheDocument();
  expect(options.children.length).toEqual(DEFAULT_ROOMS_NUMBER_LIST.length);
});
// test("few options are displayed in selected after select in options", async () => {});
