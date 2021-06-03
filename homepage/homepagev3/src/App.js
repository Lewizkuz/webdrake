import React, {useState} from "react";
import {createMuiTheme, ThemeProvider, CssBaseline} from "@material-ui/core/";
import About from "./Pages/about";
import Examples from "./Pages/example";
import Intro from "./Pages/intro";
import {orange, blue, red, green, blueGrey} from "@material-ui/core/colors";
import NavBar from "./Components/navbar";
import Header from "./Components/header";
import Footer from "./Components/footer";

const darkTheme = createMuiTheme({
  palette: {
    type: "dark",
    primary: {main: blueGrey[800]},
    secondary: {main: orange[400]},
    text_primary: {main: blueGrey[800]},
    danger: {main: orange[500]},
    error: {main: red[500]},
    success: {main: green[500]},
  },
});
const regularTheme = createMuiTheme({
  palette: {
    primary: {main: blue[500]},
    secondary: {main: orange[400]},
    text_primary: {main: blueGrey[800]},
    danger: {main: orange[500]},
    error: {main: red[500]},
    success: {main: green[500]},
  },
});

export default () => {
  const [darkmode, setDarkmode] = useState(false);
  const tabs = ["About", "Introduction", "Examples"];
  return (
    <ThemeProvider theme={darkmode ? darkTheme : regularTheme}>
      <CssBaseline />
      <Header
        title="Leevi Kukkonen"
        subhead="Webdrake"
        changeTheme={() => setDarkmode(!darkmode)}
      />

      <NavBar tabheads={tabs} startindex={1}>
        <About />
        <Intro />
        <Examples />
      </NavBar>
      <Footer />
    </ThemeProvider>
  );
};
