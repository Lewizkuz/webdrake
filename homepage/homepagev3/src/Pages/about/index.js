import React from "react";
import {Box, makeStyles} from "@material-ui/core";
import GridPage from "../../Components/GridPage";
import TextBox from "../../Components/TextBox";
import Logo from "../../logo512.png";
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
  image: {
    width: "100%",
    maxWidth: "300px",
  },
}));
  const  About = () =>{const classes = useStyles(); return <Box margin="auto" width={[1, 1, 1, 3 / 4, 1 / 2]}>
      <GridPage
        spacing={2}
        rows={[
          {xs: 12, sm: 4},
          {xs: 12, sm: 8},
        ]}
      >
        <img
          alt="profile"
          src={Logo}
          key={0}
          className={classes.image}
        />
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
          {["Hello", "Hello", "Hello", "Hello"].map((e, i) => (
            <TextBox key={i }>{e}</TextBox>
          ))}
        </GridPage>
      </GridPage>
    </Box>}
export default About;
