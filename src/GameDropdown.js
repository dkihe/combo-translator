import { Select, MenuItem, Grid, FormControl } from "@material-ui/core";
import * as styles from "./styles.module.scss";
import { makeStyles } from "@material-ui/core/styles";

// Options object used to give value to the <MenuItems> component
const options = [
	{ key: "streetfighter", text: "Street Fighter", value: "streetfighter" },
	{ key: "tekken", text: "Tekken", value: "tekken" },
	{ key: "mvci", text: "Marvel vs Capcom: Infinite ", value: "mvci" },
	{ key: "dbfz", text: "Dragon Ball FighterZ", value: "dbfz" },
	{ key: "bbtag", text: "BlazBlue Cross Tag Battle", value: "bbtag" },
	{ key: "samsho", text: "Samurai Shodown", value: "samsho" },
	{ key: "unib", text: "Under Night In-Birth", value: "unib" },
	{ key: "mk", text: "Mortal Kombat 11", value: "mk" },
	{ key: "sc", text: "Soul Calibur 6", value: "sc" },
];

// Material UI styling
const useStyles = makeStyles({
	icon: {
		fill: "#ececec",
	},
});

// Drop down menu  component for games
const GameDropdown = (props) => {
	// Material UI styling
	const classes = useStyles();

	return (
		<Grid item className={styles.gamedropdown}>
			<FormControl variant="outlined" className={styles.form}>
				<Select onChange={props.gameProp} value={props.valueProp} className={styles.select} classes={{ root: classes.root, icon: classes.icon }}>
					{options.map((item) => (
						<MenuItem className={styles.menuitem} value={item.value} key={item.key}>
							{item.text}
						</MenuItem>
					))}
				</Select>
			</FormControl>
		</Grid>
	);
};

export default GameDropdown;
