import React, { useContext } from "react";
import { ThemeContext } from "./contexts/themeContext";

export function TextBox({ children, ...other }) {
  const theme = useContext(ThemeContext);
  return (
    <div
      style={{
        color: theme.palette.primary.main,
        backgroundColor: theme.palette.paper,
      }}
      {...other}
    >
      {children}
    </div>
  );
}
