import { ReactNode, useContext } from "react";
import { ThemeContext } from "./contexts/themeContext";

type Props = { children?: ReactNode };
export function Container({ children }: Props) {
  const theme = useContext(ThemeContext);

  return (
    <div
      style={{
        margin: 0,
        padding: 0,
        backgroundColor: theme.palette.paper,
        minHeight: "100vh",
        width: "100%",
        maxWidth: "1200px",
      }}
    >
      {children}
    </div>
  );
}
