import React, { Component } from 'react';

class Games extends Component {
    render() {
        return(
            <div id="games">
                <div className="select-field">
                    <select onChange={this.props.gameProp}>
                        <option value="streetfighter" label="Street Fighter">Street Fighter 5</option>
                        <option value="tekken" label="Tekken">Tekken 7</option>
                        <option value="mvci" label="Marvel vs Capcom: Infinite">Marvel vs Capcom: Infinite</option>
                        <option value="dbfz" label="Dragon Ball FighterZ">Dragon Ball FighterZ</option>
                    </select>
                </div>
            </div>
        );
    }
}

export default Games;
