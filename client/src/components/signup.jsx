import { Link, Button, Typography } from "@mui/material";
import logo from "../img/logo.png";
import "../css/signup.css";
import { useState} from "react";

import axios from 'axios';



const Signup = ({ changeWelcomeView, changeLoginView }) => {
  
  let userRegEx =  /^[A-Za-z\s]*$/;
  let emailRegEx = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
  let pwdRegEx = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;

  const [userLogin, setUserLogin] = useState('');
  const [userPwd, setUserPwd] = useState('');
  const [userNom, setUserNom] = useState('');
  const [userPrenom, setUserPrenom] = useState('');
  const [matchPwd, setMatchPwd] = useState(false);
  const [errMsg, setErrMsg] = useState('');
  const [success, setSuccess] = useState(false);
  
  
  const handleSubmit = async(e) => {
    e.preventDefault();
    if (success) {
      try {
        let response = await axios.post(
          "http://127.0.0.1:5000/api/users", 
          {email : userLogin, firstName : userPrenom, lastName : userNom, password : userPwd});
        console.log(response.data);
        setSuccess(!success);
        // clear input fields
      } catch (err) {
        
        if (!err?.response) {
          setErrMsg('No server response');
        }
        else if (err.response?.status === 500) {
          setErrMsg('Login already exists');
        }
        else {
          setErrMsg('Registration failed');
        }
      }
    }
  }

  const checkInfos = () =>{
    if (userLogin && ! emailRegEx.test(userLogin)) {
      console.log("erreur1");
      setSuccess(false);
      setErrMsg("Please put a valid email");
      return;
    }
    else if ((userNom && ! userRegEx.test(userNom)) || (userPrenom && ! userRegEx.test(userPrenom)) ) {
      console.log("erreur2");
      setSuccess(false);
      setErrMsg("Please put a valid Name");
      return;
    }
    else if (userPwd && matchPwd && userPwd !== matchPwd) {
      console.log("erreur3");
      setSuccess(false);
      setErrMsg("Please reverfiy your password");
      return;
    }
    setSuccess(true);
    changeLoginView();

  }

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
        <Typography className= {errMsg ? "errMsg" : "offscreen"} aria-live="assertive" color="red">{errMsg}</Typography>
        <form className="signupForm" onSubmit={handleSubmit}>
          <img src={logo} alt="logo" className="logo"></img>
          <h1 className="signupTitle">Inscrivez-vous</h1>
          <input 
            id="nom" 
            type="text" 
            autoComplete="off"
            placeholder="Nom" 
            required 
            onChange={(e)=> setUserNom(e.target.value)}>  
          </input>
          <input 
            id="prenom" 
            type="text" 
            autoComplete="off"
            placeholder="Prénom" 
            required
            onChange={(e)=> setUserPrenom(e.target.value)}>
          </input>
          <select id="sexe-select" required>
            <option value=""> Renseignez votre sexe </option>
            <option value="F"> Femme </option>
            <option value="H"> Homme </option>
            <option> Ne souhaite pas renseingner </option>
          </select>
          <label htmlFor="datenaissance"> Date de naissance:</label>
          <input id="datanaissance" type="date" required></input>
          <input 
            id="email" 
            type="text" 
            autoComplete="off"
            placeholder="Email" 
            required 
            onChange={(e)=> setUserLogin(e.target.value)}> 
          </input>
          <input
            id="motdepasse"
            type="password"
            placeholder="Mot de passe"
            required
            onChange={(e)=> setUserPwd(e.target.value)}>
          </input>
          <input
            id="confirmMotdepasse"
            type="password"
            placeholder="Confirmer le mot de passe"
            required
            onChange={(e)=> setMatchPwd(e.target.value)}>  
          </input>
          <Button
            type = "submit"
            className="Button"
            variant="contained"
            size="large"
            onClick={checkInfos}
          >
            Inscription
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
