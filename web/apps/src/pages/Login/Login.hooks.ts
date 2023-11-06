import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../store/store";
import { ILogindata, loginUser } from "../../store/reducers/authSlice";
import { LOCALSTORAGE_VARIABLE } from "../../util/constants";
import { toast } from "react-toastify";

export interface ILoginErrSchema {
  username?: string;
  password?: string;
}

export interface ILoginSchema {
  username: string;
  password: string;
}

export interface IFormInputFilleds {
  id: number;
  lable: string;
  type: "number" | "text" | "password" | "tel" | "url";
  disable: boolean;
  placeholder: string;
  value: keyof ILoginSchema;
  errValue: keyof ILoginErrSchema;
}

export const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;

const isEmailHasErr = (email: string) => {
  if (!email) {
    return "Please Enter Email";
  }
  // else if (!emailRegex.test(email)) {
  //   return "Please Enter Valid Email Address";
  // }
  else {
    return "";
  }
};

const validateFields = (data: ILoginSchema) => {
  const err: ILoginErrSchema = {};
  let isValid = true;
  if (isEmailHasErr(data.username)) {
    err.username = isEmailHasErr(data.username);
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
  const [searchParams] = useSearchParams();

  const [loginDetails, setLoginDetails] = useState<ILoginSchema>({
    username: "",
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

  const handleSubmit = async () => {
    if (isLoading) return;
    const hasError = validateFields(loginDetails);
    if (hasError.isValid) {
      try {
        const payload: ILoginSchema = {
          username: loginDetails.username,
          password: loginDetails.password,
        };
        const promise = dispatch(loginUser(payload));
        let res = await promise.unwrap();
        const data: ILogindata = res;
        localStorage.setItem(LOCALSTORAGE_VARIABLE, JSON.stringify(data));
        setLoginDetails({
          username: "",
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

  useEffect(() => {
    let message = searchParams.get("message");
    let path = searchParams.get("path");

    if (message && path) {
      console.log(message, path);
      toast(message, { theme: "light", toastId: 401 });
      navigate("/login", {
        replace: true,
        state: {
          location: {
            pathname: JSON.parse(path)?.pathname,
            search: JSON.parse(path)?.search,
          },
        },
      });
    }
  }, [searchParams]);

  return {
    isLoading,
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
