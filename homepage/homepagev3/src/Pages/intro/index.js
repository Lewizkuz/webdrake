import React from "react";
import PropTypes from "prop-types";
import { Grid, Typography } from "@material-ui/core";

export default function Intro(props) {
	const obj = [
		{ content: <Typography>ok</Typography>, mid: 4, sm: 6 },
		{ content: <Typography>nice</Typography>, mid: 4, sm: 6 },
		{ content: <Typography>nice</Typography>, mid: 4, sm: 6 },
		{ content: <Typography>sweet</Typography>, mid: 12 },
		{ content: <Typography>it works</Typography> },
	];
	const printGrid = (objects) =>
		objects.map((ele) => (
			<Grid
				item
				xs={12}
				sm={ele.sm ? ele.sm : null}
				md={ele.mid ? ele.mid : null}
			>
				{ele.content}
			</Grid>
		));

	return <Grid container>{printGrid(obj)}</Grid>;
}
Intro.propTypes = {
	class: PropTypes.node,
	//	tabheads: PropTypes.any.isRequired,
	//	tabpanels: PropTypes.any.isRequired,
};
