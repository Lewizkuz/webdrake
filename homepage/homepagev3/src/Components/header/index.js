import React, { forwardRef } from "react";
import { AppBar, makeStyles, IconButton, Tooltip } from "@material-ui/core";
import Brightness4Icon from "@material-ui/icons/Brightness4";
import GridPage from "../GridPage";

const useStyles = makeStyles((theme) => ({
	head: {
		color: theme.palette.text_primary,
		textAlign: "center",
	},
	subhead: {
		color: theme.palette.primary.sub,
	},
	navbar: {
		color: theme.danger,
	},
}));
const Header = ({ changeTheme, title, subhead }) => {
	const classes = useStyles();
	return (
		<AppBar position="relative">
			{title ? <h1 className={classes.head}>{title}</h1> : null}
			<GridPage
				rows={[
					{ xs: 12, sm: 2 },
					{ xs: 12, sm: 8 },
					{ xs: 12, sm: 2 },
				]}
			>
				<Tooltip title="Change theme" placement="bottom-end">
					<IconButton onClick={changeTheme}>
						<Brightness4Icon />
					</IconButton>
				</Tooltip>
				{subhead ? (
					<p className={classes.subhead} align="center" variant="h5">
						{subhead}
					</p>
				) : null}
			</GridPage>
		</AppBar>
	);
};
export default forwardRef((props, ref) => (
	<Header {...props} reference={ref} />
));
