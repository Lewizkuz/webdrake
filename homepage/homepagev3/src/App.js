import React from "react";
import ReactDOM from "react-dom";
import { Container, Typography, Tabs, Tab } from "@material-ui/core/";
import "./App.css";

function App() {
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
}

export default App;
