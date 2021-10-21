import React, { createContext, useState } from "react";
import NavBar from "./Components/navbar";
import Header from "./Components/header";
import Footer from "./Components/footer";
import About from "./pages/about";
import Examples from "./pages/example";
import Intro from "./pages/intro";
const themes = {
  light: {
    palette: {
      primary: { main: blue[500] },
      secondary: { main: orange[400] },
      text_primary: { main: blueGrey[800] },
      danger: { main: orange[500] },
      error: { main: red[500] },
      success: { main: green[500] },
    },
  },
  dark: {
    palette: {
      type: "dark",
      primary: { main: blueGrey[800] },
      secondary: { main: orange[400] },
      text_primary: { main: blueGrey[800] },
      danger: { main: orange[500] },
      error: { main: red[500] },
      success: { main: green[500] },
      background: { paper: blueGrey[800] },
    },
  },
};
function uniquetheme(s) {
  switch (s) {
    case "light":
      return regularTheme;
    case "dark":
      return darkTheme;
    default:
      return regularTheme;
  }
}
const useStyles = makeStyles((theme) => ({ root: { height: "100%" } }));
const ThemeContext = createContext(themes.light);
export default function App() {
  const [theme, setTheme] = useState("light");
  function cycleThemes(currentTheme) {
    switch (currentTheme) {
      case "light":
        return "dark";

      case "dark":
        return "light";

      default:
        return "light";
    }
  }
  const classes = useStyles();
  // <ThemeProvider theme={uniquetheme(theme)}>

  return (
    <div className={classes.root}>
      <Header
        title="Leevi Kukkonen"
        subhead="Webdrake"
        changeTheme={cycleThemes}
      />
      <NavBar tabheads={["About", "Introduction", "Examples"]} startindex={1}>
        <About />
        <Intro />
        <Examples />
      </NavBar>
      <Footer />
    </div>
  );
}
