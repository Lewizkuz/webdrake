import { useContext } from "react";
import { ThemeContext } from "./contexts/themeContext";

type Props = {};

export function Footer({ ...others }: Props) {
  const theme = useContext(ThemeContext);
  return (
    <div
      style={{
        textAlign: "center",
        display: "flex",
        justifyContent: "center",
        color: theme.palette.text_primary.main,
      }}
      {...others}
    >
      <p style={{ textAlign: "center" }}>Leevi Kukkonen</p>
      <p style={{ textAlign: "center" }}>{new Date().toLocaleDateString()}</p>
    </div>
  );
}
