//TODO: Pass the userId to the Home
//TODO: Write a hook with useEffect to loadPosts

import "../../css/login.css";
import logo from "../../img/logo.png";
import banner from "../../img/banner.png";
import { Button, Grid, Link, Typography } from "@mui/material";
import Home from "../Home/Home";
import useLogin from "../../hooks/useLogin";
const Login = ({ changeRegisterView, changeForgotView, changeWelcomeView }) => {
  const [
    email,
    setEmail,
    password,
    setPassword,
    loginState,
    setLoginState,
    logout,
    loginError,
    userId,
  ] = useLogin();

  let inputStyle = {
    border: loginError ? "2px solid #f06e60" : "none",
  };
  return (
    <Grid container justifyContent="center">
      {loginState ? (
        <Home logout={logout} loggedState={loginState} userId={userId} />
      ) : (
        <Grid container item mt={2}>
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
                <input
                  id="username"
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={setEmail}
                  style={inputStyle}
                ></input>
                <input
                  id="password"
                  type="password"
                  placeholder="Mot de Passe"
                  value={password}
                  onChange={setPassword}
                  style={inputStyle}
                ></input>
                {loginError && (
                  <Typography variant="subtitle2" color="red" mt={2}>
                    Email ou Mot de passe Incorrects
                  </Typography>
                )}
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
                <Button
                  variant="contained"
                  size="large"
                  onClick={setLoginState}
                >
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
        </Grid>
      )}
    </Grid>
  );
};

export default Login;
