import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import StockInputComponent from "./index";
import { BrowserRouter } from "react-router-dom";
import AutoCompleteContextProvider from "../../Context/autoComplete.context";

test("stock input container is rendered", () => {
  render(<StockInputComponent />);
  const stockInputContainer = screen.getByTestId("stock-input-container");
  expect(stockInputContainer).toBeInTheDocument();
});

test("stock input", async () => {
  render(
    <BrowserRouter>
      <AutoCompleteContextProvider>
        <StockInputComponent />
      </AutoCompleteContextProvider>
    </BrowserRouter>
  );
  const stockInput = screen.getByPlaceholderText(
    "Search eg: infy bse, nifty fut weekly"
  );

  fireEvent.change(stockInput, { target: { value: "IBM" } });
  expect(stockInput).toHaveDisplayValue("IBM");
  fireEvent.keyDown(stockInput, { key: "Enter" });
  expect(stockInput).toHaveDisplayValue("");
});
