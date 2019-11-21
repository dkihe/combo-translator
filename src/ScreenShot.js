import React, { Component } from 'react';

class ScreenShot extends Component {
	render() {
		return (
			<div id="screenshot">
				<button id="captureBtn" onClick={this.props.captureProp}>
					Preview
				</button>
			</div>
		);
	}
}

export default ScreenShot;
