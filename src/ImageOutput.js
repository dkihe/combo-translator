import React, { Component } from 'react';
import { Select, MenuItem, Grid, FormControl } from '@material-ui/core';
import * as styles from './styles.module.scss'

class ImageOutput extends Component {
	render() {
		return (
			<Grid item className={styles.imageoutput}>
				<div className="images">
					{this.props.imageProp}
				</div>
			</Grid>
		);
	}
}

export default ImageOutput;
