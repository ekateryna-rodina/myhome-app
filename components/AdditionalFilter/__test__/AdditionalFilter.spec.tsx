import "@testing-library/jest-dom/extend-expect";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import React from "react";
import { FILTER_ADDITIONAL_DEFAULT } from "../../../src/utils/constants";
import {
  AdditionalFilterKeys,
  AdditionalFiltersStringMap,
} from "../../../src/utils/types";
import AdditionalFilter from "../AdditionalFilter";

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

test("additional filters are rendered", async () => {
  render(<AdditionalFilter data={FILTER_ADDITIONAL_DEFAULT} />);
  const additional = screen.getByTestId("additionalTestId");
  expect(additional).toBeInTheDocument();
  Object.keys(FILTER_ADDITIONAL_DEFAULT).forEach((key) => {
    expect(screen.getByTestId(key)).toBeInTheDocument();
    expect(screen.getByTestId(key)).not.toBeChecked();
    expect(
      screen.getByText(AdditionalFiltersStringMap[key as AdditionalFilterKeys])
    ).toBeInTheDocument();
  });
});

test("user check works", async () => {
  const toCheck = ["isPetsFriendly", "isWithKitchen"];
  render(<AdditionalFilter data={FILTER_ADDITIONAL_DEFAULT} />);
  const additional = screen.getByTestId("additionalTestId");
  expect(additional).toBeInTheDocument();
  toCheck.forEach((key) => {
    const label = screen.getByText(
      AdditionalFiltersStringMap[key as AdditionalFilterKeys]
    );
    userEvent.click(label);
    expect(screen.getByTestId(key)).toBeChecked();
  });
});
