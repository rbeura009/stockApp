import React from "react";
import { render, screen } from "@testing-library/react";
import NoData from "./index";

test("Nodata container is rendered", () => {
  render(<NoData />);
  const NoDataContainer = screen.getByTestId("nodata-container");
  expect(NoDataContainer).toBeInTheDocument();
});
