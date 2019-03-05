import React, { Component } from 'react';
import {CopyToClipboard} from 'react-copy-to-clipboard';
import { Grid, Label, Select, Button, Icon, Input, Container, Dropdown } from 'semantic-ui-react';

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
			<Grid container textAlign='center' columns={1}>
				<Grid.Row>
					<Grid.Column mobile={16} tablet={16} computer={16} >
						<Input 
							action
							actionPosition='left'
							fluid
							size='large'
							type='search'
							placeholder='Example: cr.mk,qcf+p'
							value={this.props.valueProp}
							onChange={this.props.inputProp}
						>
							<CopyToClipboard text={this.props.copyProp}><Button icon>Get URL!<Icon name='copy'/></Button></CopyToClipboard>
							<Dropdown selection options={options} onChange={this.props.gameProp} value={this.props.currgameProp} />
							<input />
						</Input>
					</Grid.Column>
				</Grid.Row>
			</Grid>
		)
	}
}

export default Translator;