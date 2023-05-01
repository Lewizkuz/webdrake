import { useContext } from "react";
import { ThemeContext } from "./contexts/themeContext";

type Props = {
  children?: JSX.Element | JSX.Element[] | string | null;
  image?: string;
};

export function Box({ children, ...other }: Props) {
  const theme = useContext(ThemeContext);
  return (
    <div
      style={{
        color: theme.palette.primary.main,
        backgroundColor: theme.palette.paper,
      }}
      {...other}
    >
      {children || null}
    </div>
  );
}
