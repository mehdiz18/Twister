import { Tab, Tabs } from "@mui/material";
import { useState } from "react";

const NavBar = ({ handleChange }) => {
  const [tabValue, setTabValue] = useState(0);
  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
    handleChange(newValue);
  };
  return (
    <Tabs value={tabValue} onChange={handleTabChange} sx={{ width: 1 }}>
      <Tab label="Tweets" />
      <Tab label="Contacts" />
    </Tabs>
  );
};

export default NavBar;
