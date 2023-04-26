import { Home, PersonOutline } from "@mui/icons-material";
import { Grid, Button } from "@mui/material";
import Logo from "../../../img/logo.png";
import SearchBar from "./SearchBar";

const SideBar = ({ disconnect, changeView, userId }) => {
  return (
    <Grid
      container
      direction="row"
      width={1}
      justifyContent="space-between"
      mt={0.5}
    >
      <Grid item>
        <img src={Logo} width="70%" alt="logo" />
      </Grid>
      <Grid item width={0.5}>
        <SearchBar userId={userId} />
      </Grid>
      <Grid container item width={0.4} justifyContent="flex-end">
        <Grid item>
          <Button
            className="sideBarButton"
            startIcon={<Home />}
            label="Accueil"
            disableRipple
            disableTouchRipple
            disableFocusRipple
            onClick={() => {
              changeView(0);
            }}
          >
            Accueil
          </Button>
        </Grid>
        <Grid item>
          <Button
            className="sideBarButton"
            startIcon={<PersonOutline />}
            onClick={() => {
              changeView(1);
            }}
          >
            Profil
          </Button>
        </Grid>
        <Grid item>
          <Button className="sideBarButton" onClick={disconnect}>
            Deconnexion
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default SideBar;
