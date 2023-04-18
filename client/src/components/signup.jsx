import { Link, Button } from "@mui/material";
import logo from "../img/logo.png";
import "../css/signup.css";
const Signup = ({ changeWelcomeView, changeLoginView }) => {
  return (
    <div>
      <Link
        underline="hover"
        color="black"
        variant="subtitle1"
        marginX={2}
        onClick={changeWelcomeView}
      >
        Retour à la page d'accueil
      </Link>
      <div className="container">
        <div className="signupForm">
          <img src={logo} alt="logo" className="logo"></img>
          <h1 className="signupTitle">Inscrivez-vous</h1>
          <input id="nom" type="text" placeholder="Nom" required></input>
          <input id="prenom" type="text" placeholder="Prénom" required></input>
          <select id="sexe-select" required>
            <option value=""> Renseignez votre sexe </option>
            <option value="F"> Femme </option>
            <option value="H"> Homme </option>
            <option> Ne souhaite pas renseingner </option>
          </select>
          <label htmlFor="datenaissance"> Date de naissance:</label>
          <input id="datanaissance" type="date" required></input>
          <input id="email" type="text" placeholder="Email" required></input>
          <input
            id="motdepasse"
            type="password"
            placeholder="Mot de passe"
            required
          ></input>
          <input
            id="confirmMotdepasse"
            type="password"
            placeholder="Confirmer le mot de passe"
            required
          ></input>
          <Button
            className="Button"
            variant="contained"
            size="large"
            onClick={changeLoginView}
          >
            Inscription
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Signup;
