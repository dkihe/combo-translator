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

        let tekken_re = /(\d\+\d\+\d\+\d|\d\+\d\+\d|\d\+\d|\d|\s|\+|\_|\,)/
        let sf_re = /(?:(,)\s+|\s+(xx)\s+)|\+|(,)/
        let userinput = this.state.term
        //Iterate through array and JSON; push if terms match
        //Use upper and lower case if game is tekken
        if (this.state.game === "tekken"){    
            var item = userinput.split(tekken_re);
        } else {
            var item = userinput.toLowerCase().split(sf_re);
        }
        if (document.querySelector(".images")){
          document.querySelector(".images").innerHTML = ""
            for(var i=0;i<item.length;i++){
                //If text is "[]" or "()" push to array
                if(/(\[(.*?)\]|\((.*?)\))/g.test(item[i]) && this.state.game === "tekken"){
                    let text = item[i]
                    let note = document.createElement("span")
                    note.innerHTML = String(text)
                    document.querySelector(".images").appendChild(note)
                }
                for (var key in list[this.state.game]){
                    for(var j=0;j<list[this.state.game][key].term.length;j++){
                        if (list[this.state.game][key].term[j] === item[i]){
                            for (var imgNum=0;imgNum<list[this.state.game][key].image.length;imgNum++){ 
                                let img = document.createElement("img")
                                img.src = String(list[this.state.game][key].image[imgNum])
                                document.querySelector(".images").appendChild(img).className = String(i)
                            }
                        }
                    }
                }
            }
        }
    }

    /*createImage(arr){
        for(var i=0;i<arr.length;i++){ 
            if(/(\[(.*?)\]|\((.*?)\))/g.test(arr[i]) && this.state.game === "tekken"){
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
                            img.src = String(list[this.state.game][key].image[imgNum])
                            document.querySelector(".images").appendChild(img).className = String(i)
                        }
                    }
                }
            }
        }
    }*/

    render() {
        return (
            <div>
                <Games 
                    gameProp={event => this.setState({game: event.target.value})}
                />
                <Translator 
                    valueProp={this.state.term}
                    inputProp={event => this.setState({term: event.target.value})}
                    //arrayProp={this.createArr()}
                />
                <Output
                    imageProp={this.createArr()}
                />
            </div>
        );
    }
}

export default App


