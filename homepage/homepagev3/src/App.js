import React from "react";
import {
	Container,
	Typography,
	makeStyles,
	createMuiTheme,
	ThemeProvider,
} from "@material-ui/core/";
import { orange } from "@material-ui/core/colors";
import NavBar from "./Components/navbar";
import "./App.css";

const theme = createMuiTheme({
	status: {
		danger: orange[500],
	},
	palette: {
		primary: {
			main: orange[400],
		},
	},
});

const useStyles = makeStyles((theme) => ({
	root: {
		color: theme.palette.primary,
	},
	navbar: {
		color: theme.status.danger,
	},
}));
const tabs = ["About", "Introduction", "Examples"];
const App = () => {
	const classes = useStyles();
	return (
		<Container className={classes.root}>
			<Typography className={classes.root} align="center" variant="h1">
				Hello world
			</Typography>
			<NavBar class={classes.navbar} tabheads={tabs} startindex={1}></NavBar>
		</Container>
	);
};

export default () => {
	return (
		<ThemeProvider theme={theme}>
			<App />
		</ThemeProvider>
	);
};
