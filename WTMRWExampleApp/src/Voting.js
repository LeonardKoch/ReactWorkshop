import React, { Component } from 'react';
import AnimalsService from './AnimalsService.js';

class Voting extends Component {

    constructor() {
        super();

        this.state = {
            animal1: {
                url: '',
                image: ''
            },
            animal2: {
                url: '',
                image: ''
            }
        };
    }

    componentDidMount() {
        this.loadNewAnimalPair();
    }

    loadNewAnimalPair() {
        this.setState(AnimalsService.getAnimalPair());
    }

    voteForAnimal(animal) {
        AnimalsService.vote(animal);
        this.loadNewAnimalPair();
    }

    render() {
        return (
            <div className="voting">
                <img src={this.state.animal1.url} onClick={() => this.voteForAnimal(this.state.animal1)} />
                <img src={this.state.animal2.url} onClick={() => this.voteForAnimal(this.state.animal2)} />
            </div>
        );
    }
}

export default Voting;
