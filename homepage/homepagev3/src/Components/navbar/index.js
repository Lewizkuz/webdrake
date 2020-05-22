import React from "react";
import PropTypes from "prop-types";
import { Tabs, Tab, Typography, Box } from "@material-ui/core";
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
			{value === index && (
				<Box p={3}>
					<Typography>{children}</Typography>
				</Box>
			)}
		</div>
	);
}

TabPanel.propTypes = {
	children: PropTypes.node,
	index: PropTypes.any.isRequired,
	value: PropTypes.any.isRequired,
};
export default function Navbar(props) {
	const [value, setValue] = React.useState(props.startindex);
	const handleChange = (event, newValue) => {
		setValue(newValue);
	};
	const x = props.tabheads;
	return (
		<>
			<Tabs
				className={props.class}
				value={value}
				indicatorColor="primary"
				textColor="primary"
				onChange={handleChange}
				centered
			>
				{x ? (
					x.map((element) => {
						//	console.log(element, x);
						return <Tab label={element}></Tab>;
					})
				) : (
					<>
						<Tab label="Please define tabheads= "></Tab>
						<Tab label="['first','second','third']"></Tab>
					</>
				)}
			</Tabs>
			<TabPanel value={value} index={0}>
				Item One
			</TabPanel>
			<TabPanel value={value} index={1}>
				Item Two
			</TabPanel>
			<TabPanel value={value} index={2}>
				Item Three
			</TabPanel>
		</>
	);
}
Navbar.propTypes = {
	class: PropTypes.node,
	tabheads: PropTypes.any.isRequired,
};
