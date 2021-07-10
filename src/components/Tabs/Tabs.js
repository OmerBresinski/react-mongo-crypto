import React from "react";
import { Tabs as MuiTabs } from "@material-ui/core";
import { Tab as MuiTab } from "@material-ui/core";
import * as S from "./style";

const Tabs = ({ items, onChange, activeTab }) => {
  const handleChange = (_e, newValue) => {
    onChange(newValue);
  };

  return (
    <MuiTabs
      value={activeTab}
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
