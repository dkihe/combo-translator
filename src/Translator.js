import React, { Component } from 'react';
const list = require("./list.json")


class Translator extends Component{
	render(){
		return (
			<div id="translator">
				<input 
					type="search" 
					placeholder="translate . . ."
					value={this.props.valueProp}
                   	onChange={this.props.inputProp}
				/>
				<div>
					{this.props.valueProp}
				</div>
				<div>
					{this.props.testProp}
				</div>
			</div>
		)
	}
}

export default Translator;