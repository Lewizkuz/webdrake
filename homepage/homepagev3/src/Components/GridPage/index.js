import React from "react";
import PropTypes from "prop-types";
import { Grid } from "@material-ui/core";

export default function GridPage(props) {
  const { children, rows, ...other } = props;
  return (
    <Grid container {...other}>
      {children ? (
        typeof children !== "string" && children.length > 1 ? (
          children.map((e, i) => (
            <Grid item key={i} {...rows[i]}>
              {e}
            </Grid>
          ))
        ) : (
          <Grid item xs={12}>
            {children}
          </Grid>
        )
      ) : null}
    </Grid>
  );
}
GridPage.propTypes = {
  children: PropTypes.node,
  //	tabheads: PropTypes.any.isRequired,
  //	tabpanels: PropTypes.any.isRequired,
};
