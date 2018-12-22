import React, { Component } from 'react';
import Games from './Games.js';
import Translator from './Translator.js';
import Output from './Output.js';
import CharDropDown from './CharDropDown.js';
import './App.css';
import list from "./list.json";
import charlist from "./charlist.json"
import {CopyToClipboard} from 'react-copy-to-clipboard';


const CONF = {
    'streetfighter': {
        regex: /(tk)\s*|\s*(\,|\>|xx)\s*|\+|\-|\./,
        team: 1
    },
    'tekken': {
        regex: /\s|(,)\s*|\+|(\d\+\d\+\d\+\d|\d\+\d\+\d|\d\+\d|\d)/,
        team: 1
    },
    'mvci': {
        regex: /(tk)\s*|\s*(\,|\>|xx)\s*|\+|\-|\./,
        team: 2
    },
    'dbfz': {
        regex: /(tk)\s*|\s*(\,|\>|xx)\s*|\+|\-|\./,
        team: 3
    },
    'bbtag': {
        regex: /(tk)\s*|\s*(\,|\>|xx)\s*|\+|\-|\./,
        team: 2
    }
}

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
            character: ['None','None','None']
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
        let characters = document.querySelector('.characters')
        let option
        if (characters){
            //characters.querySelector('select').id = 'charList' + String(listId)
            // Clear options before creating new options
            //document.querySelector('#charList' + String(listId)).innerHTML = ""
            document.querySelector('#charList').innerHTML = ""
        
            // Create drop down values
            for (var char in charlist[this.state.game]){
                option = document.createElement('option')
                option.value = charlist[this.state.game][char].name
                option.innerHTML = charlist[this.state.game][char].name
                //document.querySelector('#charList' + String(listId)).appendChild(option)
                document.querySelector('#charList').appendChild(option)
            }
        }
        
    }

    outputURL(){
        let state = encodeURIComponent(this.state.term)
        let game = encodeURIComponent(this.state.game)
        let charA = encodeURIComponent(this.state.character[0])
        let charB = encodeURIComponent(this.state.character[1])
        let charC = encodeURIComponent(this.state.character[2])
        
        return "?c="+state+"&g="+game+"&cha="+charA+"&chb="+charB+"&chc="+charC
    }
  
    componentDidMount() {
        const newState = {
            term: hashFromParams('c'),
            game: hashFromParams('g', 'streetfighter'),
            character: [hashFromParams('cha','None'),hashFromParams('chb','None'),hashFromParams('chc','None')]
        }
        this.setState({...this.state, ...newState})
    }

    render() {
        let CharactersComponent = () =>{
            switch (this.state.game) {
                case 'streetfighter':
                case 'tekken':
                    return(
                        <div>
                            <CharDropDown 
                                charProp = {event => this.setState( {character: [event.target.value, this.state.character[1], this.state.character[2]] })}
                                currcharProp = {this.state.character[0]}
                                dataProp = {charlist[this.state.game]}
                                imgCharProp = {charlist[this.state.game][this.state.character[0]].image}
                            />
                        </div>
                    )
                    break;
                case 'mvci':
                case 'bbtag':
                    return(
                        <div>
                            <CharDropDown 
                                charProp = {event => this.setState( {character: [event.target.value, this.state.character[1], this.state.character[2]] })}
                                currcharProp = {this.state.character[0]}
                                dataProp = {charlist[this.state.game]}
                                imgCharProp = {charlist[this.state.game][this.state.character[0]].image}
                            />
                            <CharDropDown 
                                charProp = {event => this.setState( {character: [this.state.character[0], event.target.value, this.state.character[2]]} )}
                                currcharProp = {this.state.character[1]}
                                dataProp = {charlist[this.state.game]}
                                imgCharProp = {charlist[this.state.game][this.state.character[1]].image}
                            />
                        </div>
                    )
                    break;
                case 'dbfz':
                    return(
                        <div>
                            <CharDropDown 
                                charProp = {event => this.setState( {character: [event.target.value, this.state.character[1], this.state.character[2]] })}
                                currcharProp = {this.state.character[0]}
                                dataProp = {charlist[this.state.game]}
                                imgCharProp = {charlist[this.state.game][this.state.character[0]].image}
                            />
                            <CharDropDown 
                                charProp = {event => this.setState( {character: [this.state.character[0], event.target.value, this.state.character[2]]} )}
                                currcharProp = {this.state.character[1]}
                                dataProp = {charlist[this.state.game]}
                                imgCharProp = {charlist[this.state.game][this.state.character[1]].image}
                            />
                            <CharDropDown 
                                charProp = {event => this.setState( {character: [this.state.character[0], this.state.character[1], event.target.value]} )}
                                currcharProp = {this.state.character[2]}
                                dataProp = {charlist[this.state.game]}
                                imgCharProp = {charlist[this.state.game][this.state.character[2]].image}
                            />
                        </div>
                    )
                    break;
                default:
                return(
                    <div>
                        <CharDropDown 
                            charProp = {event => this.setState( {character: [event.target.value, this.state.character[1], this.state.character[2]] })}
                            currcharProp = {this.state.character[0]}
                            dataProp = {charlist[this.state.game]}
                            imgCharProp = {charlist[this.state.game][this.state.character[0]].image}
                        />
                    </div>
                )
            }
        }
        return (
            <div>
                {console.log(this.state.game)}
                {console.log(this.state.character)}
                {/* {console.log(charlist[this.state.game][this.state.character[0].image])} */}
                <div id="title">Combo Translator</div>
                <Translator 
                    valueProp = {this.state.term}
                    inputProp = {event => this.setState({term: event.target.value})}
                    gameProp = { (event, data) => this.setState({game: data.value, character: ['None','None','None']})}
                    currgameProp = {this.state.game}
                />
                <div id="text">click an image to see a translation</div>
                {CharactersComponent()}
                <Output
                    imageProp = {this.createImage()}
                />
                <CopyToClipboard text={this.outputURL()}> 
                    <button>GET URL</button>
                </CopyToClipboard>
            </div>
        );
    }
}

export default App


