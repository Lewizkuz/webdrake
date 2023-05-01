import { ReactNode, useContext } from "react";
import { ThemeContext } from "./contexts/themeContext";

type Props = { children?: ReactNode };
export function Page({ children }: Props) {
  const theme = useContext(ThemeContext);

  return (
    <div
      style={{
        backgroundColor: theme.palette.background,
        margin: 0,
        padding: 0,
        width: "50%",
      }}
    >
      {children}
    </div>
  );
}
