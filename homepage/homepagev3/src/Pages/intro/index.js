import React from "react";
import PropTypes from "prop-types";
import { Typography, Box } from "@material-ui/core";
import GridPage from "../../Components/GridPage";

export default function Intro(props) {
  const tabs = [
    { xs: 12, md: 6, lg: 4 },
    { xs: 12, md: 6, lg: 4 },
    { xs: 12, md: 6, lg: 4 },
    { xs: 12, md: 6, lg: 4 },
    { xs: 12, md: 6, lg: 4 },
    { xs: 12, md: 6, lg: 4 },
    { xs: 12, md: 6, lg: 4 },
  ];
  const obj = ["ok", "nice", "nice", "sweet", "it", "works"];
  const printGrid = (objects) => {
    return objects.map((ele, i) => (
      <Typography align="center" key={i}>
        {ele}
      </Typography>
    ));
  };

  return (
    <Box margin="auto" width={[1, 1, 1, 3 / 4, 1 / 2]}>
      <GridPage rows={tabs}>{printGrid(obj)}</GridPage>
    </Box>
  );
}
Intro.propTypes = {
  class: PropTypes.node,
  //	tabheads: PropTypes.any.isRequired,
  //	tabpanels: PropTypes.any.isRequired,
};
