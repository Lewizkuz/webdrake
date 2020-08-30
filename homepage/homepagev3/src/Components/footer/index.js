import React from "react";

import { AppBar, Typography, Box, makeStyles } from "@material-ui/core";
const footerStyles = makeStyles({
	footerbar: {},
});
const Footer = () => {
	const classes = footerStyles();
	return (
		<AppBar position="relative" className={classes.footerbar}>
			<Box>
				<Typography className={classes.footnote} align="center">
					Leevi Kukkonen
				</Typography>
				<Typography className={classes.footnote} align="center">
					{new Date().toLocaleDateString()}
				</Typography>
			</Box>
		</AppBar>
	);
};
export default Footer;
