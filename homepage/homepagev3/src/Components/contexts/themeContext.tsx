import { createContext, useState } from "react";
interface paletteObj {
  palette: {
    type: string;
    paper: string;
    background: string;
    box: string;
    primary: { main: string };
    secondary: { main: string };
    text_primary: { main: string };
    danger: { main: string };
    error: { main: string };
    success: { main: string };
  };
}

const ThemeContext = createContext<paletteObj>({
  palette: {
    type: "light",
    paper: "#d4e5fb",
    background: "#d4e5fb",
    box: "white",
    primary: { main: "#363636" },
    secondary: { main: "#efca88" },
    text_primary: { main: "#1e1e1e" },
    danger: { main: "yellow" },
    error: { main: "red" },
    success: { main: "green" },
  },
});

type ThemeProviderProto = {
  children?: JSX.Element | JSX.Element[] | string | null;
};

const ThemeProvider = ({ children }: ThemeProviderProto) => {
  // the value that will be given to the context
  const [currentTheme, setCurrentTheme] = useState("english");

  return (
    // the Provider gives access to the context to its children
    <ThemeContext.Provider value={{ currentTheme, setCurrentTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export { ThemeContext, ThemeProvider };
