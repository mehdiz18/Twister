import { Home, PersonOutline, Search } from "@mui/icons-material";
import { Grid, Button, Input } from "@mui/material";
import Logo from "../../../img/logo.png";

const SideBar = ({ disconnect, changeView }) => {
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
        <Input
          fullWidth
          placeholder="Recherche"
          disableUnderline
          startAdornment={<Search />}
          sx={{
            backgroundColor: "#ededed",
            padding: 0.5,
            paddingLeft: 2,
            borderRadius: 30,
            boxSizing: "border-box",
          }}
        />
      </Grid>
      <Grid container item width={0.4} justifyContent="flex-end">
        <Grid item>
          <Button
            className="sideBarButton"
            startIcon={<Home />}
            label="Accueil"
            iconPosition="start"
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
