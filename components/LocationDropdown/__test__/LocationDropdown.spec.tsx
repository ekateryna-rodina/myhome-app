import "@testing-library/jest-dom/extend-expect";
import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import FilterProviderWrapper from "components/FilterProviderWrapper/FilterProviderWrapper";
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
const locations = [
  { id: 1, city: "Philadelphia", country: "USA", zip: "" },
  { id: 1, city: "Boston", country: "USA", zip: "" },
  { id: 1, city: "New York", country: "USA", zip: "" },
];
const setup = () => {
  render(
    <FilterProviderWrapper locations={locations}>
      <LocationDropdown />
    </FilterProviderWrapper>
  );
  const input = screen.getByTestId("locationInputTestId");
  return input;
};
test("location dropdown is rendered", async () => {
  render(<LocationDropdown />);
  expect(screen.getByTestId("locationDropdownTestId")).toBeInTheDocument();
});
test("options are hidden on initial render", async () => {
  render(<LocationDropdown />);
  expect(screen.getByTestId("locationsOptionsTestId")).toBeInTheDocument();
  expect(screen.getByTestId("locationsOptionsTestId")).toHaveStyle(
    "opacity: 0"
  );
});
test("options are shown when user enters keyword", async () => {
  const input = setup();
  fireEvent.change(input, { target: { value: "bo" } });
  expect(screen.getAllByTestId("locationsOptionsTestId")).toHaveStyle(
    "opacity: 1"
  );
});
