import "./css/App.css";
import Welcome from "./components/Welcome/welcome";
import { useState } from "react";
import Signup from "./components/Welcome/signup";
import Login from "./components/Welcome/login";
import Forgotten from "./components/Welcome/forgottenps";
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
    <Forgotten changeLoginView={changeLoginState} />
  ) : (
    <Welcome
      changeLoginState={changeLoginState}
      changeRegisterState={changeRegisterState}
    />
  );
}
export default App;
