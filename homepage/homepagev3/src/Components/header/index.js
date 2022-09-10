import React, { useCallback, useContext } from "react";
import Tooltip from "../tooltip";
import ThemeContext from "../contexts/themeprovider";

export default function Header({ changeTheme, title, subhead }) {
  const theme = useContext(ThemeContext);
  const changeThemeSelection = useCallback(
    function () {
      changeTheme(theme.palette.type);
    },
    [changeTheme]
  );

  return (
    <div style={{ position: "relative" }}>
      {title ? (
        <h1
          style={{
            color: theme.palette.text_primary.main,
            textAlign: "center",
          }}
        >
          {title}
        </h1>
      ) : null}
      <Tooltip title="Change theme">
        <button onClick={() => changeThemeSelection()}>
          Change your theme
        </button>
      </Tooltip>
      {subhead ? (
        <p
          style={{
            color: theme.palette.primary.main,
          }}
          align="center"
          variant="h5"
        >
          {subhead}
        </p>
      ) : null}
    </div>
  );
}
