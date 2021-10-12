import "@testing-library/jest-dom/extend-expect";
import { render, screen } from "@testing-library/react";
import React from "react";
import Logo from "../Logo";
test("Link is visible", async () => {
  render(<Logo />);
  const logoLink = screen.getByTestId("linkTestId");
  expect(logoLink).toBeInTheDocument();
});
