import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import AutoCompleteList from "./index";
import { BrowserRouter } from "react-router-dom";
import AutoCompleteContextProvider from "../../Context/autoComplete.context";
import StockInput from "../StockInput";

test("Auto complete List container is rendered", () => {
  render(<AutoCompleteList />);
  const autoCompleteListContainer = screen.getByTestId(
    "autocomplete-container"
  );
  expect(autoCompleteListContainer).toBeInTheDocument();
});

test("stock input", async () => {
  render(
    <BrowserRouter>
      <AutoCompleteContextProvider>
        <AutoCompleteList />
        <StockInput />
      </AutoCompleteContextProvider>
    </BrowserRouter>
  );
  const stockInput = screen.getByPlaceholderText(
    "Search eg: infy bse, nifty fut weekly"
  );

  fireEvent.change(stockInput, { target: { value: "IBM" } });
  const autocompleteItems = screen.getAllByTestId("autocomplete-item");

  expect(autocompleteItems).toHaveLength(1);
});
