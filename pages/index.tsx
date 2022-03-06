import { NextPage } from "next";
import React, { useState } from "react";
import { AuthForm } from "../Components/Organisms/Auth/AuthForm";
import { authFormInputProps } from "../Interfaces/atoms";
import { AuthWrapper } from "../Templates/AuthWrapper";

export const AuthLogin: NextPage = () => {
  const [formData, setFormData] = useState<authFormInputProps>({
    username: "",
    password: ""
  });

  const SubmitForm = (e: React.FormEvent) => {
    e.preventDefault();
  };
  return (
    <AuthWrapper>
      <AuthForm
        className="px-2 py-2"
        onSubmit={SubmitForm}
        formData={formData}
        setFormData={setFormData}
      />
    </AuthWrapper>
  );
};

export default AuthLogin;
