import React from "react";
import {Box, makeStyles} from "@material-ui/core";
import GridPage from "../../Components/GridPage";
import TextBox from "../../Components/TextBox";
const useStyles = makeStyles({
  image: {textAlign: "center", margin: "auto"},
});
export default function About() {
  const classes = useStyles();
  return (
    <Box margin="auto" width={[1, 1, 1, 3 / 4, 1 / 2]}>
      <GridPage
        spacing={2}
        rows={[
          {xs: 12, sm: 4},
          {xs: 12, sm: 8},
        ]}
        nocenter
      >
        <img
          alt="profile"
          src="../../../logo.svg"
          className={classes.image}
          key={0}
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
          nocenter
        >
          {["Hello", "Hello", "Hello", "Hello"].map((e, i) => (
            <TextBox key={i + 1}>{e}</TextBox>
          ))}
        </GridPage>
      </GridPage>
    </Box>
  );
}
