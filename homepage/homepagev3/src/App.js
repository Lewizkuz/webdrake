import React from "react";
import {
	Container,
	Typography,
	Tabs,
	Tab,
	withStyles,
	createStyles,
} from "@material-ui/core/";
import "./App.css";

const theme = createStyles({
	root: {
		display: "flex",
	},
});

const App = () => {
	return (
		<Container accent className="App">
			<Typography>Hello world</Typography>{" "}
			<Tabs>
				<Tab label="Item One" />
				<Tab label="Item Two" />
				<Tab label="Item Three" />
			</Tabs>
		</Container>
	);
};

export default withStyles(App);
