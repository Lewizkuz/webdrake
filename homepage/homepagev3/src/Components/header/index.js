import React from "react";

import { AppBar, Typography, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
	head: {
		color: theme.palette.text_primary,
	},
	subhead: {
		color: theme.palette.primary.sub,
	},
	navbar: {
		color: theme.danger,
	},
}));
export default function Header(props) {
	const { title, subhead } = props;
	const classes = useStyles();
	return (
		<AppBar position="relative">
			{title ? (
				<Typography className={classes.head} align="center" variant="h1">
					{title}
				</Typography>
			) : null}
			{subhead ? (
				<Typography className={classes.subhead} align="center" variant="h5">
					{subhead}
				</Typography>
			) : null}
		</AppBar>
	);
}
