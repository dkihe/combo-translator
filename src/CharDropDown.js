import React, { Component } from 'react';
import { Container, Dropdown, Image } from 'semantic-ui-react';

class CharDropDown extends Component {
	render() {
		let tempList = [];
		const dataProp = this.props.dataProp;
		const options = () => {
			for (let char in dataProp) {
				tempList.push({ key: char, text: char, value: char });
			}
			return tempList;
		};

		return (
			<Container centered>
				<Dropdown
					selection
					style={{
						color: 'white',
						backgroundColor: '#0b1018',
						borderBottom: '1px solid',
						boxShadow: 'none',
						marginBottom: '3em'
					}}
					options={options()}
					onChange={this.props.charProp}
					value={this.props.currcharProp}
				/>
				<Image centered src={this.props.imgCharProp} style={{ maxWidth: '100px' }} />
			</Container>
		);
	}
}

export default CharDropDown;
