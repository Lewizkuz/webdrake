import React, { useState } from "react";
import PropTypes from "prop-types";
import Tabs from "../navigation/tabs";
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <div style={{ padding: 3 }}>{children}</div>}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};
export default function Navbar({ startindex, children, tabheads, ...other }) {
  const [value, setValue] = useState(startindex);
  function handleChange(event, newValue) {
    setValue(newValue);
  }
  return (
    <Tabs value={value} onChange={handleChange} centered {...other}>
      {tabheads.map((e, i) => [e, children[i]])}
    </Tabs>
  );
}
Navbar.propTypes = {
  class: PropTypes.node,
  tabheads: PropTypes.any.isRequired,
};
