import React, { useContext } from "react";
import ThemeContext from "../contexts/themeprovider";
export default function Container({ children }) {
  const theme = useContext(ThemeContext);
  return (
    <div
      style={{
        backgroundColor: theme.palette.paper,
        margin: 0,
        padding: 0,
      }}
    >
      {children}
    </div>
  );
}
