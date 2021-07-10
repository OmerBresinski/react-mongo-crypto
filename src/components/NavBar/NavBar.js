import React, { useState } from "react";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";

const NavBar = () => {
  const [value, setValue] = useState(0);

  const handleChange = (_e, newValue) => {
    setValue(newValue);
  };

  return (
    <AppBar position="static" color="transparent" style={{ position: "fixed", top: 0 }}>
      <Tabs
        value={value}
        onChange={handleChange}
        aria-label="Navigation"
        indicatorColor="primary"
        textColor="primary"
      >
        <Tab label="Home" index={0} />
        <Tab label="Hash" index={1} />
        <Tab label="Block" index={2} />
        <Tab label="Blockchain" index={3} />
        <Tab label="Distributed" index={4} />
        <Tab label="Tokens" index={5} />
        <Tab label="Coinbase" index={6} />
      </Tabs>
    </AppBar>
  );
};

export default NavBar;
