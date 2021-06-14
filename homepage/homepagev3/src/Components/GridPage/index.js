import React from "react";
import {Grid} from "@material-ui/core";
// const useStyles = makeStyles({
//   container: {textAlign: "center", margin: "auto"},
// });
export default ({children, rows, childprops,   ...other}) => {
  // const classes = useStyles();
  return (
    <Grid container {...other}>
      {children ? (
        typeof children !== "string" && children.length > 1 ? (
          children.map((e, i) => (
            <Grid
              item
              key={i}
              {...rows[i]}
              {...childprops}
            >
              {e}
            </Grid>
          ))
        ) : (
          <Grid item xs={12} {...childprops}>
            {children}
          </Grid>
        )
      ) : null}
    </Grid>
  );
};
