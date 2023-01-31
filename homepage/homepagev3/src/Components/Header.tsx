import React, { useCallback, useContext } from "react";
import { ThemeContext } from "./contexts/themeContext";
import { Tooltip } from "./Tooltip";

import React from "react";

type Props = {
  changeTheme?: () => string;
  title?: string;
  subhead?: string;
};

export function Header({ changeTheme, title, subhead }: Props) {
  const theme = useContext(ThemeContext);
  const changeThemeSelection = useCallback(
    function () {
      changeTheme(theme.palette.type);
    },
    [changeTheme, theme]
  );

  return (
    <div style={{ position: "relative", backgroundColor: "white" }}>
      {title ? (
        <h1
          style={{
            color: theme.palette.text_primary.main,
            textAlign: "center",
            margin: 0,
          }}
        >
          {title}
        </h1>
      ) : null}
      <Tooltip title="Change theme">
        <button onClick={changeThemeSelection}>Change your theme</button>
      </Tooltip>
      {subhead ? (
        <h5
          style={{
            color: theme.palette.primary.main,
            alignSelf: "center",
          }}
        >
          {subhead}
        </h5>
      ) : null}
    </div>
  );
}
