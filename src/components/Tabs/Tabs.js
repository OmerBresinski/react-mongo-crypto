import React, { useState } from "react";
import { Tabs as MuiTabs } from "@material-ui/core";
import { Tab as MuiTab } from "@material-ui/core";
import * as S from "./style";

const Tabs = ({ items }) => {
  const [value, setValue] = useState(0);

  const handleChange = (_e, newValue) => {
    setValue(newValue);
  };

  return (
    <MuiTabs
      value={value}
      onChange={handleChange}
      aria-label="Navigation"
      indicatorColor="primary"
      textColor="primary"
      variant="scrollable"
      scrollButtons="auto"
    >
      {items.map((item, index) => {
        return <MuiTab key={index} label={item} index={index} />;
      })}
    </MuiTabs>
  );
};

export default Tabs;
