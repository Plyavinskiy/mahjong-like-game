import { ButtonHTMLAttributes, forwardRef } from "react";
import classNames from "classnames";
import "./Button.scss";

export interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  option?: "outlined" | "contained";
}

const Button = forwardRef<HTMLButtonElement, IButtonProps>(
  ({ children, className, option = "outlined", ...restProps }, ref) => (
    <button
      ref={ref}
      type="button"
      className={classNames("button", className, {
        button_contained: option === "contained",
      })}
      {...restProps}
    >
      {children}
    </button>
  ),
);

export default Button;
