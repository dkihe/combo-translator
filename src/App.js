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
        let tekken_re = /(\[(.*?)\]|\((.*?)\)|\d\+\d\+\d\+\d|\d\+\d\+\d|\d\+\d|\d|\s|\+|\_|\,)/
        let sf_re = /(\[(.*?)\]|\((.*?)\)|^\w+( \w+)*$|\s|\.|\+|\_|\,)/
        let userinput = this.state.term
        let arr = []
        let replaceArr = []
        //Iterate through array and JSON; push if terms match
        //Use upper and lower case if game is tekken
        if (this.state.game === "tekken"){    
            var item = userinput.split(tekken_re);
        } else {
            var item = userinput.toLowerCase().split(sf_re);
        }
        for(var i=0;i<item.length;i++){
            //If text is "[]" or "()" push to array
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
        for(var i=0;i<arr.length;i++){ //go through user input array
            //Create notes using "[]" or "()"
            if(/(\[(.*?)\]|\((.*?)\))/g.test(arr[i])){
                let text = arr[i]
                let note = document.createElement("span")
                note.innerHTML = String(text)
                document.querySelector(".images").appendChild(note)
            }
            //Create images by comparing to array
            for (var key in list[this.state.game]){ //go through list for game
                for(var j=0;j<list[this.state.game][key].term.length;j++){ //go through each term
                    if (list[this.state.game][key].term[j] === arr[i]){ //compare user input array to term in game list
                        for (var imgNum=0;imgNum<list[this.state.game][key].image.length;imgNum++){ //create each image in list image array
                            let img = document.createElement("img")
                            img.src = String(list[this.state.game][key].image[imgNum])
                            document.querySelector(".images").appendChild(img).className = String(i)
                        }
                    }
                }
            }
        }
    }

    replaceArr(arr){
        let temp = []
        for (var i=0;i<arr.length;i++){
            for (var key in list[this.state.game]){
                if (list[this.state.game][key].term[i] === arr[i] && list[this.state.game][key].type === "motion"){
                    if (list[this.state.game][key].term[i] === arr[i-1] && list[this.state.game][key].type === "button")
                        return true
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
                    arrayProp={this.createArr()}
                />
                <Output 
                    imageProp={event => this.createImage(this.createArr())}
                />
                <div>
                    {console.log(this.createArr())}
                </div>
                <div>
                    {console.log(this.replaceArr(this.createArr()))}
                </div>
            </div>
        );
    }
}

export default App


