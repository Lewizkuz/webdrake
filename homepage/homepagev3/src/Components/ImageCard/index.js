import React from "react";

export default function ImageCard({ children, image, ...other }) {
  return (
    <div
      style={{
        boxShadow: theme.shadows[0],
        padding: theme.spacing(1),
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
