import React, { useState, setState } from "react";
import PropTypes from "prop-types";

import {
  Typography,
  makeStyles,
  createMuiTheme,
  ThemeProvider,
  useMediaQuery,
  Button,
  CssBaseline,
  Box,
} from "@material-ui/core/";
import About from "./Pages/about";
import Examples from "./Pages/example";
import Intro from "./Pages/intro";
import {
  orange,
  blue,
  red,
  green,
  blueGrey,
  indigo,
  grey,
} from "@material-ui/core/colors";
import NavBar from "./Components/navbar";
import GridPage from "./Components/GridPage";
import Header from "./Components/header";
import Footer from "./Components/footer";

const darkTheme = createMuiTheme({
  palette: {
    type: "dark",
    primary: { main: blueGrey[800] },
  },
  spacing: 4,
});
const regularTheme = createMuiTheme({
  palette: {
    primary: { main: blue[500] },
    secondary: { main: orange[400] },
    text_primary: { main: blueGrey[800] },
    danger: { main: orange[500] },
    error: { main: red[500] },
    success: { main: green[500] },
  },

  spacing: 8,
});

const useStyles = makeStyles((theme) => ({
  head: {
    color: theme.palette.text_primary,
  },
  subhead: {
    color: theme.palette.primary.sub,
  },
  navbar: {
    color: theme.danger,
  },
}));
const App = (props) => {
  const classes = useStyles();
  const tabs = {
    heads: ["About", "Introduction", "Examples"],
    panels: [
      <About classes={classes}></About>,
      <Intro classes={classes}></Intro>,
      <Examples classes={classes}></Examples>,
    ],
  };
  return (
    <>
      <Header classes={classes} title={"Leevi Kukkonen"} subhead={"Webdrake"} />

      <NavBar
        class={classes.navbar}
        tabheads={tabs.heads}
        tabpanels={tabs.panels}
        startindex={1}
      ></NavBar>
      <Footer classes={classes} footnote={"Leevi Kukkonen"}></Footer>
    </>
  );
};

export default () => {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  );
};
