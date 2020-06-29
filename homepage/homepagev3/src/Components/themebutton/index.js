import React from "react";
import PropTypes from "prop-types";
import { Button } from "@material-ui/core";

export default function ThemeButton(props) {
  const { theme, useTheme } = props;
  return (
    <Button onClick={useTheme(theme === "regular" ? "dark" : "regular")}>
      Change Theme
    </Button>
  );
}
ThemeButton.propTypes = {
  class: PropTypes.node,
  useTheme: PropTypes.func.isRequired,
  //	tabpanels: PropTypes.any.isRequired,
};
