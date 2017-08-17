import React, { Component } from 'react';
import Output from './Output.js';
const list = require("./list.json")


class Translator extends Component{
	constructor(props){
		super(props)

		this.state = {
			term: '',
			array: ''
		}
	}
	createArr(){
		let item = this.state.term.split(/(\[(.*?)\]|\((.*?)\)|\~|\d\+\d\+\d\+\d|\d\+\d\+\d|\d\+\d|\d|\s|\+|\_|\,)/)
		let arr = []
		for(var i=0;i<item.length;i++){
			if(/(\[(.*?)\]|\((.*?)\))/g.test(item[i])){
				arr.push(item[i])
			}
			for (var key in list.tekken.input){
				for(var j=0;j<list.tekken.input[key].term.length;j++){
					if (list.tekken.input[key].term[j] === item[i]){
						arr.push(item[i])
					}
				}
			}
		}
		return arr
	}
	createImage(arr){
		document.querySelector(".images").innerHTML = " "
		for(var i=0;i<arr.length;i++){
			if(/(\[(.*?)\]|\((.*?)\))/g.test(arr[i])){
				let text = arr[i]
				let note = document.createElement("span")
				note.innerHTML = String(text)
				document.querySelector(".images").appendChild(note)
			}
			for (var key in list.tekken.input){
				for(var j=0;j<list.tekken.input[key].term.length;j++){
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
		this.setState({array:this.createArr()})
		console.log(this.state.array)
	}
	render(){
		return (
			<div id="translator">
				<input
					value = {this.state.term}
					onChange = {event => this.setState({term: event.target.value})}
				/>
				<div>
					
				</div>
				<button onClick = {event => (this.createImage(this.createArr()))}>Translate!</button>
				<div className="images">
				</div>
			</div>
		)
	}
}

export default Translator;