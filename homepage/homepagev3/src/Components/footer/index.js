import React from "react";
import { AppBar, Typography, makeStyles } from "@material-ui/core";

const footerStyles = makeStyles({
	footerbar: { textAlign: "center" },
});
const Footer = ({ ...others }) => {
	const classes = footerStyles();
	return (
		<AppBar position="relative" className={classes.footerbar} {...others}>
			<Typography className={classes.footnote} align="center">
				Leevi Kukkonen
			</Typography>
			<Typography className={classes.footnote} align="center">
				{new Date().toLocaleDateString()}
			</Typography>
		</AppBar>
	);
};
export default Footer;
