import React from "react";
import PropTypes from "prop-types";
import { Typography, AppBar } from "@material-ui/core";
import GridPage from "../../Components/GridPage";

export default function Footer(props) {
	const { title, subhead, classes } = props;
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
Footer.propTypes = {
	class: PropTypes.node,
	//	tabheads: PropTypes.any.isRequired,
	//	tabpanels: PropTypes.any.isRequired,
};
