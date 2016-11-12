import React, { Component } from 'react';
import AnimalsService from './AnimalsService.js';

class Leaderboard extends Component {

    constructor() {
        super();

        this.state = {
            animals: []
        };
    }

    componentDidMount() {
        this.setState({
            animals: AnimalsService.getAllAnimals().animals
        });
    }

    renderAnimal(animal, index) {
        return (
            <li className="animal-list-item" key={index}>
                <img className="animal-image" src={animal.url} />
                <span className="animal-votes">
                    {animal.votes} Votes
                </span>
            </li>
        );
    }

    render() {
        return (
            <div className="Leaderboard">
                <ul>
                    {this.state.animals.map(this.renderAnimal)}
                </ul>
            </div>
        );
    }
}

export default Leaderboard;
