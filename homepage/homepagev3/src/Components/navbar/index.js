import React from "react";
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
  const [value, setValue] = React.useState(startindex);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div
      style={{
        minHeight: "calc(100vh - 208px)",
      }}
      {...other}
    >
      <Tabs value={value} onChange={handleChange} centered>
        {children}
      </Tabs>
    </div>
  );
}
Navbar.propTypes = {
  class: PropTypes.node,
  tabheads: PropTypes.any.isRequired,
};
