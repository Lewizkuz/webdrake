import React from "react";
import PropTypes from "prop-types";
import { Tabs, Tab, Box } from "@material-ui/core";
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
      {value === index && <Box p={3}>{children}</Box>}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};
export default function Navbar(props) {
  const {
    startindex,
    children,
    tabpanels,
    classes,
    tabheads,
    ...other
  } = props;
  const [value, setValue] = React.useState(props.startindex);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const navheads = props.tabheads;
  const panels = props.tabpanels;
  //	console.log(navheads, panels);
  return (
    <>
      <Tabs
        className={props.classes}
        value={value}
        indicatorColor="primary"
        textColor="primary"
        onChange={handleChange}
        centered
      >
        {navheads ? (
          navheads.map((element, index) => {
            //		console.log(element, index);
            return <Tab label={element} key={index}></Tab>;
          })
        ) : (
          <Tab label="Please define tabheads= "></Tab>
        )}
      </Tabs>
      {panels
        ? panels.map((element, index) => {
            //console.log(element, index);
            return (
              <TabPanel value={value} key={index} index={index}>
                {element}
              </TabPanel>
            );
          })
        : null}
    </>
  );
}
Navbar.propTypes = {
  class: PropTypes.node,
  tabheads: PropTypes.any.isRequired,
  tabpanels: PropTypes.any.isRequired,
};
