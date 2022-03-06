import { HTMLInputTypeAttribute } from "react";

export interface authFormDataProps {
    username: string;
    password: string;
  }
  

  export interface authFormInputProps {
    username: string;
    password: string;
  }

  export interface buttonProps{
      NextFn?:()=>void;
      title:string;
      type:'button'|'submit';
      disabled?:boolean;
      className?:string;
  }

  export interface iconProps{
    className?:string;
  }

  export interface uiInProps {
    formData: any;
    setFormData: React.Dispatch<React.SetStateAction<any>>;
    name: string;
    id: string;
    type: HTMLInputTypeAttribute;
    required?: boolean;
    disabled?: boolean;
    className?: string;
    icon?: React.ReactElement;
    placeHolder?:string;
  }
  