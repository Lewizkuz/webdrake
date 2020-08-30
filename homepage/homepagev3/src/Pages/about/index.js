import React from "react";
import { Typography, Box, Paper, makeStyles } from "@material-ui/core";
import GridPage from "../../Components/GridPage";
const pageStyles = makeStyles({});

const About = () => {
	const classes = pageStyles();
	return (
		<Box margin="auto" width={[1, 1, 1, 3 / 4, 1 / 2]}>
			<GridPage
				spacing={2}
				rows={[
					{ xs: 12, md: 6 },
					{ xs: 12, md: 6 },
					{ xs: 12, md: 6 },
					{ xs: 12, md: 6 },
				]}
			>
				<img alt="profile picture" src="../../logo.svg" />
				<Paper elevation={0}>
					<Typography align="center">Hello</Typography>
				</Paper>
				<Paper elevation={0}>
					<Typography align="center">Hello</Typography>
				</Paper>
				<Paper elevation={0}>
					<Typography align="center">Hello</Typography>
				</Paper>
			</GridPage>
		</Box>
	);
};
export default About;
