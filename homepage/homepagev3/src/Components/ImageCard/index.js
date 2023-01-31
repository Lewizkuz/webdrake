import React, { useContext } from "react";
import ThemeContext from "../contexts/themeprovider";

export default function ImageCard({ children, image, ...other }) {
  const theme = useContext(ThemeContext);
  return (
    <div
      style={{
        padding: "15px",
        backgroundColor: theme.palette.secondary.main,
      }}
      {...other}
    >
      <img
        alt="profile"
        src={image}
        style={{
          width: "100%",
          maxWidth: "300px",
        }}
      />
      {children}
    </div>
  );
}
