import React, {Component} from 'react';
import charlist from "./charlist.json"

class Characters extends Component{
    render(){
        return(
            <div id='characters'>
                {this.props.listProp}
                <div>
                    <img id = "charImg1" src = {this.props.setCharPropA} />
                    <img id = "charImg2" src = {this.props.setCharPropB} />
                    <img id = "charImg3" src = {this.props.setCharPropC} />
                </div>
                <select id="charList1" onChange={this.props.charPropA} value={this.props.currcharPropA}>
                </select>
                <select id="charList2" onChange={this.props.charPropB} value={this.props.currcharPropB}>
                </select>
                <select id="charList3" onChange={this.props.charPropC} value={this.props.currcharPropC}>
                </select>
            </div>
        )
    }
}

export default Characters;