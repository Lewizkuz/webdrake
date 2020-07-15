import React from "react";
import PropTypes from "prop-types";
import { Typography, useTheme, Card, CardContent } from "@material-ui/core";
import GridPage from "../../Components/GridPage";
const styles = (theme) => ({});
export default function About(props) {
	const theme = useTheme();
	const lorem =
		"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque massa magna, condimentum et ante ut, cursus cursus sem. Sed ut pulvinarmassa. Aliquam mi urna, rutrum eu tincidunt quis, tempus ac sem. Fuscesodales massa eu porta vulputate. Cras turpis sem, blandit et eleifendsed, consectetur ac nibh. Ut dolor tellus, sollicitudin id feugiatvitae, pretium sed augue. Duis quis nulla sit amet odio pellentesquemalesuada nec nec ligula. Nam consectetur ante nec ligula mollismaximus. Quisque pulvinar felis vel faucibus malesuada. Cras posuerevenenatis urna porttitor tristique. In nibh eros, posuere sit amettempor nec, ultricies nec ante. Donec pharetra, libero ut maximuspulvinar, sapien metus euismod ipsum, in congue odio ex et mi. Nullamfinibus dolor ut nisl gravida commodo. Vivamus suscipit vitae mi etelementum. Donec eleifend eleifend libero, et blandit diam vulputate sitamet. Nulla porta malesuada quam ut tempor. Etiam vitae facilisistortor, a dignissim orci. Pellentesque quis est in libero temporfringilla. Nam fermentum porta arcu, eget congue felis consequat a. Duisvestibulum condimentum magna, eu eleifend elit tincidunt id. Aliquamnisi elit, mollis sit amet tincidunt facilisis, tempus a turpis. Maurisauctor, mi facilisis laoreet facilisis, enim orci fringilla urna, idlacinia justo mi et quam. Donec fringilla ac leo non blandit. In auctorelit et aliquam eleifend. Integer at leo nisl. Vestibulum ante ipsumprimis in faucibus orci luctus et ultrices posuere cubilia curae; Fuscefacilisis turpis non eros scelerisque, eu vehicula elit cursus. Integerquis semper neque, id tristique risus. Nam nulla dui, mollis euscelerisque quis, semper posuere dui. Aenean in lacinia tortor,fringilla ullamcorper enim. Integer volutpat in erat sed rhoncus.Maecenas viverra tincidunt magna, sed efficitur nibh mattis quis.Quisque pharetra velit tellus. Proin mauris odio, suscipit nec metus id,rhoncus eleifend nunc. Pellentesque fringilla nec justo nec consequat.Donec vulputate urna pretium elit ultricies tincidunt. Vivamus sit ametmollis velit. Etiam nec dignissim neque, ut vulputate sapien. Interdumet malesuada fames ac ante ipsum primis in faucibus. Nulla non tristiqueex. Cras ac magna eget eros sollicitudin elementum. Nam luctus lorem arisus venenatis, nec placerat urna accumsan. Nullam rutrum, tortor etconsectetur mattis, libero urna tempor urna, ut aliquet sem ante atodio. Aenean pharetra, lorem porta ullamcorper pulvinar, dui urnafeugiat ex, sed tincidunt lectus lorem vitae sem. Fusce nec risus dui.Nulla at neque erat. Morbi finibus mollis venenatis. Quisque nonplacerat nisi. Duis egestas felis vel dui euismod, eget dapibus neque varius. Mauris nec libero nibh. Sed ornare ultrices magna, sit ametconsectetur felis pulvinar eu. Proin ornare ex ultrices magna vestibulumviverra. Curabitur porta feugiat odio, ornare laoreet massa dapibus vel.Ut tempor sem in velit facilisis dapibus. Nunc pharetra enim vitaelectus lacinia, eget laoreet lorem scelerisque. Suspendisse fringillarisus erat, id placerat quam ultrices ac. Aliquam nibh massa, porttitornec ante non, eleifend commodo quam. Phasellus varius dui eget dictumcondimentum. Pellentesque sapien tortor, hendrerit vel dui tempor,tempor venenatis mi. Phasellus elementum nulla at rutrum rhoncus.Vestibulum vulputate velit sit amet eros interdum dapibus quis ac nibh.Mauris placerat accumsan lectus at cursus. Etiam laoreet tortor et estsemper, at auctor eros interdum. Nam eget scelerisque arcu. Nullafacilisi. Nullam ipsum nisl, facilisis eget pretium vel, ultrices sitamet mi. Vivamus luctus, massa a";
	return (
		<GridPage
			rows={[
				{ xs: 12, sm: 6 },
				{ xs: 12, sm: 6 },
				{ xs: 12 },
				{ xs: 12, sm: 6 },
			]}
			spacing={theme.spacing(1)}
		>
			<Card p={theme.spacing(1)}>
				<CardContent>
					<Typography>{lorem}</Typography>
				</CardContent>
			</Card>

			<Card spacing={theme.spacing(1)}>
				<CardContent>
					<Typography>{lorem}</Typography>
				</CardContent>
			</Card>

			<Card spacing={theme.spacing(1)}>
				<CardContent>
					<Typography>{lorem}</Typography>
				</CardContent>
			</Card>
		</GridPage>
	);
}
