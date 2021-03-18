import { TextField, Grid } from '@material-ui/core';
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

const Translator = (props) => {
    return (
        <Grid item spacing={0} className={styles.translator}>
            <TextField
                className={styles.textfield}
                variant="standard"
                label="Combo"
                value = { props.valueProp }
                onChange = { props.inputProp }
            />
        </Grid>
    )
}

export default Translator
