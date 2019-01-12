import React, { Component } from 'react';
import Joke from './components/Joke/joke'
import jokeData from './components/Joke/api/jokes-test-api'

class App extends Component {
  render() {
    //let's create an array of components
    const arrJokeComponent = jokeData.map(
      ele =>
      <Joke key={ele.id} question={ele.question} punchLine={ele.punchLine} />
    );

    return (
      <div className="joke-list">
        {arrJokeComponent}
      </div>
    );
  }
}

export default App;
