import React, { Component } from 'react';
import './App.css';
import Leaderboard from './Leaderboard.js';
import Voting from './Voting.js';

class App extends Component {
    constructor() {
        super();
        this.state = {
            page: 'voting'
        };
    }

    renderBody() {
        if(this.state.page === 'voting') {
            return <Voting />
        }

        if(this.state.page === 'leaderboard') {
            return <Leaderboard />
        }
    }

    render() {
        return (
            <div className="App">
                <div className="Header">
                    <button onClick={() => this.setState({page: 'voting'})}>
                        Voting
                    </button>
                    <button onClick={() => this.setState({page: 'leaderboard'})}>
                        Leaderboard
                    </button>
                </div>
                <div className="Body">
                    {this.renderBody()}
                </div>
            </div>
        );
    }
}

export default App;
