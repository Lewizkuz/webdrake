import React from "react";
import {
	Typography,
	makeStyles,
	createMuiTheme,
	ThemeProvider,
} from "@material-ui/core/";
import About from "./Pages/about";
import Examples from "./Pages/example";
import Intro from "./Pages/intro";
import { orange, blue, red, green, blueGrey } from "@material-ui/core/colors";
import NavBar from "./Components/navbar";

const theme = createMuiTheme({
	status: {
		danger: orange[500],
		error: red[500],
		success: green[500],
	},
	palette: {
		primary: {
			main: blue[400],
			sub: blue[400],
		},
		secondary: {
			main: orange[400],
			sub: blue[400],
		},
		dark: {
			main: blueGrey[400],
			sub: blue[400],
		},
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
		color: theme.status.danger,
	},
}));

const App = () => {
	const classes = useStyles();
	const tabs = {
		heads: ["About", "Introduction", "Examples"],
		panels: [
			<About classes={classes}></About>,
			<Intro></Intro>,
			<Examples></Examples>,
		],
	};
	return (
		<div>
			<Typography className={classes.head} align="center" variant="h1">
				Leevi Kukkonen
			</Typography>
			<Typography className={classes.subhead} align="center" variant="h5">
				Leevi Kukkonen
			</Typography>
			<NavBar
				class={classes.navbar}
				tabheads={tabs.heads}
				tabpanels={tabs.panels}
				startindex={1}
			></NavBar>
		</div>
	);
};

export default () => {
	return (
		<ThemeProvider theme={theme}>
			<App />
		</ThemeProvider>
	);
};
