import React, { Component } from "react";
import "./App.css";
import Person from "./Person/Person";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hi, I 'm a React App</h1>
        <p>This is really working!</p>
        <button>Switch Name</button>
        <Person name="Val" age="29" />
        <Person name="Georges" age="58">
          My Hobbies: Music
        </Person>
      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'I\'m a React App!!!'))
  }
}

export default App;
