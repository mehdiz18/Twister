import "./css/App.css";
import Welcome from "./components/welcome";
import { useState } from "react";
import Signup from "./components/signup";
import Login from "./components/login";
import Forgotten from "./components/forgottenps";
function App() {
  const [showLogin, setShowLogin] = useState(false);
  const [showRegister, setShowRegister] = useState(false);
  const [showForgot, setShowForgot] = useState(false);
  const changeLoginState = () => {
    setShowForgot(false);
    setShowRegister(false);
    setShowLogin(true);
  };
  const changeRegisterState = () => {
    setShowLogin(false);
    setShowForgot(false);
    setShowRegister(true);
  };
  const changeForgotPasswordState = () => {
    setShowLogin(false);
    setShowRegister(false);
    setShowForgot(true);
  };
  const changeWelcomeState = () => {
    setShowLogin(false);
    setShowForgot(false);
    setShowRegister(false);
    console.log("azulus");
  };
  return showLogin ? (
    <Login
      changeForgotView={changeForgotPasswordState}
      changeRegisterView={changeRegisterState}
      changeWelcomeView={changeWelcomeState}
    />
  ) : showRegister ? (
    <Signup
      changeLoginView={changeLoginState}
      changeWelcomeView={changeWelcomeState}
    />
  ) : showForgot ? (
    <Forgotten />
  ) : (
    <Welcome
      changeLoginState={changeLoginState}
      changeRegisterState={changeRegisterState}
    />
  );
}
export default App;
