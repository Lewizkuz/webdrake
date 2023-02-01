import { TextBox } from "./TextBox";

type Props = { head?: string; children?: string | JSX.Element | JSX.Element[] };

export function Article({ head, children, ...other }: Props) {
  return <TextBox {...other}>{children}</TextBox>;
}
