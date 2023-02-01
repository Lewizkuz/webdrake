import { createContext } from "react";
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
export const ThemeContext = createContext<paletteObj>({
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
});
export const ThemeProvider = ThemeContext.Provider;
