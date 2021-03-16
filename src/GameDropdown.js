import React, { Component } from "react";
import { Select, MenuItem, Grid, FormControl } from '@material-ui/core';
import * as styles from './styles.module.scss'

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

// class GameDropdown extends Component {
//     render() {
//         return (
//             <Dropdown
//                 selection
//                 options = { options }
//                 onChange = { this.gameProp }
//                 value = { this.valueProp }
//             />
//         )
//     }
// }

const GameDropdown = (props) => {
    return (
        <Grid item xs={12} sm={6} className={styles.gamedropdown}>
            <FormControl variant="outlined" className={styles.form}>
                <Select
                    onChange = { props.gameProp }
                    value = { props.valueProp }
                    className={styles.select}
                >
                    {options.map((item) => (
                        <MenuItem className={styles.menuitem} value={item.value}>
                            {item.text}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
        </Grid>
    )
}

export default GameDropdown
