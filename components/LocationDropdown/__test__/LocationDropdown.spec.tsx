import "@testing-library/jest-dom/extend-expect";
import {
  cleanup,
  fireEvent,
  render,
  screen,
  within,
} from "@testing-library/react";
import React from "react";
import { Location } from "../../../src/utils/types";
import { FilterProviderWrapper } from "../../AppContextWrapper";
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
const locations: Location[] = [
  { id: 1, city: "Philadelphia", country: "USA" },
  { id: 1, city: "Boston", country: "USA" },
  { id: 1, city: "New York", country: "USA" },
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
  expect(
    screen.getByTestId("locationsOptionsContainerTestId")
  ).toBeInTheDocument();
  expect(screen.getByTestId("locationsOptionsContainerTestId")).toHaveStyle(
    "opacity: 0"
  );
});
test("options are shown when user enters keyword which is present in initial set of location data", async () => {
  const input = setup();
  fireEvent.change(input, { target: { value: "bo" } });
  const locationsOptions = screen.getAllByTestId(
    "locationsOptionsContainerTestId"
  )[0];
  expect(locationsOptions).toHaveStyle("opacity: 1");
});

test("options are shown when user enters keyword which is present in initial set of location data", async () => {
  const input = setup();
  fireEvent.change(input, { target: { value: "notacity" } });
  const locationsOptions = screen.getAllByTestId(
    "locationsOptionsContainerTestId"
  )[0];
  expect(locationsOptions).toHaveStyle("opacity: 0");
});
test("options are not shown when input is empty", async () => {
  const input = setup();
  const locationsOptions = screen.getAllByTestId(
    "locationsOptionsContainerTestId"
  )[0];
  fireEvent.change(input, { target: { value: "bo" } });
  expect(locationsOptions).toHaveStyle("opacity: 1");
  fireEvent.change(input, { target: { value: "" } });
  expect(locationsOptions).toHaveStyle("opacity: 0");
});
test("filtered options are shown as city/country and are chosen correct", async () => {
  const input = setup();
  fireEvent.change(input, { target: { value: "bo" } });
  const filteredLocationsList = screen.getByTestId("locationsListTestId");
  const { getAllByRole } = within(filteredLocationsList);
  const listItems = getAllByRole("listitem");
  expect(listItems.length).toEqual(1);

  listItems.forEach((item) => {
    const { queryByText } = within(item);
    expect(queryByText("Boston, USA")).toBeInTheDocument();
  });
});

test("user can select value from dropdown", async () => {
  const input = setup();
  fireEvent.change(input, { target: { value: "bo" } });
  const filteredLocationsList = screen.getByTestId("locationsListTestId");
  const { getAllByRole } = within(filteredLocationsList);
  const listItems = getAllByRole("listitem");
  fireEvent.click(listItems[0]);
  expect((input as HTMLInputElement).value).toBe("Boston, USA");
});
