import React, { Component } from 'react';
import "./App.css";
import * as styles from './styles.scss'
import Translator from "./Translator.js";
import ImageOutput from "./ImageOutput.js";
import GameDropdown from "./GameDropdown.js";
import list from './list.json';
import charlist from './charlist.json';
import { Grid, Container } from 'semantic-ui-react';

const CONF = {
	streetfighter: {
		regex: /tk\s*|\s*(?:,|>|xx)\s*|\+|-|\./g,
		team: 1
	},
	tekken: {
		regex: /\s|,\s*|\+|(?:\d\+\d\+\d\+\d|\d\+\d\+\d|\d\+\d|\d)/g,
		team: 1
	},
	mvci: {
		regex: /(tk)\s*|\s*(,|>|xx)\s*|\+|-|\./g,
		team: 2
	},
	dbfz: {
		regex: /(tk)\s*|\s*(,|>|xx)\s*|\+|-|\./g,
		team: 3
	},
	bbtag: {
		regex: /(tk)\s*|\s*(,|>|xx)\s*|\+|-|\./g,
		team: 2
	},
	unib: {
		regex: /(tk)\s*|\s*(,|>|xx)\s*|\+|-|\./g,
		team: 1
	},
	mk: {
		regex: /(tk)\s*|\s*(,|>|xx)\s*|\+|-|\./g,
		team: 1
	},
	sc: {
		regex: /\s|(,|~)|(\[[1-9]\]|\([1-9]\))|([1-9])/g,
		team: 1
	}
};


class App extends Component {
	constructor(props) {
		super(props);

		this.state = {
			input: '',
			game: 'streetfighter',
			character: [ 'None', 'None', 'None' ]
		}
	}


	getRegex () {

	}

	// Return the user input using a given regex
	getInputFromRegex () {
		let game = this.state.game
		let userInput = this.state.input
		let inputRegex

		switch (game) {
			case 'streetfighter':
				inputRegex = userInput.split(CONF['streetfighter'].regex)
			case 'tekken':
				inputRegex = userInput.split(CONF['tekken'].regex);
			default:
				inputRegex = userInput.split(CONF['streetfighter'].regex)
		}
		console.log(inputRegex)
		console.log(userInput)
		return inputRegex
	}

	createImage = (dir) => {
		let altImg = document.getElementsByTagName('img');
		let comboInput = this.getInputFromRegex()
		const imagesContainer = document.querySelector('.images');

		// Check if imageContainer exists
		if (imagesContainer) {
			// Make inner html blank after every key press (to keep array empty)
			imagesContainer.innerHTML = '';
			// Iterate through each item in comboInput
			for (let i = 0; i < comboInput.length; i++) {
				// Iterate through all keys (combo inputs) from the given game in list.json
				for (let key in list[this.state.game]) {
					// Iterate through all terms in the given game
					for (let j = 0; j < list[this.state.game][key].term.length; j++) {
						// Check if any of the terms matches the given comboInput
						if (list[this.state.game][key].term[j] === comboInput[i]) {
							switch (dir) {
								// Iterate through images and place them horizontally
								case (0):
									for (let imgNum = 0; imgNum < list[this.state.game][key].image.length; imgNum++) {
										let img = document.createElement('img');
										img.src = String(list[this.state.game][key].image[imgNum]);
										if (list[this.state.game][key].hasOwnProperty('alt')) {
											img.alt = String(list[this.state.game][key].alt[imgNum]);
										}
										imagesContainer.appendChild(img).className = String(
											list[this.state.game][key].size[imgNum]
										);
										imagesContainer.className = 'images horizontal'
									}
									break;
								// Iterate through images and place them vertically
								case (1):
									for (let imgNum = 0; imgNum < list[this.state.game][key].image.length; imgNum++) {
										let img = document.createElement('img');
										img.src = String(list[this.state.game][key].image[imgNum]);
										if (list[this.state.game][key].hasOwnProperty('alt')) {
											img.alt = String(list[this.state.game][key].alt[imgNum]);
										}
										imagesContainer.appendChild(img).className = String(
											list[this.state.game][key].size[imgNum]
										);
										imagesContainer.className = 'images vertical'
									}
									break;
								default:
									break;
							}
						}
					}
				}
			}
		}
		if (altImg) {
			for (var k = 0; k < altImg.length; k++) {
				altImg[k].addEventListener('click', function show() {
					document.querySelector('#text').innerHTML = this.alt;
				});
			}
		}
	}

	// Render react elements on page
	render() {
		return (
			<Container>
				<GameDropdown
					gameProp = { (e, {value}) => this.setState({ game: value }) }
					valueProp = { this.state.game }
				/>
				<Translator
					valueProp = { this.state.input }
					inputProp = { (e,  {value}) => this.setState({ input: value }) }
				/>
				<ImageOutput
					imageProp = { this.createImage(1) }
				/>
			</Container>
		)
	}
}

export default App;
