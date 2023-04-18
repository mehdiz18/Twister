import "../css/login.css";
import logo from "./../img/logo.png";
import banner from "./../img/banner.png";
import { Button, Link } from "@mui/material";
import Home from "./Home/Home";
import { useState } from "react";
const Login = ({ changeRegisterView, changeForgotView, changeWelcomeView }) => {
  const [logged, setLogged] = useState(false);
  const changeLoginState = () => {
    setLogged(!logged);
  };
  return logged ? (
    <Home logout={changeLoginState} loggedState={logged} />
  ) : (
    <>
      <Link
        underline="hover"
        color="black"
        variant="subtitle1"
        marginX={2}
        onClick={changeWelcomeView}
      >
        Retour à la page d'accueil
      </Link>
      <div className="loginContainer">
        <div className="bannerContainer">
          <img src={banner} alt="banner"></img>
        </div>
        <div className="formContainer">
          <img src={logo} alt="logo" className="logo"></img>
          <h1 className="banner">Connectez-Vous</h1>
          <div className="form">
            <input id="username" type="email" placeholder="Email"></input>
            <input
              id="password"
              type="password"
              placeholder="Mot de Passe"
            ></input>
            <Link
              underline="hover"
              color="inherit"
              className="forgotPassword"
              marginTop={2}
              fontSize={14}
              variant="subtitle2"
              onClick={changeForgotView}
            >
              Mot de passe Oublié
            </Link>
            <Button variant="contained" size="large" onClick={changeLoginState}>
              Connexion
            </Button>
            <Link
              color="inherit"
              underline="hover"
              fontSize={14}
              id="backRegister"
              variant="subtitle2"
              onClick={changeRegisterView}
            >
              Vous n'avez pas de compte? Inscrivez-vous!
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
