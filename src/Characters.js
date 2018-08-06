import React, {Component} from 'react';
import charlist from "./charlist.json"

class Characters extends Component{
    render(){
        return(
            <div className='characters'>
                {this.props.charList}
                <div>
                    <img id = "charImg" src = {this.props.imgCharProp} />
                </div>
                <div className='select-field'>
                    <select onChange={this.props.charProp} value={this.props.currcharProp}>
                    </select>
                </div>
            </div>
        )
    }
}

export default Characters;