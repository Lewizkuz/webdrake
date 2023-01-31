import React, { useContext } from "react";
import ThemeContext from "../contexts/themeprovider";
import TextBox from "../TextBox";
export default function Article({ head, children, reference, ...other }) {
  const theme = useContext(ThemeContext);
  return (
    <TextBox {...other} ref={reference}>
      {head ? (
        <h1
          style={{
            color: theme.palette.text_primary.main,
            textAlign: "center",
            margin: "0",
          }}
        >
          {head}
        </h1>
      ) : null}
      <hr />
      {children}
    </TextBox>
  );
}
