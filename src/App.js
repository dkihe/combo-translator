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
        //let tekken_re = /(\(.*?\))|\s|(,)\s*|\+|(\d\+\d\+\d\+\d|\d\+\d\+\d|\d\+\d|\d)/
        //let sf_re = /(tk)\s*|\s*(\,|\>|xx)\s*|\+|(\(.*?\))\s*|\-|\./
        let tekken_re = /\s|(,)\s*|\+|(\d\+\d\+\d\+\d|\d\+\d\+\d|\d\+\d|\d)/
        let sf_re = /(tk)\s*|\s*(\,|\>|xx)\s*|\+|\-|\./
        let userinput = this.state.term
        //let regex = /(\(.*?\))/
        if (this.state.game === "tekken"){    
            var item = userinput.split(tekken_re);
        } else if (this.state.game === "streetfighter"){
            var item = userinput.toLowerCase().split(sf_re);
        } else if (this.state.game === "mvci"){
            var item = userinput.split(sf_re);
        } else if (this.state.game === "dbfz"){
            var item = userinput.split(sf_re);
        }
        if (document.querySelector(".images")){
          document.querySelector(".images").innerHTML = ""
            for(var i=0;i<item.length;i++){
                /*if(regex.test(item[i])){
                    let text = item[i]
                    let note = document.createElement("span")
                    note.innerHTML = String(text)
                    document.querySelector(".images").appendChild(note)
                }*/
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

    captureCombo(){
        let canvas = document.querySelector("#canvas")
        let ctx = canvas.getContext("2d")
        let imgDiv = document.querySelector(".images")
        let imgEl = document.getElementsByTagName("img")
        let spanEl = document.getElementsByTagName("span")
        let divEl = imgDiv.hasChildNodes()
        let modal = document.querySelector(".modal")
        let prevX = 0
        let span = document.getElementsByClassName("close")[0];
        var btn = document.getElementById("captureBtn");
        canvas.height = 64

        if (divEl){
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.imageSmoothingEnabled = false;
            for(var n=0; n<imgDiv.children.length; n++){
                if (imgDiv.children[n].nodeName === "IMG"){
                    ctx.drawImage(imgDiv.children[n], prevX ,0,imgDiv.children[n].width,imgDiv.children[n].height)
                    prevX += imgDiv.children[n].clientWidth
                    console.log(prevX)
                }
            }
            var imagedata = ctx.getImageData(0,0,canvas.width,canvas.height)
            canvas.width = prevX
            ctx.putImageData(imagedata,0,0)
            var dataurl = canvas.toDataURL('image/png')
            console.log(dataurl)
            modal.style.display = "block";
        }
        //console.log(canvas.width)
        //console.log(canvas.height)
        //console.log(imagedata)
       // console.log(ctx.measureText(imgDiv.children[n]).width)
        btn.onclick = function() {
            modal.style.display = "block";
        }

        window.onclick = function(event) {
            if (event.target == modal) {
                modal.style.display = "none";
            }
        }
    }

    render() {
        return (
            <div>
                <div id="title">Combo Translator</div>
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


