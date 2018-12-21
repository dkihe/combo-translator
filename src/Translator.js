import React, { Component } from 'react';
import { Input, Container } from 'semantic-ui-react';

class Translator extends Component{
	render(){
		return (
			<Container textAlign='center'>
				<Input 
					fluid
					size='large'
					type='search'
					placeholder='Example: cr.mk,qcf+p'
					value={this.props.valueProp}
					onChange={this.props.inputProp}
				/>
			</Container>
		)
	}
}

export default Translator;