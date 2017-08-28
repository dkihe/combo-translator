import React, { Component } from 'react';

class Output extends Component{
	render(){
		return(
			<div id="output">
				<div>
					{this.props.imageProp}
				</div>
				<div className="images">
				</div>
			</div>
		)
	}
} 

export default Output;