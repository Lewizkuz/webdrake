import React from "react";

export default function TextBox({ children, ...other }) {
  return (
    <div
      style={{
        boxShadow: theme.shadows[0],
        padding: theme.spacing(1),
      }}
      {...other}
    >
      {children}
    </div>
  );
}
