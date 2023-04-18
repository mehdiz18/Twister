import "../css/welcome.css";
// import Button from "./Button";
import logo from "./../img/logo.png";
import banner from "./../img/banner.png";
import { Button } from "@mui/material";
const Welcome = ({ changeLoginState, changeRegisterState }) => {
  return (
    <>
      <div className="welcomeContainer">
        <div className="bannerContainer">
          <img src={banner} alt="banner"></img>
        </div>
        <div className="welcomeForm">
          <h1> Welcome to Twister </h1>
          <img src={logo} alt="logo" className="logo"></img>
          <Button
            variant="contained"
            size="large"
            sx={{ width: "60%" }}
            onClick={changeLoginState}
          >
            Connexion
          </Button>
          <Button
            variant="contained"
            size="large"
            sx={{ width: "60%" }}
            onClick={changeRegisterState}
          >
            Inscription
          </Button>
        </div>
      </div>
    </>
  );
};

export default Welcome;
