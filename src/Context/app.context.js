import React, { useState } from "react";
export const appContext = React.createContext({
  stockPriceRefreshInterval: 20000,
  setStockPriceRefreshInterval: (arg) => {},
});

const AppContextProvider = (props) => {
  const [stockPriceRefreshInterval, setStockPriceRefreshInterval] =
    useState(200000);
  return (
    <appContext.Provider
      value={{
        stockPriceRefreshInterval,
        setStockPriceRefreshInterval,
      }}
    >
      {props.children}
    </appContext.Provider>
  );
};

export default AppContextProvider;
