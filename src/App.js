import React, { Component } from 'react';
import Games from './Games.js';
import Translator from './Translator.js';
import Output from './Output.js';
import './App.css';
const list = require("./list.json")

class App extends Component {
    constructor(props){
        super(props)

        this.state={
            term:'',
            game: "streetfighter"
        }
    }
    createArr(){
        let item = this.state.term.split(/(\[(.*?)\]|\((.*?)\)|\~|\d\+\d\+\d\+\d|\d\+\d\+\d|\d\+\d|\d|\s|\+|\_|\,)/)
        let arr = []
        for(var i=0;i<item.length;i++){
            if(/(\[(.*?)\]|\((.*?)\))/g.test(item[i])){
                arr.push(item[i])
            }
            for (var key in list[this.state.game]){
                for(var j=0;j<list[this.state.game][key].term.length;j++){
                    if (list[this.state.game][key].term[j] === item[i]){
                        arr.push(item[i])
                    }
                }
            }
        }
        return arr
    }

    createImage(arr){
        document.querySelector(".images").innerHTML = " "
        for(var i=0;i<arr.length;i++){
            if(/(\[(.*?)\]|\((.*?)\))/g.test(arr[i])){
                let text = arr[i]
                let note = document.createElement("span")
                note.innerHTML = String(text)
                document.querySelector(".images").appendChild(note)
            }
            for (var key in list[this.state.game]){
                for(var j=0;j<list[this.state.game][key].term.length;j++){
                    if (list[this.state.game][key].term[j] === arr[i]){
                        for (var imgNum=0;imgNum<list[this.state.game][key].image.length;imgNum++){
                            let img = document.createElement("img")
                            img.setAttribute("src",list[this.state.game][key].image[imgNum])
                            document.querySelector(".images").appendChild(img)
                        }
                    }
                }
            }
        }
    }
    
    render() {
        return (
            <div>
                <Games 
                    gameProp={event => this.setState({game: event.target.value})}
                />
                <Translator 
                    valueProp={this.state.term}
                    inputProp={event => this.setState({term: event.target.value})}
                    testProp={console.log(this.createArr())}
                    arrayProp={this.createArr()}
                />
                <Output 
                    imageProp={event => this.createImage(this.createArr())}
                />
                <div>
                    {console.log(this.state.game)}
                </div>
            </div>
        );
    }
}

export default App


