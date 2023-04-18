import { Button } from "@mui/material";
import "../css/forgotten.css";
import logo from "../img/logo.png";

const Forgotten = () => {
  return (
    <div className="forgottenContainer">
      <div className="forgottenForm">
        <img src={logo} alt="logo" className="logo"></img>
        <h1 className="forgottenTitle">Nouveau mot de passe</h1>
        <input id="email" type="text" placeholder="Email" required></input>
        <input
          id="motdepasse"
          type="password"
          placeholder="Nouveau mot de passe"
          required
        ></input>
        <input
          id="motdepasse"
          type="password"
          placeholder="Confirmer le nouveau mot de passe"
          required
        ></input>
        <Button variant="contained" size="large" href="/login">
          Modifier Mot de Passe
        </Button>
      </div>
    </div>
  );
};

export default Forgotten;
