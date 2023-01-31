import React, { useContext } from "react";
import { ThemeContext } from "./contexts/themeContext";
import { TextBox } from "./TextBox";

type Props = { head?: string; children?: JSX.Element };

export function Article({ head, children, ...other }: Props) {
  const theme = useContext(ThemeContext);
  return (
    <TextBox {...other}>
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
