import React from "react";
import {Box, makeStyles} from "@material-ui/core";
import GridPage from "../../Components/GridPage";
import Logo from "../../logo512.png";
import Article from "../../Components/Article";
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
const text = ["Art", "Programming", "Hobbies", "Comics"];
const About = () => {
  const classes = useStyles();
  return (
    <Box margin="auto" width={[1, 1, 1, 3 / 4, 1 / 2]}>
      <GridPage
        spacing={2}
        rows={[
          {xs: 12, sm: 4},
          {xs: 12, sm: 8},
        ]}
      >
        <img alt="profile" src={Logo} key={0} className={classes.image} />
        <GridPage
          spacing={2}
          rows={[
            {xs: 12, sm: 6},
            {xs: 12, sm: 6},
            {xs: 12, sm: 6},
            {xs: 12, sm: 6},
            {xs: 12, sm: 6},
            {xs: 12, sm: 6},
          ]}
        >
          {text.map((s) => (
            <Article head={s}>
              {text.map((e, i) => (
                <p key={i}>{e}</p>
              ))}
            </Article>
          ))}
        </GridPage>
      </GridPage>
    </Box>
  );
};
export default About;
