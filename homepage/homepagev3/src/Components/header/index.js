import React from "react";
import PropTypes from "prop-types";

import { AppBar, Typography } from "@material-ui/core";

export default function Header(props) {
  const { title, subhead, classes } = props;
  return (
    <AppBar position="relative">
      {title ? (
        <Typography className={classes.head} align="center" variant="h1">
          {title}
        </Typography>
      ) : null}
      {subhead ? (
        <Typography className={classes.subhead} align="center" variant="h5">
          {subhead}
        </Typography>
      ) : null}
    </AppBar>
  );
}
