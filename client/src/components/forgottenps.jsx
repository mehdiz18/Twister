import { Button, Link, Typography } from "@mui/material";
import "../css/forgotten.css";
import logo from "../img/logo.png";
import useForgotPassword from "../hooks/useForgotPassword";

const Forgotten = ({ changeLoginView }) => {
  const [
    email,
    setEmail,
    password,
    setPassword,
    cPassword,
    setCPassword,
    verifyPassword,
    wrongEmail,
    loginError,
    modifyPassword,
  ] = useForgotPassword();

  let wrongEmailInputStyle = {
    border: loginError || wrongEmail ? "2px solid #f06e60" : "none",
  };

  let passwordInputStyle = {
    border: !verifyPassword ? "2px solid #f06e60" : "none",
  };
  return (
    <>
      <Link
        underline="hover"
        color="black"
        variant="subtitle1"
        marginX={2}
        onClick={changeLoginView}
        mt={4}
      >
        Retour au Login
      </Link>
      <div className="forgottenContainer">
        <div className="forgottenForm">
          <img src={logo} alt="logo" className="logo"></img>
          <h1 className="forgottenTitle">Nouveau mot de passe</h1>
          <input
            id="email"
            type="text"
            placeholder="Email"
            required
            value={email}
            onChange={setEmail}
            style={wrongEmailInputStyle}
          ></input>
          <input
            id="password"
            type="password"
            placeholder="Nouveau mot de passe"
            required
            value={password}
            onChange={setPassword}
            style={passwordInputStyle}
          ></input>
          <input
            id="confirmPassword"
            type="password"
            placeholder="Confirmer le nouveau mot de passe"
            required
            value={cPassword}
            onChange={setCPassword}
            style={passwordInputStyle}
          ></input>
          {loginError && (
            <Typography variant="subtitle2" color="red" mt={2}>
              Utilisateur Inexistant
            </Typography>
          )}
          {!verifyPassword && (
            <Typography variant="subtitle2" color="red" mt={2}>
              Mot de passe incorrect
            </Typography>
          )}
          <Button
            variant="contained"
            size="large"
            onClick={() => modifyPassword(changeLoginView)}
          >
            Modifier Mot de Passe
          </Button>
        </div>
      </div>
    </>
  );
};

export default Forgotten;
