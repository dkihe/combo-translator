import React, { Component } from 'react';
const list = require("./list.json")

class Output extends Component{
	render(){
		return(
			<div id="output">
				<button onClick={this.props.imageProp}>
					Translate!
				</button>
				<div className="images">
				</div>
			</div>
		)
	}
} 

export default Output;