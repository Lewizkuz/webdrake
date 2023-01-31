import React from "react";

export function Footer({ ...others }) {
  return (
    <div style={{ textAlign: "center", position: "relative" }} {...others}>
      <p style={{ textAlign: "center" }}>Leevi Kukkonen</p>
      <p style={{ textAlign: "center" }}>{new Date().toLocaleDateString()}</p>
    </div>
  );
}
