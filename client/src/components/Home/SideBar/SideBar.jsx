import { Home, PersonOutline } from "@mui/icons-material";
import { Tabs, Tab, Grid, Button } from "@mui/material";
import { useState } from "react";
import Logo from "../../../img/logo.png";

const LinkTab = (props) => {
  return (
    <Tab
      onClick={(event) => {
        event.preventDefault();
        props.onClick();
      }}
      {...props}
    />
  );
};
const SideBar = ({ disconnect, changeView }) => {
  const [tabValue, setTabValue] = useState(0);
  const handleTabChange = (event, value) => {
    setTabValue(value);
  };
  return (
    <Grid direction="column" container alignItems="center" pt={3}>
      <Grid item alignSelf="flex-start">
        <img src={Logo} width="70%" alt="logo"></img>
      </Grid>
      <Grid item>
        <Tabs
          orientation="vertical"
          onChange={handleTabChange}
          value={tabValue}
          TabIndicatorProps={{
            style: { display: "none" },
          }}
        >
          <LinkTab
            icon={<Home />}
            label="Accueil"
            iconPosition="start"
            disableRipple
            disableTouchRipple
            disableFocusRipple
            onClick={changeView}
          />
          <LinkTab
            icon={<PersonOutline />}
            label="Profil"
            iconPosition="start"
            disableRipple
            disableTouchRipple
            disableFocusRipple
            onClick={changeView}
          />
        </Tabs>
      </Grid>
      <Grid item>
        <Button variant="contained" onClick={disconnect}>
          Deconnexion
        </Button>
      </Grid>
    </Grid>
  );
};

export default SideBar;
