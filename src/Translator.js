import React, { Component } from 'react';
import { Input, Container, Dropdown } from 'semantic-ui-react';

const options = [
  { key: 'streetfighter', text: 'Street Fighter', value: 'streetfighter' },
  { key: 'tekken', text: 'Tekken', value: 'tekken' },
	{ key: 'mvci', text: 'Marvel vs Capcom: Infinite ', value: 'mvci' },
	{ key: 'dbfz', text: 'Dragon Ball FighterZ', value: 'dbfz' },
	{ key: 'bbtag', text: 'BlazBlue Cross Tag Battle', value: 'bbtag' },
]

class Translator extends Component{
	render(){
		return (
			<Container textAlign='center'>
				<Input 
					fluid
					label={<Dropdown labeled options={options} onChange={this.props.gameProp} value={this.props.currgameProp} />}
					labelPosition='right'
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