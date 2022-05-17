import { ChangeEventHandler, KeyboardEventHandler } from "react";

export interface inputProps {
  inputValue: string;
  inputChangeHandler: ChangeEventHandler<HTMLInputElement>;
  handleKeyDown: KeyboardEventHandler<HTMLInputElement>;
  className: string;
}
const Input = ({
  inputValue,
  inputChangeHandler,
  handleKeyDown,
  className,
}: inputProps) => {
  return (
    <input
      className={className}
      onChange={inputChangeHandler}
      value={inputValue}
      placeholder="Search eg: infy bse, nifty fut weekly"
      autoCorrect="off"
      type="text"
      autoFocus={true}
      onKeyDown={handleKeyDown}
    />
  );
};

export default Input;
