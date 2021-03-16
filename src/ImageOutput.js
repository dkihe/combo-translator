import React, { Component } from 'react';
import { Select, MenuItem, Grid, FormControl } from '@material-ui/core';
import * as styles from './styles.module.scss'

class ImageOutput extends Component {
	render() {
		return (
			<Grid item xs={12} className={styles.imageoutput}>
				<div className="images" style={{ marginTop: '5em' }}>
					{this.props.imageProp}
				</div>
			</Grid>
		);
	}
}

export default ImageOutput;
