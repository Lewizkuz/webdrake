import React, { useContext } from "react";
import ThemeContext from "../contexts/themeprovider";

export default function TextBox({ children, ...other }) {
  const theme = useContext(ThemeContext);
  return (
    <div
      style={{
        padding: "15px",
      }}
      {...other}
    >
      {children}
    </div>
  );
}
