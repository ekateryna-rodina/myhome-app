import "@testing-library/jest-dom/extend-expect";
import { render, screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
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
const DEFAULT_CHECKED_BEDROOM = 2;
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
      <MultichoiceDropdown type={"bed"} />
    </ThemeProvider>
  );
  const { getByText } = within(screen.getByTestId("selectedTestId"));
  expect(getByText(DEFAULT_CHECKED_BEDROOM)).toBeInTheDocument();
});
test("options are shown on caret's click", async () => {
  render(
    <ThemeProvider theme={theme}>
      <MultichoiceDropdown type={"bath"} />
    </ThemeProvider>
  );
  const button = screen.getByTestId("caretTestId");
  expect(button).toBeInTheDocument();

  userEvent.click(button);
  expect(screen.getByTestId("multichoiceOptionsTestId")).toHaveStyle(
    "visibility: visible"
  );
  userEvent.click(button);
  expect(screen.getByTestId("multichoiceOptionsTestId")).toHaveStyle(
    "visibility: hidden"
  );
});
test("dropdown options shows checkboxes and labels with default being selected", async () => {
  render(
    <ThemeProvider theme={theme}>
      <MultichoiceDropdown type={"bed"} />
    </ThemeProvider>
  );

  const button = screen.getByTestId("caretTestId");
  userEvent.click(button);
  const { getAllByRole } = within(screen.getByTestId("multichoiceListTestId"));
  const options = getAllByRole("listitem");
  expect(options.length).toEqual(4);

  DEFAULT_ROOMS_NUMBER_LIST.forEach((number) => {
    const checkbox = screen.getByTestId(number);
    expect(checkbox).toBeInTheDocument();
    if (number == DEFAULT_CHECKED_BEDROOM) {
      expect(checkbox).toBeChecked();
    } else {
      expect(checkbox).not.toBeChecked();
    }
  });
});
test("user's check or click on a label both update the selected field", async () => {
  render(
    <ThemeProvider theme={theme}>
      <MultichoiceDropdown type={"bed"} />
    </ThemeProvider>
  );
  const button = screen.getByTestId("caretTestId");
  userEvent.click(button);
  const selected = screen.getByTestId("selectedTestId");
  const { getByText } = within(selected);
  const selectOptions = [1, 2, 3];
  selectOptions.forEach((number) => {
    const label = screen.getByText(number);
    const checkbox = screen.getByTestId(number);

    userEvent.click(checkbox);
    userEvent.click(label);
    userEvent.click(checkbox);

    if (number == DEFAULT_CHECKED_BEDROOM) {
      expect(checkbox).not.toBeChecked();
    } else {
      expect(checkbox).toBeChecked();
    }
  });
  expect(getByText("1, 3")).toBeInTheDocument();
});
