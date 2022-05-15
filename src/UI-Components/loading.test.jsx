import React from "react";
import { render, screen } from "@testing-library/react";
import Loading from "./loading";

test("Loading component is rendered with Loading text", () => {
  render(<Loading loading={true} />);
  const loadingText = screen.getByText("Loading...");
  expect(loadingText).toBeInTheDocument();
});
