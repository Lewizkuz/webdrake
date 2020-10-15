import React from "react";
import {
  AppBar,
  Typography,
  makeStyles,
  IconButton,
  Tooltip,
} from "@material-ui/core";
import Brightness4Icon from "@material-ui/icons/Brightness4";
import GridPage from "../GridPage";

const useStyles = makeStyles((theme) => ({
  head: {
    color: theme.palette.text_primary,
  },
  subhead: {
    color: theme.palette.primary.sub,
  },
  navbar: {
    color: theme.danger,
  },
}));
export default ({changeTheme, title, subhead}) => {
  const classes = useStyles();
  return (
    <AppBar position="relative">
      {title ? (
        <Typography className={classes.head} align="center" variant="h1">
          {title}
        </Typography>
      ) : null}
      <GridPage
        rows={[
          {xs: 12, sm: 2},
          {xs: 12, sm: 8},
          {xs: 12, sm: 2},
        ]}
      >
        <Tooltip title="Change theme" placement={"bottom-end"}>
          <IconButton onClick={changeTheme}>
            <Brightness4Icon />
          </IconButton>
        </Tooltip>
        {subhead ? (
          <Typography className={classes.subhead} align="center" variant="h5">
            {subhead}
          </Typography>
        ) : null}
      </GridPage>
    </AppBar>
  );
};
