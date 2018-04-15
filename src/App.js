import React, { Component } from "react";
import "./App.css";
import Button from "material-ui/Button";

class App extends Component {
  state = {
    persons: [
      { name: "Max", age: 28 },
      { name: "Manu", age: 29 },
      { name: "Stephanie", age: 25 }
    ],
    otherState: "some other value"
  };

  switchNameHandler = newName => {
    // console.log("was clicked!");
    this.setState({
      persons: [
        { name: newName, age: 28 },
        { name: "Manu", age: 29 },
        { name: "Stephanie", age: 21 }
      ]
    });
  };

  nameChangedHandler = event => {
    this.setState({
      persons: [
        { name: "Max", age: 28 },
        { name: event.target.value, age: 29 },
        { name: "Stephanie", age: 21 }
      ]
    });
  };

  render() {
    return (
      <div className="App">
        <h1>Hi, I 'm a React App</h1>
        <p>This is really working!</p>
        <Button
          variant="raised"
          color="primary"
          onClick={() => this.switchNameHandler("Test")}
        >
          Switch Name
        </Button>
        <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age}
        />
        <Person
          changed={this.nameChangedHandler}
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}
        />
        <Person
          click={this.switchNameHandler.bind(this, "Valentin")}
          name={this.state.persons[2].name}
          age={this.state.persons[2].age}
        >
          My Hobbies: Music
        </Person>
      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'I\'m a React App!!!'))
  }
}

export default App;
