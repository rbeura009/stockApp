import React, { useContext, useEffect } from "react";
import autoCompleteListData from "../../Assets/autoCompleteList";
import { Link } from "react-router-dom";
import classes from "./autoCompleteList.module.css";
import { AutoCompleteContext } from "../../Context/autoComplete.context";
import { autoCompleteListDataType } from "../../Interfaces/autoCompleteList";

const AutoCompleteList = () => {
  const ctx = useContext(AutoCompleteContext);
  const searchedSymbol: string = ctx.searchedSymbol;

  useEffect(() => {
    if (!searchedSymbol) ctx.setAutoCompleteList([]);
    else {
      let data: autoCompleteListDataType[] = autoCompleteListData.filter(
        (item) =>
          item.symbol.toLowerCase().includes(searchedSymbol.toLowerCase()) ||
          item.stock.toLowerCase().includes(searchedSymbol.toLowerCase())
      );
      ctx.setAutoCompleteList(data);
    }
  }, [searchedSymbol]);

  const stockSelectionHandler = (listitem: autoCompleteListDataType) => {
    ctx.setAutoCompleteList([]);
    ctx.setInput("");
  };

  return (
    <>
      <ul
        className={classes["autocomplete-container"]}
        data-testid="autocomplete-container"
      >
        {ctx.autoCompleteList.map(
          (listitem: autoCompleteListDataType, index) => (
            <li
              key={index}
              className={classes["autocomplete-item"]}
              onClick={stockSelectionHandler.bind(this, listitem)}
              data-testid="autocomplete-item"
            >
              <Link to={"/stock/" + listitem.symbol}>
                <div className={classes["autocomplete-list-item"]}>
                  <div className={classes["autocomplete-list-symbol"]}>
                    {listitem.symbol}
                  </div>

                  <div className={classes["autocomplete-list-stock-container"]}>
                    <div className={classes["autocomplete-list-stock"]}>
                      {listitem.stock}
                    </div>
                    <div className={classes["autocomplete-list-exchange"]}>
                      {listitem?.exchange || "NSE"}
                    </div>
                  </div>
                </div>
              </Link>
            </li>
          )
        )}
      </ul>
    </>
  );
};

export default AutoCompleteList;
