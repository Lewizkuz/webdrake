import React, { useState } from "react";
import NavBar from "./Components/navbar";
import Header from "./Components/header";
import Footer from "./Components/footer";
import About from "./pages/about";
import Examples from "./pages/example";
import Intro from "./pages/intro";
import { ThemeProvider } from "./Components/contexts/themeprovider";
import Container from "./Components/Container.js";
import Landing from "./pages/landing";
const themes = {
  light: {
    palette: {
      type: "light",
      paper: "#d4e5fb",
      box: "white",
      primary: { main: "#363636" },
      secondary: { main: "#efca88" },
      text_primary: { main: "#1e1e1e" },
      danger: { main: "yellow" },
      error: { main: "red" },
      success: { main: "green" },
    },
  },
  dark: {
    palette: {
      type: "dark",
      paper: "#202e42",
      box: "#202e42",
      primary: { main: "blue" },
      secondary: { main: "red" },
      text_primary: { main: "#d1d5e1" },
      danger: { main: "yellow" },
      error: { main: "red" },
      success: { main: "green" },
    },
  },
};
const toggleObj = {
  light: "dark",
  dark: "light",
};
export default function App() {
  const [themeTag, setThemeTag] = useState("light");
  function cycleThemes(currentTheme) {
    const nextTheme = toggleObj[currentTheme];
    setThemeTag(nextTheme || null);
  }
  return (
    <ThemeProvider value={themes[themeTag]}>
      <Container>
        <Header
          title="Leevi Kukkonen"
          subhead="Webdrake"
          changeTheme={cycleThemes}
        />
        <NavBar
          tabheads={["Landing", "About", "Introduction", "Examples"]}
          startindex={1}
        >
          <Landing />
          <About />
          <Intro />
          <Examples />
        </NavBar>
        <Footer />
      </Container>
    </ThemeProvider>
  );
}
