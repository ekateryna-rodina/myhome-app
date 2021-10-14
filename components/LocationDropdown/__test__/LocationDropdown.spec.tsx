import "@testing-library/jest-dom/extend-expect";
import { cleanup, render, screen } from "@testing-library/react";
import React from "react";
import LocationDropdown from "../LocationDropdown";
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
test("location dropdown is rendered", async () => {
  render(<LocationDropdown />);
  expect(screen.getByTestId("locationDropdownTestId")).toBeInTheDocument();
});
test("options are shown after on input change", async () => {
  //   const { result } = renderHook(() => LocationDropdown());
  render(<LocationDropdown />);
  expect(screen.getByTestId("locationsOptionsTestId")).toBeInTheDocument();
  expect(screen.getByTestId("locationsOptionsTestId")).toHaveStyle(
    "opacity: 0"
  );
});
