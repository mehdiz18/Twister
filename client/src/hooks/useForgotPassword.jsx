import { useEffect, useState } from "react";
import axios from "axios";

const useForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [samePassword, setSamePasword] = useState(true);
  const [wrongEmail, setWrongEmail] = useState(false);
  const [loginError, setLoginError] = useState(false);

  const changeEmail = (event) => {
    setLoginError(false);
    event.preventDefault();
    setEmail(event.target.value);
  };

  const changePassword = (event) => {
    setPassword(event.target.value);
  };

  const changeConfirmPassword = (event) => {
    setConfirmPassword(event.target.value);
  };

  const modifyPassword = async (changeLoginView) => {
    if (email && password === confirmPassword) {
      try {
        let response = await axios.put("http://127.0.0.1:5000/api/users", {
          email: email,
          password: password,
        });
        if (response.data.status === 404) {
          setLoginError(true);
        } else {
          setLoginError(false);
          changeLoginView();
        }
      } catch (error) {
        setLoginError(true);
      }
    } else {
      setSamePasword(false);
    }
  };

  useEffect(() => {
    if (password !== confirmPassword) {
      setSamePasword(false);
    } else {
      setSamePasword(true);
    }
  }, [password, confirmPassword]);

  useEffect(() => {
    let regexp = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;
    if (!regexp.test(email) && email.length !== 0) {
      setWrongEmail(true);
    } else {
      setWrongEmail(false);
    }
  }, [email]);

  return [
    email,
    changeEmail,
    password,
    changePassword,
    confirmPassword,
    changeConfirmPassword,
    samePassword,
    wrongEmail,
    loginError,
    modifyPassword,
  ];
};

export default useForgotPassword;
