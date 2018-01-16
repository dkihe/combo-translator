import React, { Component } from 'react';

class Translator extends Component{
	render(){
		return (
			<div id="translator">
				<input 
					type="search" 
					placeholder="Example: cr.mk,qcf+p"
					value={this.props.valueProp}
                   	onChange={this.props.inputProp}
				/>
			</div>
		)
	}
}

export default Translator;