import React, { Component } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { Grid, Button, Icon, Input, Dropdown } from 'semantic-ui-react';

const options = [
	{ key: 'streetfighter', text: 'Street Fighter', value: 'streetfighter' },
	{ key: 'tekken', text: 'Tekken', value: 'tekken' },
	{ key: 'mvci', text: 'Marvel vs Capcom: Infinite ', value: 'mvci' },
	{ key: 'dbfz', text: 'Dragon Ball FighterZ', value: 'dbfz' },
	{ key: 'bbtag', text: 'BlazBlue Cross Tag Battle', value: 'bbtag' },
	{ key: 'samsho', text: 'Samurai Shodown', value: 'samsho' },
	{ key: 'unib', text: 'Under Night In-Birth', value: 'unib' },
	{ key: 'mk', text: 'Mortal Kombat 11', value: 'mk' },
	{ key: 'sc', text: 'Soul Calibur 6', value: 'sc' }
];

class Translator extends Component {
	render() {
		return (
			<Grid container textAlign="center" stackable>
				<Grid.Row>
					<Grid.Column>
						<Input
							action
							actionPosition="left"
							fluid
							size="large"
							type="search"
							placeholder="Example: cr.mk,qcf+p"
							value={this.props.valueProp}
							onChange={this.props.inputProp}
						>
							<CopyToClipboard text={this.props.copyProp}>
								<Button icon>
									Get URL!<Icon name="copy" />
								</Button>
							</CopyToClipboard>
							<Dropdown
								selection
								options={options}
								onChange={this.props.gameProp}
								value={this.props.currgameProp}
							/>
							<input />
						</Input>
					</Grid.Column>
				</Grid.Row>
			</Grid>
		);
	}
}

export default Translator;
