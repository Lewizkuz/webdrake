import { Box } from "./Box";

type Props = { head?: string; children?: string | JSX.Element | JSX.Element[] };

export function Article({ head, children, ...other }: Props) {
  return <Box {...other}>{children}</Box>;
}
