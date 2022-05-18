import { MouseEventHandler, ReactElement } from "react";
import classes from "./button.module.css";

export interface buttonProps {
  variant: string;
  children: ReactElement | string;
  onClick: MouseEventHandler;
}

const getClassBasesOnType = (variant: string) => {
  switch (variant.toLowerCase()) {
    case "primary":
      return "primary-button";
    case "secondary":
      return "secondary-button";
    case "disabled":
      return "disabled-button";
    default:
      return "";
  }
};
const Button = ({ variant, children, ...buttonConfig }: buttonProps) => {
  return (
    <button
      className={`${classes["button"]} ${
        classes[getClassBasesOnType(variant)]
      }`}
      {...buttonConfig}
    >
      {children}
    </button>
  );
};

export default Button;
