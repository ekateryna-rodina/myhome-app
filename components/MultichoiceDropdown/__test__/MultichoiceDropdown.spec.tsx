import "@testing-library/jest-dom/extend-expect";
import { cleanup, render, screen } from "@testing-library/react";
import React from "react";
import { ThemeProvider } from "styled-components";
import { theme } from "../../../pages/_app";
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
afterEach(cleanup);

test("multichoice dropdown is rendered", async () => {
  render(
    <ThemeProvider theme={theme}>
      <MultichoiceDropdown type={"bath"} />
    </ThemeProvider>
  );
  expect(screen.getByTestId("multichoiceDropdownTestId")).toBeInTheDocument();
});
