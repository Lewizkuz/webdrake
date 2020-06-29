import React from "react";
import PropTypes from "prop-types";
import { Typography } from "@material-ui/core";
import GridPage from "../../Components/GridPage";

export default function About(props) {
  return (
    <GridPage rows={[{ xs: 12 }, { xs: 12 }, { xs: 12 }, { xs: 12 }]}>
      <Typography align="center">Hello</Typography>
      <Typography align="center">Hello</Typography>
      <Typography align="center">Hello</Typography>
      <Typography align="center">Hello</Typography>
    </GridPage>
  );
}
About.propTypes = {
  class: PropTypes.node,
  //	tabheads: PropTypes.any.isRequired,
  //	tabpanels: PropTypes.any.isRequired,
};
