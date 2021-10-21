import React, { forwardRef, useContext } from "react";
import Brightness4Icon from "@material-ui/icons/Brightness4";
import Tooltip from "../tooltip";

export default function Header({ changeTheme, title, subhead }) {
  const theme = useContext(ThemeContext);
  return (
    <div style={{ position: "relative" }}>
      {title ? (
        <h1
          style={{
            color: theme.palette.text_primary,
            textAlign: "center",
          }}
        >
          {title}
        </h1>
      ) : null}
      <Tooltip title="Change theme" placement="bottom-end">
        <button onClick={changeTheme}>Change your theme</button>
      </Tooltip>
      {subhead ? (
        <p
          style={{
            color: theme.palette.primary.sub,
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
