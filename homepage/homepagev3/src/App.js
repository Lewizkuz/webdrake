import React, { useState, setState } from "react";

import {
	makeStyles,
	createMuiTheme,
	ThemeProvider,
	CssBaseline,
} from "@material-ui/core/";
import About from "./Pages/about";
import Examples from "./Pages/example";
import Intro from "./Pages/intro";
import { orange, blue, red, green, blueGrey } from "@material-ui/core/colors";
import NavBar from "./Components/navbar";
import Header from "./Components/header";
import Footer from "./Components/footer";

const darkTheme = createMuiTheme({
	palette: {
		type: "dark",
		primary: { main: blueGrey[800] },
		secondary: { main: orange[400] },
		text_primary: { main: blueGrey[800] },
		danger: { main: orange[500] },
		error: { main: red[500] },
		success: { main: green[500] },
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

	spacing: 8,
});

const useStyles = makeStyles((theme) => ({
	head: {
		color: theme.palette.text_primary,
	},
	subhead: {
		color: theme.palette.primary.sub,
	},
}));
const App = () => {
	const classes = useStyles();
	const tabs = {
		heads: ["About", "Introduction", "Examples"],
		panels: [<About />, <Intro />, <Examples />],
	};
	return (
		<>
			<Header title={"Leevi Kukkonen"} subhead={"Webdrake"} />
			<NavBar
				tabheads={tabs.heads}
				tabpanels={tabs.panels}
				startindex={1}
			></NavBar>
			<Footer />
		</>
	);
};

export default () => {
	return (
		<ThemeProvider theme={darkTheme}>
			<CssBaseline />
			<App />
		</ThemeProvider>
	);
};
