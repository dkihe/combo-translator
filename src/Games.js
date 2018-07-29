import React, { Component } from 'react';

class Games extends Component {
    render() {
        return(
            <div id="games">
                <div className="select-field">
                    <select onChange={this.props.gameProp} value={this.props.currgameProp}>
                        <option value="streetfighter" label="Street Fighter">Street Fighter 5</option>
                        <option value="tekken" label="Tekken">Tekken 7</option>
                        <option value="mvci" label="Marvel vs Capcom: Infinite">Marvel vs Capcom: Infinite</option>
                        <option value="dbfz" label="Dragon Ball FighterZ">Dragon Ball FighterZ</option>
                        <option value="bbtag" label="BlazBlue Cross Tag Battle">BlazBlue Cross Tag Battle</option>
                    </select>
                </div>
            </div>
        );
    }
}

export default Games;

