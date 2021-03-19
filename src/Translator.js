import { TextField, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import * as styles from "./styles.module.scss";

// Material UI styling
const useStyles = makeStyles({
	root: {
		"& > *": {
			color: "#ececec",
		},
	},
});

// User input component
const Translator = (props) => {
	const classes = useStyles();
	return (
		<Grid container spacing={0} className={styles.translator}>
			<TextField classes={{ root: classes.root }} className={styles.textfield} label="Combo" value={props.valueProp} onChange={props.inputProp} />
		</Grid>
	);
};

export default Translator;
