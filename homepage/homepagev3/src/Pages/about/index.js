import React from "react";
import PropTypes from "prop-types";
import { Grid, Typography } from "@material-ui/core";
import GridPage from "../../Components/GridPage";

export default function About(props) {
  return (
    <GridPage tabs={[{ xs: 12 }]}>
      <Typography>Hello</Typography>
    </GridPage>
  );
}
About.propTypes = {
  class: PropTypes.node,
  //	tabheads: PropTypes.any.isRequired,
  //	tabpanels: PropTypes.any.isRequired,
};
