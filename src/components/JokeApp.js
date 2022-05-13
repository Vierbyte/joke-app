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
            </div>
        )
    }
}

export default JokeApp;