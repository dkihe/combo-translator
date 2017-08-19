import React, { Component } from 'react';

class Output extends Component{
	render(){
		return(
			<div id="output">
				<button className="btn" onClick={this.props.imageProp}>
					Translate!
				</button>
				<div className="images">
				</div>
			</div>
		)
	}
} 

export default Output;