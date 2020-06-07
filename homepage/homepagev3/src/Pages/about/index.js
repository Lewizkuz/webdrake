import React from "react";
import PropTypes from "prop-types";
import { Grid } from "@material-ui/core";

export default function About(props) {
	return (
		<Grid container>
			<Grid item xs={12}>
				hello
			</Grid>
		</Grid>
	);
}
About.propTypes = {
	class: PropTypes.node,
	//	tabheads: PropTypes.any.isRequired,
	//	tabpanels: PropTypes.any.isRequired,
};
