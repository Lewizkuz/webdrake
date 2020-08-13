import React from "react";
import PropTypes from "prop-types";
import { Typography, Box } from "@material-ui/core";
import GridPage from "../../Components/GridPage";
import { indigo } from "@material-ui/core/colors";

export default function Example(props) {
  return (
    <Box margin="auto" width={[1, 1, 1, 3 / 4, 1 / 2]}>
      <GridPage rows={[{ xs: 12 }]}>
        <Typography align="center"> Hello</Typography>
      </GridPage>
    </Box>
  );
}
Example.propTypes = {
  class: PropTypes.node,
  //	tabheads: PropTypes.any.isRequired,
  //	tabpanels: PropTypes.any.isRequired,
};
