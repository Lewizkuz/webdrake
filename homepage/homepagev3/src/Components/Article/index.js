import React from "react";
import TextBox from "../TextBox";
export default function Article({ head, children, reference, ...other }) {
  return (
    <TextBox {...other} ref={reference}>
      {head ? (
        <h1
          style={{
            color: theme.palette.primary.text,
            textAlign: "center",
            margin: "0",
          }}
        >
          {head}
        </h1>
      ) : null}
      <ht />
      {children}
    </TextBox>
  );
}
