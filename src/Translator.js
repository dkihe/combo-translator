import React, { Component } from 'react';

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
			</div>
		)
	}
}

export default Translator;