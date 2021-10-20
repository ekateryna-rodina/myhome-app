import "@testing-library/jest-dom/extend-expect";
import { cleanup, render, screen } from "@testing-library/react";
import React from "react";
import SliderRange from "../SliderRange";
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

test("slider range is rendered with thumbs", async () => {
  render(
    <SliderRange
      min={0}
      max={300}
      minValue={0}
      maxValue={300}
      onMinChange={() => {}}
      onMaxChange={() => {}}
    />
  );
  expect(screen.getByTestId("sliderRangeTestId")).toBeInTheDocument();
  expect(screen.getByTestId("leftThumbTestId")).toBeInTheDocument();
  expect(screen.getByTestId("rightThumbTestId")).toBeInTheDocument();
});
test("thumbs have relevant id attributes", async () => {
  render(
    <SliderRange
      min={0}
      max={300}
      minValue={0}
      maxValue={300}
      onMinChange={() => {}}
      onMaxChange={() => {}}
    />
  );
  const leftThumb = screen.getByTestId("leftThumbTestId");
  const rightThumb = screen.getByTestId("rightThumbTestId");
  expect(leftThumb).toHaveAttribute("id");
  expect(rightThumb).toHaveAttribute("id");
});
