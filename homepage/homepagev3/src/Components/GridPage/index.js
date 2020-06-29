import React from "react";
import PropTypes from "prop-types";
import { Grid } from "@material-ui/core";

export default function GridPage(props) {
  const { children, tabs } = props;
  console.log(children);
  return (
    <Grid container>
      {children
        ? children.length
          ? children.map((e, i) => (
              <Grid item key={i} {...tabs[i]}>
                {e}
              </Grid>
            ))
          : children
        : null}
    </Grid>
  );
}
GridPage.propTypes = {
  children: PropTypes.node,
  //	tabheads: PropTypes.any.isRequired,
  //	tabpanels: PropTypes.any.isRequired,
};
