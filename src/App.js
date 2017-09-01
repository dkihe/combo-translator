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
    createImage(){
        let altImg = document.getElementsByTagName("img")
        let tekken_re = /(\(.*?\)|\[.*?\])|\s|(,)\s+|\+|(\d\+\d\+\d\+\d|\d\+\d\+\d|\d\+\d|\d)/
        let sf_re = /((,)\s+|\s+(xx)\s+)|\+|(,)|\.|(\(.*?\)|\[.*?\])|\s/
        let userinput = this.state.term
        let regex = /(\(.*?\)|\[.*?\])/
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
                if(regex.test(item[i])){
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
                                if(list[this.state.game][key].hasOwnProperty('alt')){
                                    img.alt = String(list[this.state.game][key].alt[imgNum])
                                }
                                document.querySelector(".images").appendChild(img).className = String(i)
                            }
                        }
                    }
                }
            }
        }
        if (altImg){
            for (var j = 0; j < altImg.length;j++){
                altImg[j].addEventListener('click',function show(){
                    var myAlt = this.alt;
                    document.querySelector("#text").innerHTML = myAlt;
                })
            }
        }
        console.log(item)
    }

    render() {
        return (
            <div>
                <div id="title">combo translator</div>
                <Games 
                    gameProp={event => this.setState({game: event.target.value})}
                />
                <Translator 
                    valueProp={this.state.term}
                    inputProp={event => this.setState({term: event.target.value})}
                    
                />
                <div id="text">click an image to see a translation</div>
                <Output
                    imageProp={this.createImage()}
                />
            </div>
        );
    }
}

export default App


