import React from 'react';
// import logo from './logo.svg';
import './App.css';

// import Quote from './Quote/Quote';
// import Quotes from './Quotes/Quotes';
// import Lamp from './Lamp/Lamp';
// import NameForm from './NameForm/NameForm';
import GenerateEmployee from './GenerateEmployee/GenerateEmployee';
import DisplayEmployee from './DisplayEmployee/DisplayEmployee';

function App() {

    const sampleEmployee = {
        gender: "male",
        name: {
            title: "MR",
            first: "Clément",
            last: "Bouakil",
        },
        location: {
            street: "5 allée des veuves",
            city: "Tinqueux",
            postcode: "51430",
        },
        email: "bouakil.clement.pro@gmail.com",
        picture: {
            medium: "https://avatars0.githubusercontent.com/u/49914045?s=460&v=4",
        },
    }

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
            <GenerateEmployee />
            <DisplayEmployee employee={sampleEmployee} />
        </div>
    );
}

export default App;
