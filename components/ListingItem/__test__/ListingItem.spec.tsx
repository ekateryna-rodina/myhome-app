import "@testing-library/jest-dom/extend-expect";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import React from "react";
import { ThemeProvider } from "styled-components";
import { theme } from "../../../pages/_app";
import { PropertyType } from "../../../src/utils/enums";
import Item from "../ListingItem";
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

const data = {
  id: 1,
  city: "Philadelphia",
  country: "USA",
  title: "Sweet stay",
  type: PropertyType.Apartment,
  beds: 4,
  baths: 2,
  photo: "",
  location: { city: "Philadelphia", country: "USA" },
};
test("List item contains logo, serach, icons and user", async () => {
  render(
    <ThemeProvider theme={theme}>
      <Item {...data} />
    </ThemeProvider>
  );
  expect(screen.getByTestId("listItemIdTestId_1")).toBeInTheDocument();
});
test("Handle focusItem id on hover is called once", async () => {
  const handleFocus = jest.fn();
  render(
    <ThemeProvider theme={theme}>
      <Item {...data} />
    </ThemeProvider>
  );
  const item = screen.getByTestId("listItemIdTestId_1");
  userEvent.hover(item);
  expect(item).toHaveStyle("border: 1px solid black");
});
