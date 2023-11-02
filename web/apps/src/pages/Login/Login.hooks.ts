import { ChangeEvent, FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../store/store";
import { loginUser } from "../../store/reducers/authSlice";

export interface ILoginErrSchema {
  email_id?: string;
  password?: string;
}

export interface ILoginSchema {
  email_id: string;
  password: string;
}

export interface IFormInputFilleds {
  id: number;
  lable: string;
  type: string;
  disable: boolean;
  placeholder: string;
  value: keyof ILoginSchema;
  errValue: keyof ILoginErrSchema;
}

export const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;

const isEmailHasErr = (email: string) => {
  if (!email) {
    return "Please Enter Email";
  } else if (!emailRegex.test(email)) {
    return "Please Enter Valid Email Address";
  } else {
    return "";
  }
};

const validateFields = (data: ILoginSchema) => {
  const err: ILoginErrSchema = {};
  let isValid = true;
  if (isEmailHasErr(data.email_id)) {
    err.email_id = isEmailHasErr(data.email_id);
    isValid = false;
  }
  if (!data.password) {
    err.password = "Password is required";
    isValid = false;
  }
  return { isValid, err };
};

const useLogin = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const { isLoading } = useAppSelector((state) => state.auth);

  const [loginDetails, setLoginDetails] = useState<ILoginSchema>({
    email_id: "",
    password: "",
  });
  const [loginDetailsErr, setLoginDetailsErr] = useState<ILoginErrSchema>({});
  const [showPassword, setShowPassword] = useState(false);

  const handleShowPassword = (bool: boolean = !showPassword) =>
    setShowPassword(bool);

  const handleChangeLoginDetails = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setLoginDetails({
      ...loginDetails,
      [name]: value,
    });
    setLoginDetailsErr({ ...loginDetailsErr, [name]: "" });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (isLoading) return;
    const hasError = validateFields(loginDetails);
    if (hasError.isValid) {
      try {
        const payload: ILoginSchema = {
          email_id: loginDetails.email_id,
          password: loginDetails.password,
        };
        const promise = dispatch(loginUser(payload));
        promise.unwrap();
        setLoginDetails({
          email_id: "",
          password: "",
        });
        handleNavigate("/writeup");
      } catch (error) {
        console.log(error);
      }
    } else {
      setLoginDetailsErr(hasError.err);
    }
  };

  const handleNavigate = (path: string) => {
    navigate(path);
  };

  return {
    showPassword,
    handleShowPassword,
    loginDetails,
    handleChangeLoginDetails,
    loginDetailsErr,
    handleNavigate,
    handleSubmit,
  };
};

export { useLogin };
