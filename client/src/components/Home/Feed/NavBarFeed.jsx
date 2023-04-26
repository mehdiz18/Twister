import { Tab, Tabs } from "@mui/material";
import { useState } from "react";

const NavBarFeed = ({ handleChange }) => {
  const [tabValue, setTabValue] = useState(0);
  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
    handleChange(newValue);
  };
  return (
    <Tabs value={tabValue} onChange={handleTabChange} sx={{ width: 1 }}>
      <Tab label="Fil d'actualités" />
      <Tab label="Invitations" />
    </Tabs>
  );
};

export default NavBarFeed;
