import React, { Component } from 'react';
import './App.css';
import Joke from './components/Joke/joke'

const jokeObj = {
  1: {
    que: "what happens to a car when you press acc and brake together?",
    ans: "it takes a screenshot"
  },
  2: {
    que: "",
    ans: "hwllo mae"
  },
  3: {
    que: "my jok awsome",
    ans: "you man bu"
  },
  4: {
    que: "",
    ans: "heya i'm the punchline"
  },
  5: {
    que: "did you say something",
    ans: "yes, i did 'something'"
  }
};

class App extends Component {
  render() {
    return (
      <div className="joke-list">
        <Joke 
          query={jokeObj[1]}
        />
        <Joke query={jokeObj[2]}
        />
        <Joke query={jokeObj[3]}
        />
        <Joke query={jokeObj[4]}
        />
        <Joke query={jokeObj[5]}
        />
      </div>
    );
  }
}

export default App;
