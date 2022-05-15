import React, {
  ChangeEventHandler,
  KeyboardEventHandler,
  useContext,
} from "react";
import classes from "./StockInput.module.css";
import { useHistory } from "react-router-dom";
import Input from "../../UI-Components/input";
import { AutoCompleteContext } from "../../Context/autoComplete.context";

const StockInput = () => {
  const history = useHistory();
  const ctx = useContext(AutoCompleteContext);

  const inputChangeHandler: ChangeEventHandler<HTMLInputElement> = (event) => {
    ctx.setInput(event.target.value);
    ctx.setSearchSymbol(event.target.value);
  };

  const handleKeyDown: KeyboardEventHandler<HTMLInputElement> = (event) => {
    if (event.key === "Enter") {
      searchHandler();
    }
  };

  const searchHandler = () => {
    history.push(`/stock/${ctx.inputValue}`);
    ctx.setInput("");
    ctx.setAutoCompleteList([]);
  };

  return (
    <div
      className={classes["stock-input-container"]}
      data-testid="stock-input-container"
    >
      <span className={classes["search-icon"]} onClick={searchHandler}></span>
      <Input
        inputValue={ctx.inputValue}
        data-testid="stock-input"
        className={classes["stock-input"]}
        inputChangeHandler={inputChangeHandler}
        handleKeyDown={handleKeyDown}
      />
    </div>
  );
};

export default StockInput;
