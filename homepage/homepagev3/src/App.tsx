import { createElement, useCallback, useState } from "react";
import { Container, Footer, Graph, Header, NavBar, Page } from "./Components";
import { ThemeProvider } from "./Components/contexts/themeContext";
import { Tech } from "./pages/";
const { Examples, About, Intro } = Tech;
interface paletteObj {
  palette: {
    type: string;
    paper: string;
    box: string;
    primary: { main: string };
    secondary: { main: string };
    text_primary: { main: string };
    danger: { main: string };
    error: { main: string };
    success: { main: string };
  };
}

interface themeListTypes {
  light?: paletteObj;
  dark?: paletteObj;
}
const themeList = {
  light: {
    palette: {
      type: "light",
      paper: "#d4e5fb",
      background: "white",
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
      paper: "#18304e",
      background: "black",
      box: "#202e42",
      primary: { main: "#d3dde7" },
      secondary: { main: "red" },
      text_primary: { main: "#d1d5e1" },
      danger: { main: "yellow" },
      error: { main: "#6fc6e1" },
      success: { main: "green" },
    },
  },
};

interface toggleObjTypes {
  light: string;
  dark: string;
}

const toggleObj = {
  light: "dark",
  dark: "light",
};

const pageMap = {
  "landing":LandingPage,
"art":ArtPage,
"tech"TechPage,

}

const pageByType = (string)=>{
  if(!Object.hasOwn(pageMap, string))return "wtf happened here!?";
return createElement(,)

}


export default function App() {
  const [page, setPage] = useState<string>("landing");
  const [themeTag, setThemeTag] = useState<string>("light");

  const cycleThemes = useCallback((currentTheme: string) => {
    const realCurrentkey = currentTheme as keyof toggleObjTypes;
    if (!currentTheme) return;
    const nextTheme = toggleObj[realCurrentkey];
    setThemeTag(nextTheme);
  }, []);

  return (
    <ThemeProvider value={themeList[themeTag as keyof themeListTypes]}>
      <Page>
        {page === "landing" ? (
         
        ) : (
          <Container>
            <button
              onClick={() => {
                setPage(() => true);
              }}
            >
              back to landing
            </button>
            <Header
              title="Leevi Kukkonen"
              subhead="Webdrake"
              changeTheme={cycleThemes}
            />
            <NavBar
              tabheads={["About", "Introduction", "Examples"]}
              startindex={1}
            >
              <About />
              <Intro />
              <Examples />
            </NavBar>
            <Footer />
            <Graph />
          </Container>
        )}
      </Page>
    </ThemeProvider>
  );
}
