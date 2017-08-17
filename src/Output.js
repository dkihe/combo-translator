import React, { Component } from 'react';

class Output extends Component{
	constructor(props){
		super(props)

		this.state = {
			game: ''
		}
	}

	render(){
		return(
			<div>
				{this.props.game}
			</div>
		)
	}
} 

export default Output;