import React, {
  FC,
  ReactComponentElement,
  ReactElement,
  useState,
} from "react";
import { autoCompleteListDataType } from "../Interfaces/autoCompleteList";
// const autoCompleteListInitalState: autoCompleteListDataType[] = [];
const autoCompleteListInitalState = [];
export const AutoCompleteContext = React.createContext({
  searchedSymbol: "",
  setSearchSymbol: (arg) => {},
  autoCompleteList: autoCompleteListInitalState,
  setAutoCompleteList: (arg) => {},
  inputValue: "",
  setInput: (arg) => {},
});

/*@ts-ignore*/
const AutoCompleteContextProvider = (props) => {
  const [searchedSymbol, setSearchSymbol] = useState("");
  const [autoCompleteList, setAutoCompleteList] = useState([]);
  const [inputValue, setInput] = useState("");

  return (
    <AutoCompleteContext.Provider
      value={{
        searchedSymbol,
        setSearchSymbol: setSearchSymbol,
        autoCompleteList,
        setAutoCompleteList,
        inputValue,
        setInput,
      }}
    >
      {props.children}
    </AutoCompleteContext.Provider>
  );
};

export default AutoCompleteContextProvider;
