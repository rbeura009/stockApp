import React from "react";
import { Route } from "react-router-dom";
import "./App.css";
import Header from "./Components/Header";
import ConfigPage from "./Pages/config";
import HomePage from "./Pages/HomePage";

function App() {
  return (
    <div className="App" data-testid="App">
      <Header />
      <Route path="/" exact>
        <HomePage />
      </Route>
      <Route path="/stock/:stock">
        <HomePage />
      </Route>
      <Route path="/config">
        <ConfigPage />
      </Route>
    </div>
  );
}

export default App;
