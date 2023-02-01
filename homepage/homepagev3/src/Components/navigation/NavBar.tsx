import PropTypes from "prop-types";
import Tabs from "./Tabs";

type NavBarTypes = {
  startindex?: number;
  children: (string | JSX.Element)[];
  tabheads: string[];
};
export function NavBar({
  startindex,
  children,
  tabheads,
  ...other
}: NavBarTypes) {
  return <Tabs {...other}>{tabheads.map((e, i) => [e, children[i]])}</Tabs>;
}
NavBar.propTypes = {
  class: PropTypes.node,
  tabheads: PropTypes.any.isRequired,
};
