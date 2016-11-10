import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import AnimalsService from './AnimalsService.js';

class App extends Component {
    render() {
        console.log(AnimalsService.getAllAnimals());
        console.log(AnimalsService.vote('Bear_1.jpg'));
        console.log(AnimalsService.getAnimalPair());

        return (
            <div className="App">
                <div className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h2>Welcome to React</h2>
                </div>
                <p className="App-intro">
                    To get started, edit <code>src/App.js</code> and save to reload.
                </p>
            </div>
        );
    }
}

export default App;
