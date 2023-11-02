import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAppSelector } from "../../store/store";
// import emailRegex from "../Login/emailRegex";

const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;

const useForgotPass = () => {
  const navigate = useNavigate();
  const [emailId, setEmailId] = useState("");
  const [emailErr, setEmailErr] = useState("");
  const isLoading = useAppSelector((state) => state.auth.isLoading);

  const handleEmailChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { value } = e.target;
    setEmailId((prevEmail) => (prevEmail === value ? prevEmail : value));
  };

  const handelVerifyEmail = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (emailId && emailId !== "") {
      if (!emailRegex.test(emailId)) {
        setEmailErr("Please enter valid Email address");
      } else {
        alert("hii");
      }
    } else {
      setEmailErr("Please enter email address");
    }
  };

  const returnToRegister = () => {
    navigate("/");
  };

  return {
    emailErr,
    isLoading,
    handleEmailChange,
    handelVerifyEmail,
    returnToRegister,
    emailId,
  };
};

export { useForgotPass };
