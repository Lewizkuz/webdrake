import React from "react";
import {
  makeStyles,
  Paper,
} from "@material-ui/core";
const useStyles = makeStyles((theme) => ({
  card: {
    boxShadow: theme.shadows[0],
    padding: theme.spacing(1),
  },
  image: {
    width: "100%",
    maxWidth: "300px",
  },
}));
const ImageCard =({children, image, ...other}) => {
  const classes = useStyles();
  return( <Paper className={classes.card} {...other}>
  <img
    alt="profile"
    src={image}
    className={classes.image}
  />
  <div>
      {children}
      </div>
      </Paper>)
};
export default ImageCard;
