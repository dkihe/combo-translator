import React, {Component} from 'react';
import { Grid, Container, Dropdown, Image } from 'semantic-ui-react';

class CharDropDown extends Component{
	render(){
		let tempList = []
		const dataProp = this.props.dataProp
		const options = () => {
			for (let char in dataProp){
				tempList.push({ key: char, text: char, value: char })
			}
			console.log(tempList)
			return tempList
		}

		return(
			<Container >
				<Container centered style={{ width: '15em' }}>
					<Image centered style={{ maxWidth: '15em' }} src = {this.props.imgCharProp}/>
					<Dropdown selection style={{ maxWidth: '15em' }} options={options()} onChange={this.props.charProp} value={this.props.currcharProp} />
				</Container>
			</Container>
		)
	}
}

export default CharDropDown;