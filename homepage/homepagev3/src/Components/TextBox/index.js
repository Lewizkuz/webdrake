import React from "react";
import {Paper, makeStyles} from "@material-ui/core";
const useStyles = makeStyles((theme) => ({
  head: {
    color: theme.palette.text_primary,
  },
  subhead: {
    color: theme.palette.primary.sub,
  },
  card: {
    boxShadow: theme.shadows[0],
    padding: theme.spacing(1),
  },
}));
const TextBox = ({children, ...other}) => {
  const classes = useStyles();
  return (
    <Paper className={classes.card} {...other}>
      {children}
    </Paper>
  );
};
export default TextBox;
