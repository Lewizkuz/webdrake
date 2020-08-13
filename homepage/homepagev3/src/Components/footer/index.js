import React from "react";

import { AppBar, Typography, Box } from "@material-ui/core";

export default function Footer(props) {
  const { footnote, classes } = props;
  return (
    <AppBar position="relative">
      <Box display="flex" justifyContent="justify" alignContent="justify">
        {footnote ? (
          <Typography className={classes.footnote} align="center" variant="h5">
            {footnote}
          </Typography>
        ) : null}
        <Typography className={classes.footnote} align="center" variant="h5">
          {new Date().toLocaleDateString()}
        </Typography>
      </Box>
    </AppBar>
  );
}
