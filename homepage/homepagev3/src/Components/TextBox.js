import React from "react";
import {Typography, Paper} from "@material-ui/core";
export default ({children, ...other}) =>
  children && (
    <Paper elevation={0}>
      <Typography align="center" {...other}>
        {children}
      </Typography>
    </Paper>
  );
