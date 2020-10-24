import React, { Component } from "react";
import { Dropdown, Input } from "semantic-ui-react";

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

class GameDropdown extends Component {
    render() {
        return (
            <Dropdown
                selection
                options = { options }
                onChange = { this.gameProp }
                value = { this.valueProp }
            />
        )
    }
}

export default GameDropdown
