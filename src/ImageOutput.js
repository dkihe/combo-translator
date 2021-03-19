import { Grid } from "@material-ui/core";
import * as styles from "./styles.module.scss";

// Image component
const ImageOutput = (props) => {
	return (
		<Grid item className={styles.imageoutput}>
			<div id="images" className={styles.images}>
				{props.imageProp}
			</div>
		</Grid>
	);
};

export default ImageOutput;
