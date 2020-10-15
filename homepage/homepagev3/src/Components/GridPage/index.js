import React from "react";
import {Grid, makeStyles} from "@material-ui/core";
const useStyles = makeStyles({
  container: {textAlign: "center", margin: "auto"},
});
export default ({children, rows, nocenter, ...other}) => {
  const classes = useStyles();
  return (
    <Grid container {...other}>
      {children ? (
        typeof children !== "string" && children.length > 1 ? (
          children.map((e, i) => (
            <Grid
              item
              key={i}
              {...rows[i]}
              className={nocenter && classes.container}
            >
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
};
