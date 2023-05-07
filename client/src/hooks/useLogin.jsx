import { useRef, useState } from "react";
import axios from "axios";
const useLogin = () => {
  const [loginState, setLoginState] = useState(false);
  const [loginError, setLoginError] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const userId = useRef(-1);

  const changeLoginState = async (event) => {
    event.preventDefault();
    if (email && password) {
      try {
        let response = await axios.post(
          "http://127.0.0.1:5000/api/users/login",
          {
            email: email,
            password: password,
          }
        );
        setLoginState(true);
        userId.current = response.data.userId;
        console.log(`User ${userId.current} Logged Successfuly`);
      } catch (error) {
        setLoginError(true);
        setPassword("");
      }
    } else {
      setLoginError(true);
    }
  };
  const logout = async () => {
    setLoginState(false);
    console.log(`User Logged Out Sucessfully`);
  };
  const changeEmail = (event) => {
    setLoginError(false);
    setEmail(event.target.value);
  };
  const changePassword = (event) => {
    setLoginError(false);
    setPassword(event.target.value);
  };
  return [
    email,
    changeEmail,
    password,
    changePassword,
    loginState,
    changeLoginState,
    logout,
    loginError,
    userId,
  ];
};

export default useLogin;
