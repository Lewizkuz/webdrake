import React, { useState } from "react";
import { createMuiTheme, ThemeProvider, CssBaseline } from "@material-ui/core/";
import { orange, blue, red, green, blueGrey } from "@material-ui/core/colors";
import NavBar from "./Components/Navbar";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import About from "./Pages/About";
import Examples from "./Pages/Example";
import Intro from "./Pages/Intro";
const regularTheme = createMuiTheme({
	palette: {
		primary: { main: blue[500] },
		secondary: { main: orange[400] },
		text_primary: { main: blueGrey[800] },
		danger: { main: orange[500] },
		error: { main: red[500] },
		success: { main: green[500] },
	},
});
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
});
const uniquetheme = (s) => {
	switch (s) {
		case "light":
			return regularTheme;
		case "dark":
			return darkTheme;
		default:
			return regularTheme;
	}
};
export default () => {
	const [theme, setTheme] = useState("light");
	const tabs = ["About", "Introduction", "Examples"];
	return (
		<ThemeProvider theme={uniquetheme(theme)}>
			<CssBaseline />
			<Header
				title="Leevi Kukkonen"
				subhead="Webdrake"
				changeTheme={() => setTheme(theme === "light" ? "dark" : "light")}
			/>
			<NavBar tabheads={tabs} startindex={1}>
				<About />
				<Intro />
				<Examples />
			</NavBar>
			<Footer />
		</ThemeProvider>
	);
};
