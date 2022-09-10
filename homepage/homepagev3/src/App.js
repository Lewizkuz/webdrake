import React, { useState } from "react";
import NavBar from "./Components/navbar";
import Header from "./Components/header";
import Footer from "./Components/footer";
import About from "./pages/about";
import Examples from "./pages/example";
import Intro from "./pages/intro";
import { ThemeProvider } from "./Components/contexts/themeprovider";
const themes = {
  light: {
    palette: {
      type: "light",
      paper: "white",
      primary: { main: "blue" },
      secondary: { main: "red" },
      text_primary: { main: "black" },
      danger: { main: "yellow" },
      error: { main: "red" },
      success: { main: "green" },
    },
  },
  dark: {
    palette: {
      type: "dark",
      paper: "black",
      primary: { main: "blue" },
      secondary: { main: "red" },
      text_primary: { main: "white" },
      danger: { main: "yellow" },
      error: { main: "red" },
      success: { main: "green" },
    },
  },
};

export default function App() {
  const [themeTag, setThemeTag] = useState("light");
  function cycleThemes(currentTheme) {
    switch (currentTheme) {
      case "light":
        setThemeTag("dark");
        break;
      case "dark":
        setThemeTag("light");
        break;
      default:
        setThemeTag("light");
        break;
    }
  }
  return (
    <ThemeProvider value={themes[themeTag]}>
      <div>
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
    </ThemeProvider>
  );
}
