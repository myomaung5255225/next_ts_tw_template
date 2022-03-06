import React, { HTMLInputTypeAttribute } from "react";
import { uiInProps } from "../../Interfaces/atoms";

export const UiInput: React.FC<uiInProps> = ({
  className,
  formData,
  setFormData,
  name,
  id,
  type,
  required = true,
  disabled = false,
  icon,
  placeHolder
}) => {
  return (
    <div
      className={`${className} w-full text-sm  border border-slate-400 rounded-md mb-3 flex justify-start items-center content-center px-2 `}
    >
      {icon}
      <input
        type={type}
        id={id}
        name={name}
        required={required}
        disabled={disabled}
        value={formData[name]}
        placeholder={placeHolder}
        onChange={e => {
          setFormData({ ...formData, [e.target.name]: e.target.value });
        }}
        className="shadow appearance-none border-0 w-full tracking-widest py-2 px-3 text-slate-700  focus:outline-none focus:shadow-outline"
      />
    </div>
  );
};
