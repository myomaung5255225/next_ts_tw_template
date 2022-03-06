import React from "react";
import { buttonProps } from "../../Interfaces/atoms";

export const UiButton: React.FC<buttonProps> = ({
  className,
  disabled = false,

  NextFn,
  type,
  title
}) => {
  return (
    <button
      className={`${className} shadow focus:shadow-outline focus:outline-none text-white py-2 px-4 rounded`}
      type={type}
      disabled={disabled}
      onClick={() => {
        NextFn ? NextFn() : console.log("button_click");
      }}
    >
      {title}
    </button>
  );
};
