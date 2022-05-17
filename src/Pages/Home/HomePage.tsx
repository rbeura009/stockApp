import React from "react";
import { Route } from "react-router-dom";
import AutoCompleteList from "../../Components/AutoCompleteList";
import StockDetails from "../../Components/StockDetails";
import StockInput from "../../Components/StockInput";
import Welcome from "../../Components/Welcome";
import AutoCompleteContextProvider from "../../Context/autoComplete.context";
import classes from "./HomePage.module.css";

const HomePage = () => {
  return (
    <main className={classes["home-container"]}>
      <div className={classes["stock-input-container"]}>
        <AutoCompleteContextProvider>
          <StockInput />
          <AutoCompleteList />
        </AutoCompleteContextProvider>
      </div>

      <div className={classes["stock-details-container"]}>
        <Route path="/" exact>
          <Welcome appName="Screener" />
        </Route>

        <Route path="/stock/:stock">
          <StockDetails />
        </Route>
      </div>
    </main>
  );
};

export default HomePage;
