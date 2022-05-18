import React, {
  ChangeEventHandler,
  KeyboardEventHandler,
  useContext,
} from "react";
import classes from "./StockInput.module.css";
import { useHistory } from "react-router-dom";
import Input from "../../UI-Components/Input/input";
import { AutoCompleteContext } from "../../Context/autoComplete.context";
import SearchIcon from "../../Assets/Icons/search.svg";

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
    if (ctx.inputValue) {
      history.push(`/stock/${ctx.inputValue}`);
      ctx.setInput("");
      ctx.setAutoCompleteList([]);
    }
  };

  return (
    <div
      className={classes["stock-input-container"]}
      data-testid="stock-input-container"
    >
      <span className={classes["search-icon"]} onClick={searchHandler}>
        <img src={SearchIcon} alt="search-icon" />
      </span>
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
