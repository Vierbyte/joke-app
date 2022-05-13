import React from 'react';

class JokeApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            joke: ''
        };
    }
    render() {
        return (
            <div>
                <p>{this.state.joke}</p>
                <button onClick={this._fetchJoke}>New Joke</button>
            </div>
        );
    }
    _fetchJoke = () => {
        const url = 'https://api.chucknorris.io/jokes/random?category=dev';
        fetch(url)
            .then((response) => response.json())
            .then(jokeJson => {
                this.setState({ 
                    joke: jokeJson.value,
                }, () => {
                    console.log('New Joke stored')
                })
            })
    }
}

export default JokeApp;