import { ReactNode, useContext } from "react";
import { ThemeContext } from "./contexts/themeContext";

type Props = { children?: ReactNode };
export function Container({ children }: Props) {
  const theme = useContext(ThemeContext);
  return (
    <div
      style={{
        backgroundColor: theme.palette.paper,
        margin: 0,
        padding: 0,
      }}
    >
      {children}
    </div>
  );
}
