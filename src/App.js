import React, { Component } from 'react';
import "./App.css";
import Translator from "./Translator.js";
import ImageOutput from "./ImageOutput.js";
import list from './list.json';
import charlist from './charlist.json';
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

class App extends Component {
	constructor(props) {
		super(props);

		this.state = {
			input: '',
			game: 'streetfighter',
			character: [ 'None', 'None', 'None' ]
		}
	}
	
	createImage = () => {
		let altImg = document.getElementsByTagName('img');
		//let tekken_re = /(\(.*?\))|\s|(,)\s*|\+|(\d\+\d\+\d\+\d|\d\+\d\+\d|\d\+\d|\d)/
		//let sf_re = /(tk)\s*|\s*(\,|\>|xx)\s*|\+|(\(.*?\))\s*|\-|\./
		// let tekken_re = /\s|(,)\s*|\+|(\d\+\d\+\d\+\d|\d\+\d\+\d|\d\+\d|\d)/
		// let sf_re = /(tk)\s*|\s*(\,|\>|xx)\s*|\+|\-|\./
		let userinput = this.state.input;
		//let regex = /(\(.*?\))/
		// const item = userinput.toLowerCase().split(CONF[this.state.game].regex)
		let item;
		if (this.state.game === 'tekken') {
			item = userinput.split(CONF['tekken'].regex);
		} else if (this.state.game === 'sc') {
			item = userinput.split(CONF['sc'].regex);
		} else if (
			this.state.game === 'dbfz' ||
			this.state.game === 'bbtag' ||
			this.state.game === 'unib' ||
			this.state.game === 'mk'
		) {
			item = userinput.split(CONF['streetfighter'].regex);
		} else {
			item = userinput.toLowerCase().split(CONF['streetfighter'].regex);
		}
		const imagesContainer = document.querySelector('.images');
		if (imagesContainer) {
			imagesContainer.innerHTML = '';
			for (var i = 0; i < item.length; i++) {
				for (var key in list[this.state.game]) {
					for (var j = 0; j < list[this.state.game][key].term.length; j++) {
						if (list[this.state.game][key].term[j] === item[i]) {
							for (var imgNum = 0; imgNum < list[this.state.game][key].image.length; imgNum++) {
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
			<Container>
				<Translator
					valueProp = { this.state.input }
					// Handle text input
					inputProp = { (e) => this.setState({ input: e.target.value }) }
				/>
				<ImageOutput
					imageProp = { this.createImage() }
				/>
			</Container>
		)
	}
}

export default App;
