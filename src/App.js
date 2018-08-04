import React, { Component } from 'react';
import Games from './Games.js';
import Translator from './Translator.js';
import Output from './Output.js';
import Characters from './Characters.js';
import './App.css';
import list from "./list.json";
import charlist from "./charlist.json"
import {CopyToClipboard} from 'react-copy-to-clipboard';


const CONF = {
    'streetfighter': {
        regex: /(tk)\s*|\s*(\,|\>|xx)\s*|\+|\-|\./
    },
    'tekken': {
        regex: /\s|(,)\s*|\+|(\d\+\d\+\d\+\d|\d\+\d\+\d|\d\+\d|\d)/
    },
    'mvci': {
        regex: /(tk)\s*|\s*(\,|\>|xx)\s*|\+|\-|\./
    },
    'dbfz': {
        regex: /(tk)\s*|\s*(\,|\>|xx)\s*|\+|\-|\./
    },
    'bbtag': {
        regex: /(tk)\s*|\s*(\,|\>|xx)\s*|\+|\-|\./
    }
}


// const comboHash =()=>{
//     if (window && window.location.search){
//         const cParams = (new URL(document.location)).searchParams
//         const cHash = cParams.get("c")
//         const cOut = decodeURIComponent(cHash)
//         return cOut
//     }
//     else{
//         return ''
//     }
// }

// const gameHash =()=>{
//     if (window && window.location.search){
//         const gParams = (new URL(document.location)).searchParams
//         const gHash = gParams.get("g")
//         const gOut = decodeURIComponent(gHash)
//         return gOut
//     }
//     else{
//         return 'streetfighter'
//     }
// }

// const charHash =()=>{
//     if (window && window.location.search){
//         const chParams = (new URL(document.location)).searchParams
//         const chHash = chParams.get("ch")
//         const chOut = decodeURIComponent(chHash)
//         return chOut
//     }
//     else{
//         return null
//     }
// }

const hashFromParams = (param, defaultValue) => {
    if (window && window.location.search) {
        const params = (new URL(document.location)).searchParams
        const hash = params.get(param)
        return String(decodeURIComponent(hash))
    } else {
        return defaultValue || ''
    }
}

class App extends Component {
    constructor(props){
        super(props)

        this.state={
            term:'',
            game: 'streetfighter',
            character: '',
        }
    }
    
    createImage(){
        let altImg = document.getElementsByTagName("img")
        //let tekken_re = /(\(.*?\))|\s|(,)\s*|\+|(\d\+\d\+\d\+\d|\d\+\d\+\d|\d\+\d|\d)/
        //let sf_re = /(tk)\s*|\s*(\,|\>|xx)\s*|\+|(\(.*?\))\s*|\-|\./
        // let tekken_re = /\s|(,)\s*|\+|(\d\+\d\+\d\+\d|\d\+\d\+\d|\d\+\d|\d)/
        // let sf_re = /(tk)\s*|\s*(\,|\>|xx)\s*|\+|\-|\./
        let userinput = this.state.term
        //let regex = /(\(.*?\))/
        // const item = userinput.toLowerCase().split(CONF[this.state.game].regex)
         let item;
        if (this.state.game === "tekken"){    
            item = userinput.split(CONF["tekken"].regex);
        } else if (this.state.game === "dbfz" || this.state.game === "bbtag"){
            item = userinput.split(CONF["streetfighter"].regex);
        }else{
            item = userinput.toLowerCase().split(CONF["streetfighter"].regex);
        }
        const imagesContainer = document.querySelector(".images")
        if (imagesContainer){
            imagesContainer.innerHTML = ""
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
                                imagesContainer.appendChild(img).className = String(list[this.state.game][key].size[imgNum])
                            }
                        }
                    }
                }
            }
        }
        if (altImg){
            for (var j = 0; j < altImg.length;j++){
                altImg[j].addEventListener('click',function show(){
                    document.querySelector("#text").innerHTML = this.alt
                })
            }
        }
    }

    charList(){
        let characters = document.querySelector('#characters')
        let option
        let select = document.querySelector('#charList')
        const createOptions = (game) =>{
            if (characters){
                //this.state.character = charlist[this.state.game][0].name
                // Clear options before creating new options
                select.innerHTML = ""
                // Create drop down values
                for (var i = 0; i < charlist[game].length; i++){
                    option = document.createElement("option")
                    option.value = charlist[game][i].name
                    option.label = charlist[game][i].name
                    option.innerHTML = charlist[game][i].name
                    select.appendChild(option)
                }
            }
        }
        createOptions(this.state.game)
    }

    outputURL(){
        let state = encodeURIComponent(this.state.term)
        let game = encodeURIComponent(this.state.game)
        let char = encodeURIComponent(this.state.character)
        return "?c="+state+"&g="+game+"&ch="+char
    }

    componentDidMount() {
        const newState = {
            term: hashFromParams('c'),
            game: hashFromParams('g', 'streetfighter'),
            character: hashFromParams('ch')
        }
        // this.setState(...this.state, ...newState)
        this.setState({ term: hashFromParams('c') })
        this.setState({ game: hashFromParams('g', 'streetfighter') })
        this.setState({ character: hashFromParams('ch') })
    }
    render() {
        return (
            <div>
                {console.log(this.state.character)}
                <div id="title">Combo Translator</div>
                <Games 
                    gameProp={event => this.setState({game: event.target.value})}
                    currgameProp={this.state.game}
                />
                <Characters
                    listProp={this.charList()}
                    charProp={event => this.setState({character: event.target.value})}
                    currcharProp={this.state.character}
                />
                <Translator 
                    valueProp={this.state.term}
                    inputProp={event => this.setState({term: event.target.value})}
                />
                <div id="text">click an image to see a translation</div>
                <Output
                    imageProp={this.createImage()}
                />
                <CopyToClipboard text={this.outputURL()}> 
                    <button>GET URL</button>
                </CopyToClipboard>
            </div>
        );
    }
}

export default App


