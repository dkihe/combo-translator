import React, {Component} from 'react';

class CharDropDown extends Component{
	render(){
		let tempList = []
		const dataProp = this.props.dataProp
		const options = () => {
			for (let char in dataProp){
				// Creates array of characters to be mapped
				tempList.push(char)
				// Create option element with character names for select drop down
				var optionList = tempList.map(dataItem =>
					<option key={dataItem}>{dataItem}</option>
				)
			}
			return optionList
		}

		return(
			<div className='characters'>
				<div>
					<img id = "charImg" src = {this.props.imgCharProp} />
				</div>
				<div>
					<select id = "charList" onChange={this.props.charProp} value={this.props.currcharProp}>
						{options()}
					</select>
				</div>
			</div>
		)
	}
}

export default CharDropDown;