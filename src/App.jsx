import React, { Component } from "react";
import "./App.css";

import Counter from './Counter/Counter';

class App extends Component {
  constructor(props) {
    const sampleQuote = {
      quote:
        "Shoplifting is a victimless crime, like punching someone in the dark.",
      character: "Nelson Muntz",
      image:
        "https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FNelsonMuntz.png?1497567511185",
      characterDirection: "Left"
    };

    super(props);
    this.state = {
      quote: sampleQuote
    };
  }

  getQuote = () => {
    fetch("https://thesimpsonsquoteapi.glitch.me/quotes")
      .then(response => response.json())
      .then(data => {
        this.setState({
          quote: data[0]
        });
      });
  };

  render() {
    return (
      <div className="App">
        {/* <GenerateQuote selectQuote={() => this.getQuote()} />
        <DisplayQuote quote={this.state.quote} /> */}
        <Counter />
      </div>
    );
  }
}

export default App;
