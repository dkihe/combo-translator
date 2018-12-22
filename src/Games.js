import React, { Component } from 'react';
import { Input, Container, Dropdown } from 'semantic-ui-react';

const options = [
    { key: 'streetfighter', text: 'Street Fighter', value: 'streetfighter' },
    { key: 'tekken', text: 'Tekken', value: 'tekken' },
    { key: 'bbtag', text: 'BlazBlue Cross Tag Battle', value: 'bbtag' },
  ]

class Games extends Component {
    render() {
        return(
            // <div id="games">
            //     <div className="select-field">
            //         <select onChange={this.props.gameProp} value={this.props.currgameProp}>
            //             <option value="streetfighter" label="Street Fighter">Street Fighter 5</option>
            //             <option value="tekken" label="Tekken">Tekken 7</option>
            //             <option value="mvci" label="Marvel vs Capcom: Infinite">Marvel vs Capcom: Infinite</option>
            //             <option value="dbfz" label="Dragon Ball FighterZ">Dragon Ball FighterZ</option>
            //             <option value="bbtag" label="BlazBlue Cross Tag Battle">BlazBlue Cross Tag Battle</option>
            //         </select>
            //     </div>
            // </div>
            <Container>
                {console.log(this.props.gameProp)}
                <Dropdown button basic options={options} onChange={this.props.gameProp} value={this.props.currgameProp} />
            </Container> 
        );
    }
}

export default Games;

