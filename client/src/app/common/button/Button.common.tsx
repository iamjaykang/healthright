import React, { FC, ButtonHTMLAttributes } from "react";
import ButtonSpinner from "../buttonSpinner/ButtonSpinner.common";

type ButtonType = "google" | "inverted";

export type ButtonProps = {
  btnType?: ButtonType;
  isLoading?: boolean;
} & ButtonHTMLAttributes<HTMLButtonElement>;

const Button: FC<ButtonProps> = ({
  children,
  btnType,
  isLoading,
  ...otherProps
}) => {
  const btnTypeClass = btnType ? ` ${btnType}` : '';
  return (
    <button
      className={`btn-container${btnTypeClass}`}
      {...otherProps}
      disabled={isLoading}
    >
      {isLoading ? <ButtonSpinner /> : children}
    </button>
  );
};

export default Button;
