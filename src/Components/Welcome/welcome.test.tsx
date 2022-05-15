import React from "react";
import { render, screen } from "@testing-library/react";
import Welcome from "./index";

test("Welcome container is rendered with appname", () => {
  render(<Welcome appName={"demo"} />);
  const appName = screen.getByText(/demo/i);
  expect(appName).toBeInTheDocument();
});
