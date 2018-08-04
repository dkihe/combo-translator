import React, {Component} from 'react';

class Characters extends Component{
    render(){
        return(
            <div id='characters'>
                {this.props.listProp}
                <select id="charList" onChange={this.props.charProp} value={this.props.currcharProp}>
                </select>
                {/*<div id='sfchar'>
                    {this.props.listProp}
                    <select onChange={this.props.charProp} value={this.props.currcharProp}>
                        <option value="abigail" label="Abigail">Abigail</option>
                        <option value="akuma" label="Akuma">Akuma</option>
                        <option value="alex" label="Alex">Alex</option>
                        <option value="balrog" label="Balrog">Balrog</option>
                        <option value="birdie" label="Birdie">Birdie</option>
                    </select>
                </div>
                <div id='tekchar'>
                    <select onChange={this.props.charProp} value={this.props.currcharProp}>
                        <option value="akuma" label="Akuma">Akuma</option>
                        <option value="alisa" label="Alisa">Alisa</option>
                        <option value="bob" label="Bob">Bob</option>
                        <option value="bryan" label="Bryan">Bryan</option>
                        <option value="chloe" label="Chloe">Chloe</option>
                    </select>
            </div>*/}
            </div>
        )
    }
}

export default Characters;