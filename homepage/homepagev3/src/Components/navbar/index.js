import React from "react";
import PropTypes from "prop-types";
import {Tabs, Tab, Box, makeStyles} from "@material-ui/core";
function TabPanel(props) {
  const {children, value, index, ...other} = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box p={3}>{children}</Box>}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};
const tabstyles = makeStyles({
  content: {
    minHeight: "calc(100vh - 208px)",
  },
});
function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}
export default function Navbar({startindex, children, tabheads, ...other}) {
  const [value, setValue] = React.useState(startindex);
  const classes = tabstyles();
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const navheads = tabheads;
  return (
    <div className={classes.content} {...other}>
      <Tabs value={value} onChange={handleChange} centered>
        {navheads ? (
          navheads.map((element, index) => {
            return <Tab label={element} key={index} {...a11yProps(index)} />;
          })
        ) : (
          <Tab label="Please define tabheads= "></Tab>
        )}
      </Tabs>
      {children
        ? children.map((element, index) => {
            return (
              <TabPanel value={value} key={index} index={index}>
                {element}
              </TabPanel>
            );
          })
        : null}
    </div>
  );
}
Navbar.propTypes = {
  class: PropTypes.node,
  tabheads: PropTypes.any.isRequired,
};
