import React, { Component } from 'react';

class Games extends Component {
    render() {
        return(
            <div id="games">
                <div className="select-field">
                    <select onChange={this.props.gameProp}>
                        <option value="streetfighter">Street Fighter 5</option>
                        <option value="tekken">Tekken 7</option>
                        <option value="mvci">Marvel vs Capcom: Infinite</option>
                    </select>
                </div>
            </div>
        );
    }
}

export default Games;
