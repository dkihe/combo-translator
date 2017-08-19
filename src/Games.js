import React, { Component } from 'react';

class Games extends Component {
    constructor(props){
        super(props)

        this.state={
            term:''
        }
    }

    render() {
        return(
            <div id="games">
                <select onChange={this.props.gameProp}>
                    <option value="streetfighter">Street Fighter</option>
                    <option value="tekken">Tekken</option>
                </select>
            </div>
        );
    }
}

export default Games;
