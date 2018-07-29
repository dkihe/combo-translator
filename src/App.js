import React, { Component } from 'react';
import Games from './Games.js';
import Translator from './Translator.js';
import Output from './Output.js';
import './App.css';
import list from "./list.json"


const comboHash =()=>{
    if (window && window.location.search){
        const cParams = (new URL(document.location)).searchParams
        const cHash = cParams.get("c")
        const cOut = decodeURIComponent(cHash)
        return cOut
    }
    else{
        return ''
    }
}

const gameHash =()=>{
    if (window && window.location.search){
        const gParams = (new URL(document.location)).searchParams
        const gHash = gParams.get("g")
        const gOut = decodeURIComponent(gHash)
        return gOut
    }
    else{
        return 'streetfighter'
    }
}

class App extends Component {
    constructor(props){
        super(props)

        this.state={
            term:'',
            game: 'streetfighter'
        }
    }

    createImage(){
        let altImg = document.getElementsByTagName("img")
        //let tekken_re = /(\(.*?\))|\s|(,)\s*|\+|(\d\+\d\+\d\+\d|\d\+\d\+\d|\d\+\d|\d)/
        //let sf_re = /(tk)\s*|\s*(\,|\>|xx)\s*|\+|(\(.*?\))\s*|\-|\./
        let tekken_re = /\s|(,)\s*|\+|(\d\+\d\+\d\+\d|\d\+\d\+\d|\d\+\d|\d)/
        let sf_re = /(tk)\s*|\s*(\,|\>|xx)\s*|\+|\-|\./
        let userinput = this.state.term
        //let regex = /(\(.*?\))/
        let item;
        if (this.state.game === "tekken"){    
            item = userinput.split(tekken_re);
        } else if (this.state.game === "dbfz" || this.state.game === "bbtag"){
            item = userinput.split(sf_re);
        }else{
            item = userinput.toLowerCase().split(sf_re);
        }
        if (document.querySelector(".images")){
        document.querySelector(".images").innerHTML = ""
            for(var i=0;i<item.length;i++){
                for (var key in list[this.state.game]){
                    for(var j=0;j<list[this.state.game][key].term.length;j++){
                        if (list[this.state.game][key].term[j] === item[i]){
                            for (var imgNum=0;imgNum<list[this.state.game][key].image.length;imgNum++){ 
                                let img = document.createElement("img")
                                img.src = String(list[this.state.game][key].image[imgNum])
                                if(list[this.state.game][key].hasOwnProperty('alt')){
                                    img.alt = String(list[this.state.game][key].alt[imgNum])
                                }
                                document.querySelector(".images").appendChild(img).className = String(list[this.state.game][key].size[imgNum])
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
    }
    componentDidMount(){
        this.setState({term: String(comboHash())})
        this.setState({game: String(gameHash())})
        console.log(gameHash())
    }
    render() {
        return (
            <div>
                <div id="title">Combo Translator</div>
                <Games 
                    gameProp={event => this.setState({game: event.target.value})}
                    currgameProp={this.state.game}
                />
                <Translator 
                    valueProp={this.state.term}
                    inputProp={event => this.setState({term: event.target.value})}
                />
                <div id="text">click an image to see a translation</div>
                <Output
                    imageProp={this.createImage()}
                />
                <p>URL: ?c={encodeURIComponent(this.state.term)}&g={encodeURIComponent(this.state.game)}</p>
            </div>
        );
    }
}

export default App


