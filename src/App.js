import React, { Component } from 'react';
import { Container, Grid, Button, Box } from '@material-ui/core';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkIcon from '@material-ui/icons/Link';
import "./App.css";
import * as styles from './styles.module.scss'
import Translator from "./Translator.js";
import ImageOutput from "./ImageOutput.js";
import GameDropdown from "./GameDropdown.js";
import list from './list.json';
import charlist from './charlist.json';

const CONF = {
	streetfighter: {
		regex: /(tk)\s*|\s*(,|>|xx)\s*|\+|-|\./g,
		team: 1
	},
	tekken: {
		regex: /\s|,\s*|\+|(\d\+\d\+\d\+\d|\d\+\d\+\d|\d\+\d|\d)/,
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
				inputRegex = userInput.toLowerCase().split(CONF['streetfighter'].regex)
			case 'tekken':
				inputRegex = userInput.split(CONF['tekken'].regex);
			default:
				inputRegex = userInput.toLowerCase().split(CONF['streetfighter'].regex)
		}
		// Filter undefined
		return inputRegex.filter(x => { return x } )
	}

	createImage = () => {
		let altImg = document.getElementsByTagName('img');
		let comboInput = this.getInputFromRegex()
		const imagesContainer = document.querySelector('#images');

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
							// Iterate through images and place them horizontally
							for (let imgNum = 0; imgNum < list[this.state.game][key].image.length; imgNum++) {
								let img = document.createElement('img');
								img.src = String(list[this.state.game][key].image[imgNum]);
								if (list[this.state.game][key].hasOwnProperty('alt')) {
									img.alt = String(list[this.state.game][key].alt[imgNum]);
								}
								imagesContainer.appendChild(img).className = String(
									list[this.state.game][key].size[imgNum]
								);
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
			<Container className={styles.app}>
				<Grid container spacing={0} justify="space-between" className={styles.title}>
					<h1>Combo Translator</h1>
					<nav>
						<Button href="https://github.com/dkihe/combo-translator/"size="small" color="black" startIcon={<GitHubIcon />} className={styles.button}>
							repo
						</Button>
						<Button href="https://github.com/dkihe/combo-translator/wiki" size="small" color="black" startIcon={<LinkIcon />} className={styles.button}>
							wiki
						</Button>
					</nav>
				</Grid>
				<Grid container spacing={0} alignItems="center" justify="center" align="center" className={styles.content}>
					<GameDropdown
						gameProp = { e => {
							const { value } = e.target;
							this.setState({ game: value });
						}}
						valueProp = { this.state.game }
					/>
					<Translator
						valueProp = { this.state.input }
						inputProp = { e => {
							const { value } = e.target;
							this.setState({ input: value });
						}}
					/>
				</Grid>
				<Grid container spacing={0} alignItems="center" justify="center" align="center" id="text" className={styles.text}>Click an image to see a translation</Grid>
				<ImageOutput
					imageProp = { this.createImage(0) }
				/>
			</Container>
		)
	}
}

export default App;
