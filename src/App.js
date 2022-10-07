import React, { Component } from "react";

import { Container, Grid, Button } from "@material-ui/core";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkIcon from "@material-ui/icons/Link";

import * as styles from "./styles.module.scss";

import Translator from "./Translator.js";
import ImageOutput from "./ImageOutput.js";
import GameDropdown from "./GameDropdown.js";
import list from "./list.json";

/* 
 	Regex object
	Used to determine the regex to be used for specific games
	NOTE: Many games use the same regex for now
*/
const CONF = {
  streetfighter: {
    regex: /(tk)\s*|\s*(,|>|xx)\s*|\+|-|\./g,
  },
  tekken: {
    regex: /\s|\+|(\d\+\d\+\d\+\d|\d\+\d\+\d|\d\+\d|\d)/,
  },
  mvci: {
    regex: /(tk)\s*|\s*(,|>|xx)\s*|\+|-|\./g,
  },
  dbfz: {
    regex: /(tk)\s*|\s*(,|>|xx)\s*|\+|-|\./g,
  },
  bbtag: {
    regex: /(tk)\s*|\s*(,|>|xx)\s*|\+|-|\./g,
  },
  unib: {
    regex: /(tk)\s*|\s*(,|>|xx)\s*|\+|-|\./g,
  },
  ggst: {
    regex: /(tk)\s*|\s*(,|>|xx)\s*|\+|-|\./g,
  },

  // To be implemented
  mk: {
    regex: /(tk)\s*|\s*(,|>|xx)\s*|\+|-|\./g,
  },
  // Needs to be worked on
  sc: {
    regex: /\s|(,|~)|(\[[1-9]\]|\([1-9]\))|([1-9])/g,
  },
};

// Main component
class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      input: "",
      game: "streetfighter",
      character: ["None", "None", "None"],
    };
  }

  // Return the user input using a given regex
  getInputFromRegex() {
    let game = this.state.game;
    let userInput = this.state.input;
    let inputRegex;

    switch (game) {
      case "streetfighter":
        inputRegex = userInput.toLowerCase().split(CONF["streetfighter"].regex);
        break;
      case "tekken":
        inputRegex = userInput.split(CONF["tekken"].regex);
        break;
      // Uses same regex as 'streetfighter' for now
      case "mvci":
      case "dbfz":
      case "bbtag":
      case "unib":
        inputRegex = userInput.split(CONF["streetfighter"].regex);
        break;
      case "ggst":
        inputRegex = userInput.split(CONF["streetfighter"].regex);
        break;
      case "sc":
        inputRegex = userInput.split(CONF["sc"].regex);
      default:
        inputRegex = userInput.toLowerCase().split(CONF["streetfighter"].regex);
        break;
    }
    // Filter undefined
    return inputRegex.filter((x) => {
      return x;
    });
  }

  // Creates combo images from the user input
  createImage = () => {
    let altImg = document.getElementsByTagName("img");
    let comboInput = this.getInputFromRegex();
    const imagesContainer = document.querySelector("#images");
    const knownInputs = list[this.state.game];

    // Check if imageContainer exists
    if (imagesContainer) {
      // Make inner html blank after every key press (to keep array empty)
      imagesContainer.innerHTML = "";
      comboInput.forEach((input) => {
        // Try to find given input from known inputs
        let foundInput = null;
        for (let key in knownInputs) {
          const inputCanditate = knownInputs[key];
          if (inputCanditate.term.includes(input)) {
            foundInput = inputCanditate;
            break;
          }
        }
        if (!foundInput) return;

        // Add image(s) of the input
        foundInput.image.forEach((src, i) => {
          const img = document.createElement("img");
          img.src = src;
          img.alt = foundInput.alt || "";
          img.className = foundInput.size[i];
          imagesContainer.appendChild(img);
        });
      });
    }
    this.createTranslation();
  };

  // Creates an 'onClick' event listener for each button which changes the translation text to the image's 'alt' text
  createTranslation() {
    let altImg = document.getElementsByTagName("img");

    if (altImg) {
      for (var k = 0; k < altImg.length; k++) {
        altImg[k].addEventListener("click", function show() {
          document.querySelector("#text").innerHTML = this.alt;
        });
      }
    }
  }

  // Render react elements on page
  render() {
    return (
      <Container className={styles.app}>
        <Grid
          container
          justify="space-between"
          alignItems="center"
          className={styles.title}
        >
          <h1>Combo Translator</h1>
          <nav>
            <Button
              href="https://github.com/dkihe/combo-translator/"
              size="small"
              startIcon={<GitHubIcon />}
              className={styles.button}
            >
              repo
            </Button>
            <Button
              href="https://github.com/dkihe/combo-translator/wiki"
              size="small"
              startIcon={<LinkIcon />}
              className={styles.button}
            >
              wiki
            </Button>
          </nav>
        </Grid>
        <Grid container alignItems="center" className={styles.content}>
          <GameDropdown
            gameProp={(e) => {
              const { value } = e.target;
              this.setState({ game: value });
            }}
            valueProp={this.state.game}
          />
          <Translator
            valueProp={this.state.input}
            inputProp={(e) => {
              const { value } = e.target;
              this.setState({ input: value });
            }}
          />
        </Grid>
        <Grid
          container
          spacing={0}
          alignItems="center"
          justify="center"
          align="center"
          id="text"
          className={styles.text}
        >
          Click an image to see a translation
        </Grid>
        <ImageOutput imageProp={this.createImage()} />
      </Container>
    );
  }
}

export default App;
