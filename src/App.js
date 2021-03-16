import React, { Component } from 'react';
import Translator from './Translator.js';
import ImageOutput from './ImageOutput.js';
import CharDropDown from './CharDropDown.js';
import './App.css';
import './styles.scss'
import list from './list.json';
import charlist from './charlist.json';
// import {CopyToClipboard} from 'react-copy-to-clipboard';
import { Grid, Container } from 'semantic-ui-react';

const CONF = {
	streetfighter: {
		regex: /(tk)\s*|\s*(,|>|xx)\s*|\+|-|\./,
		team: 1
	},
	tekken: {
		regex: /\s|(,)\s*|\+|(\d\+\d\+\d\+\d|\d\+\d\+\d|\d\+\d|\d)/,
		team: 1
	},
	mvci: {
		regex: /(tk)\s*|\s*(,|>|xx)\s*|\+|-|\./,
		team: 2
	},
	dbfz: {
		regex: /(tk)\s*|\s*(,|>|xx)\s*|\+|-|\./,
		team: 3
	},
	bbtag: {
		regex: /(tk)\s*|\s*(,|>|xx)\s*|\+|-|\./,
		team: 2
	},
	unib: {
		regex: /(tk)\s*|\s*(,|>|xx)\s*|\+|-|\./,
		team: 1
	},
	mk: {
		regex: /(tk)\s*|\s*(,|>|xx)\s*|\+|-|\./,
		team: 1
	},
	sc: {
		regex: /\s|(,|~)|(\[[1-9]\]|\([1-9]\))|([1-9])/,
		team: 1
	}
};

const hashFromParams = (param, defaultValue) => {
	if (window && window.location.search) {
		const params = new URL(document.location).searchParams;
		const hash = params.get(param);
		return String(decodeURIComponent(hash));
	} else {
		return defaultValue || '';
	}
};

class App extends Component {
	constructor(props) {
		super(props);

		this.state = {
			input: '',
			game: 'streetfighter',
			character: [ 'None', 'None', 'None' ]
		};
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
			case 'dbfz':
				inputRegex = userInput.split(CONF['streetfighter'].regex);
			case 'bbtag':
				inputRegex = userInput.split(CONF['streetfighter'].regex);
			case 'unib':
				inputRegex = userInput.split(CONF['streetfighter'].regex);
			case 'mk':
				inputRegex = userInput.split(CONF['streetfighter'].regex);

			default:
				inputRegex = userInput.toLowerCase().split(CONF['streetfighter'].regex)
		}
		return inputRegex
	}

	// Get and place image according to the user input
	createImage () {
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

	outputURL() {
		let state = encodeURIComponent(this.state.input);
		let game = encodeURIComponent(this.state.game);
		let charA = encodeURIComponent(this.state.character[0]);
		let charB = encodeURIComponent(this.state.character[1]);
		let charC = encodeURIComponent(this.state.character[2]);

		return '?c=' + state + '&g=' + game + '&cha=' + charA + '&chb=' + charB + '&chc=' + charC;
	}

	componentDidMount() {
		const newState = {
			term: hashFromParams('c'),
			game: hashFromParams('g', 'streetfighter'),
			character: [ hashFromParams('cha', 'None'), hashFromParams('chb', 'None'), hashFromParams('chc', 'None') ]
		};
		this.setState({ ...this.state, ...newState });
	}

	render() {
		let CharactersComponent = () => {
			switch (this.state.game) {
				case 'streetfighter':
				case 'tekken':
					return (
						<Grid container textAlign="center" columns={1}>
							<Grid.Row>
								<Grid.Column>
									<CharDropDown
										charProp={(event, data) =>
											this.setState({
												character: [
													data.value,
													this.state.character[1],
													this.state.character[2]
												]
											})}
										currcharProp={this.state.character[0]}
										dataProp={charlist[this.state.game]}
										imgCharProp={charlist[this.state.game][this.state.character[0]].image}
									/>
								</Grid.Column>
							</Grid.Row>
						</Grid>
					);
				case 'mvci':
				case 'bbtag':
					return (
						<Grid container textAlign="center" columns={2}>
							<Grid.Row>
								<Grid.Column>
									<CharDropDown
										charProp={(event, data) =>
											this.setState({
												character: [
													data.value,
													this.state.character[1],
													this.state.character[2]
												]
											})}
										currcharProp={this.state.character[0]}
										dataProp={charlist[this.state.game]}
										imgCharProp={charlist[this.state.game][this.state.character[0]].image}
									/>
								</Grid.Column>
								<Grid.Column>
									<CharDropDown
										charProp={(event, data) =>
											this.setState({
												character: [
													this.state.character[0],
													data.value,
													this.state.character[2]
												]
											})}
										currcharProp={this.state.character[1]}
										dataProp={charlist[this.state.game]}
										imgCharProp={charlist[this.state.game][this.state.character[1]].image}
									/>
								</Grid.Column>
							</Grid.Row>
						</Grid>
					);
				case 'dbfz':
					return (
						<Grid container textAlign="center" columns={3}>
							<Grid.Row centered>
								<Grid.Column>
									<CharDropDown
										charProp={(event, data) =>
											this.setState({
												character: [
													data.value,
													this.state.character[1],
													this.state.character[2]
												]
											})}
										currcharProp={this.state.character[0]}
										dataProp={charlist[this.state.game]}
										imgCharProp={charlist[this.state.game][this.state.character[0]].image}
									/>
								</Grid.Column>
								<Grid.Column>
									<CharDropDown
										charProp={(event, data) =>
											this.setState({
												character: [
													this.state.character[0],
													data.value,
													this.state.character[2]
												]
											})}
										currcharProp={this.state.character[1]}
										dataProp={charlist[this.state.game]}
										imgCharProp={charlist[this.state.game][this.state.character[1]].image}
									/>
								</Grid.Column>
								<Grid.Column>
									<CharDropDown
										charProp={(event, data) =>
											this.setState({
												character: [
													this.state.character[0],
													this.state.character[1],
													data.value
												]
											})}
										currcharProp={this.state.character[2]}
										dataProp={charlist[this.state.game]}
										imgCharProp={charlist[this.state.game][this.state.character[2]].image}
									/>
								</Grid.Column>
							</Grid.Row>
						</Grid>
					);
				default:
					return (
						<Grid container textAlign="center" columns={1}>
							<Grid.Row>
								<Grid.Column>
									<CharDropDown
										charProp={(event, data) =>
											this.setState({
												character: [
													data.value,
													this.state.character[1],
													this.state.character[2]
												]
											})}
										currcharProp={this.state.character[0]}
										dataProp={charlist[this.state.game]}
										imgCharProp={charlist[this.state.game][this.state.character[0]].image}
									/>
								</Grid.Column>
							</Grid.Row>
						</Grid>
					);
			}
		};
		return (
			<Container style={{ width: '70%' }}>
				<Container style={{ width: '100%' }}>
					<Translator
						valueProp={this.state.input}
						inputProp={ (e,  {value}) => this.setState({ input: value }) }
						gameProp={ (e, data) => this.setState({ game: data.value, character: [ 'None', 'None', 'None' ] })}
						currgameProp={ this.state.game }
						copyProp={ this.outputURL() }
					/>
					<Container id="text">click an image to see a translation</Container>
					<Container style={{ width: '80%' }}>{CharactersComponent()}</Container>
					<ImageOutput
						imageProp = { this.createImage() }
					/>
				</Container>
			</Container>
		);
	}
}

export default App;
