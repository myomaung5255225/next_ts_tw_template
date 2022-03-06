import React from "react";
import { authFormInputProps } from "../../../Interfaces/atoms";
import { PasswordIcon } from "../../Atoms/Icons/PasswrodIcon";
import { UserIcon } from "../../Atoms/Icons/UserIcon";
import { UiButton } from "../../Atoms/UiButton";
import { UiInput } from "../../Atoms/UiInput";

interface authFormProps {
  formData: authFormInputProps;
  setFormData: React.Dispatch<React.SetStateAction<authFormInputProps>>;
  className?: string;
  onSubmit: (e: React.FormEvent) => void;
}

export const AuthForm: React.FC<authFormProps> = ({
  className,
  formData,
  setFormData,
  onSubmit
}) => {
  return (
    <div className={`${className}`}>
      <form
        onSubmit={e => onSubmit(e)}
        className="flex flex-col space-y-3 px-2 py-2"
      >
        <UiInput
          formData={formData}
          setFormData={setFormData}
          type="text"
          name="username"
          id="username"
          placeHolder="enter your username..."
          icon={<UserIcon className="w-5 h-5 text-gray-500" />}
        />
        <UiInput
          formData={formData}
          setFormData={setFormData}
          type="password"
          name="password"
          id="password"
          placeHolder="Enter your password..."
          icon={<PasswordIcon className="w-5 h-5" />}
        />
        <UiButton
          type="submit"
          title="Login"
          className="w-full tracking-widest uppercase bg-slate-700 text-white hover:bg-slate-900"
        />
      </form>
    </div>
  );
};
