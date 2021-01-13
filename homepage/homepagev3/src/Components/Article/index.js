import React, {forwardRef} from "react";
import {makeStyles} from "@material-ui/core";
import TextBox from "../../Components/TextBox";
const useStyles = makeStyles((theme) => ({
  head: {
    color: theme.palette.primary.text,
    textAlign: "center",
    margin: "0",
  },
  subhead: {
    color: theme.palette.primary.sub,
  },
  card: {
    boxShadow: theme.shadows[0],
    padding: theme.spacing(1),
  },
  image: {
    width: "100%",
    maxWidth: "300px",
  },
}));
const Article = ({head, children, reference, ...other}) => {
  const classes = useStyles();
  return (
    <TextBox {...other} ref={reference}>
      {head ? <h1 className={classes.head}>{head}</h1> : null}
      {children.map((e) => (
        <p>{e}</p>
      ))}
    </TextBox>
  );
};
export default forwardRef((props, ref) => (
  <Article {...props} reference={ref} />
));
