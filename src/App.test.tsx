import React from "react";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import App from "./App";

xtest("renders App component", () => {
  render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
  const appContainer = screen.getByTestId("App");
  expect(appContainer).toBeInTheDocument();
});
