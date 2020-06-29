import React, { useState } from "react";
import {
  Typography,
  makeStyles,
  createMuiTheme,
  ThemeProvider,
  useMediaQuery,
} from "@material-ui/core/";
import About from "./Pages/about";
import Examples from "./Pages/example";
import Intro from "./Pages/intro";
import { orange, blue, red, green, blueGrey } from "@material-ui/core/colors";
import NavBar from "./Components/navbar";
import GridPage from "./Components/GridPage";
import ThemeButton from "./Components/themebutton";

const darkTheme = createMuiTheme({
  palette: {
    primary: { main: blue[500] },
    secondary: { main: orange[400] },
    text_primary: { main: blueGrey[800] },
    danger: { main: orange[500] },
    error: { main: red[500] },
    success: { main: green[500] },
    type: "dark",
  },
  typography: {
    fontSize: 1,
  },
  spacing: 4,
});
const regularTheme = createMuiTheme({
  palette: {
    primary: { main: blue[500] },
    secondary: { main: orange[400] },
    text_primary: { main: blueGrey[800] },
    danger: { main: orange[500] },
    error: { main: red[500] },
    success: { main: green[500] },
  },

  spacing: 2,
});

const useStyles = makeStyles((theme) => ({
  head: {
    color: theme.palette.primary.main,
  },
  subhead: {
    color: theme.palette.primary.sub,
  },
  navbar: {
    color: theme.danger,
  },
}));

const App = (props) => {
  const { setTheme } = props;
  const classes = useStyles();
  const tabs = {
    heads: ["About", "Introduction", "Examples"],
    panels: [
      <About classes={classes}></About>,
      <Intro classes={classes}></Intro>,
      <Examples classes={classes}></Examples>,
    ],
  };
  return (
    <GridPage
      rows={[{ xs: 12 }, { xs: 10 }, { xs: 2 }, { xs: 12 }, { xs: 12 }]}
    >
      <Typography className={classes.head} align="center" variant="h1">
        Leevi Kukkonen
      </Typography>
      <Typography className={classes.subhead} align="center" variant="h5">
        Webdrake
      </Typography>
      <ThemeButton useTheme={(e) => setTheme(e)}></ThemeButton>
      <NavBar
        class={classes.navbar}
        tabheads={tabs.heads}
        tabpanels={tabs.panels}
        startindex={1}
      ></NavBar>
    </GridPage>
  );
};

export default () => {
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");
  const [theme, setTheme] = useState(
    prefersDarkMode ? darkTheme : regularTheme
  );
  return (
    <ThemeProvider theme={theme}>
      <App setTheme={() => setTheme()} />
    </ThemeProvider>
  );
};
