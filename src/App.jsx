import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';

// import Quote from './Quote/Quote';
// import Quotes from './Quotes/Quotes';
// import Lamp from './Lamp/Lamp';
// import NameForm from './NameForm/NameForm';
// import GenerateEmployee from './GenerateEmployee/GenerateEmployee';
// import DisplayEmployee from './DisplayEmployee/DisplayEmployee';
import DisplayQuote from './DisplayQuote/DisplayQuote';
import GenerateQuote from './GenerateQuote/GenerateQuote';

class App extends Component {

    constructor(props) {

        // const sampleEmployee = {
        //     gender: "male",
        //     name: {
        //         title: "MR",
        //         first: "Clément",
        //         last: "Bouakil",
        //     },
        //     location: {
        //         street: "5 allée des veuves",
        //         city: "Tinqueux",
        //         postcode: "51430",
        //     },
        //     email: "bouakil.clement.pro@gmail.com",
        //     picture: {
        //         medium: "https://avatars0.githubusercontent.com/u/49914045?s=460&v=4",
        //     },
        // }

        const sampleQuote = {
            quote: "Shoplifting is a victimless crime, like punching someone in the dark.",
            character: "Nelson Muntz",
            image: "https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FNelsonMuntz.png?1497567511185",
            characterDirection: "Left",
        }

        super(props);
        this.state = {
            // employee: sampleEmployee,
            quote: sampleQuote,
        };
    }

    // getEmployee = () => {
    //     fetch("https://randomuser.me/api?nat=fr")
    //         .then(response => response.json())
    //         .then(data => {
    //             this.setState({
    //                 employee: data.results[0],
    //             });
    //         });
    // }

    getQuote = () => {
        fetch("https://thesimpsonsquoteapi.glitch.me/quotes")
            .then(response => response.json())
            .then(data => {
                this.setState({
                    quote: data[0],
                });
            });
    }


    render() {
        return (
            <div className="App">
                {/* <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <h1 className="App-title">Simpsons Quotes</h1>
                </header>
                <Quote
                    quote="I believe the children are the future... Unless we stop them now!"
                    character="Homer Simpson"
                    image="https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FHomerSimpson.png?1497567511939"
                />
                <Quote
                    quote="Me fail English? That's unpossible"
                    character="Ralph Wiggum"
                    image="https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FRalphWiggum.png?1497567511523"
                />
                <Quotes />
                <Lamp />
                <Lamp on />
                <NameForm /> */}
                {/* <GenerateEmployee selectEmployee={() => this.getEmployee()} />
                <DisplayEmployee employee={this.state.employee} /> */}
                <GenerateQuote selectQuote={() => this.getQuote()} />
                <DisplayQuote quote={this.state.quote} />
            </div>
        );
    }

}

export default App;
