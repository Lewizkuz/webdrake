import React from "react";
import PropTypes from "prop-types";
import { Tabs, Tab, Box, makeStyles } from "@material-ui/core";
function TabPanel(props) {
	const { children, value, index, ...other } = props;

	return (
		<div
			role="tabpanel"
			hidden={value !== index}
			id={`simple-tabpanel-${index}`}
			aria-labelledby={`simple-tab-${index}`}
			{...other}
		>
			{value === index && <Box p={3}>{children}</Box>}
		</div>
	);
}

TabPanel.propTypes = {
	children: PropTypes.node,
	index: PropTypes.any.isRequired,
	value: PropTypes.any.isRequired,
};
const tabstyles = makeStyles({
	content: {
		minHeight: "calc(45px -100vh)",
	},
});
export default function Navbar(props) {
	const { startindex, children, tabpanels, tabheads, ...other } = props;
	const [value, setValue] = React.useState(startindex);
	const classes = tabstyles();
	const handleChange = (event, newValue) => {
		setValue(newValue);
	};
	const navheads = tabheads;
	const panels = tabpanels;
	return (
		<div {...other}>
			<Tabs value={value} onChange={handleChange} centered>
				{navheads ? (
					navheads.map((element, index) => {
						return <Tab label={element} key={index}></Tab>;
					})
				) : (
					<Tab label="Please define tabheads= "></Tab>
				)}
			</Tabs>
			{panels
				? panels.map((element, index) => {
						return (
							<TabPanel value={value} key={index} index={index}>
								<div className={classes.content}>{element}</div>
							</TabPanel>
						);
				  })
				: null}
		</div>
	);
}
Navbar.propTypes = {
	class: PropTypes.node,
	tabheads: PropTypes.any.isRequired,
	tabpanels: PropTypes.any.isRequired,
};
