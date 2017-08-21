import React, { Component } from 'react';

class Games extends Component {
    render() {
        return(
            <div id="games">
                <select onChange={this.props.gameProp}>
                    <option value="streetfighter">Street Fighter 5</option>
                    <option value="tekken">Tekken 7</option>
                </select>
            </div>
        );
    }
}

export default Games;
