import React, { Component } from 'react';
const list = require("./list.json")


class InputBar extends Component{
	constructor(props){
		super(props)

		this.state = {
			term: ''
		}
	}
	createArr(){
		//Split each item and add it to an array
		let item = this.state.term.split(/(\[(.*?)\]|\((.*?)\)|\~|\d\+\d\+\d\+\d|\d\+\d\+\d|\d\+\d|\d|\s|\+|\_|\,)/)
		let arr = []
		//Iterate through the split array and compare it to JSON keys
		for(var i=0;i<item.length;i++){
			if(/(\[(.*?)\]|\((.*?)\))/g.test(item[i])){
				arr.push(item[i])
			}
			for (var key in list.tekken.input){
				for(var j=0;j<list.tekken.input[key].term.length;j++){
					if (list.tekken.input[key].term[j] === item[i]){
						//Push to new array if the item matches with JSON key
						arr.push(item[i])
					}
				}
			}
		}
		return arr
	}
	createImage(arr){
		//Clear images
		document.querySelector(".images").innerHTML = " "
		//Compare array to JSON to get key values
		for(var i=0;i<arr.length;i++){
			//Create text
			if(/(\[(.*?)\]|\((.*?)\))/g.test(arr[i])){
				let text = arr[i]
				let note = document.createElement("span")
				note.innerHTML = String(text)
				document.querySelector(".images").appendChild(note)
			}
			for (var key in list.tekken.input){
				for(var j=0;j<list.tekken.input[key].term.length;j++){
					//Create images
					if (list.tekken.input[key].term[j] === arr[i]){
						for (var imgNum=0;imgNum<list.tekken.input[key].image.length;imgNum++){
							let img = document.createElement("img")
							img.setAttribute("src",list.tekken.input[key].image[imgNum])
							document.querySelector(".images").appendChild(img)
						}
					}
				}
			}
		}
	}
	testFunc(){
		console.log(null)
	}
	render(){
		return (
			<div id="inputbar">
				<input
					value = {this.state.term}
					onChange = {event => this.setState({term: event.target.value})}
				/>
				<div>
					{this.createArr()}
				</div>
				<button onClick = {event => (this.createImage(this.createArr()))}>Translate!</button>
				<div className="images">
				</div>
				<div>
					{this.testFunc()}
				</div>
			</div>
		)
	}
}

export default InputBar