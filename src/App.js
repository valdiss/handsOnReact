import React, { Component } from "react";
import Button from "material-ui/Button";

import "./App.css";

import Person from "./Person/Person";

class App extends Component {
  state = {
    persons: [
      { uuid: "1234", name: "Max", age: 28 },
      { uuid: "2345", name: "Manu", age: 29 },
      { uuid: "3456", name: "Stephanie", age: 25 }
    ],
    otherState: "some other value",
    showPersons: false
  };

  nameChangedHandler = (event, uuid) => {
    const personIndex = this.state.persons.findIndex(person => person.uuid === uuid);

    const person = { ...this.state.persons[personIndex] };
    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({
      persons: persons
    });
  };

  togglePersonsHandler = () => {
    const doesItShow = !this.state.showPersons;
    this.setState({
      showPersons: doesItShow
    });
  };

  deletePersonHandler = personIndex => {
    // const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({
      persons: persons
    });
  };

  render() {
    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return (
              <Person
                key={person.uuid}
                click={this.deletePersonHandler.bind(this, index)}
                name={person.name}
                age={person.age}
                changed={event => this.nameChangedHandler(event, person.uuid)} />
            );
          })}
        </div>
      );
    }

    return (
      <div className="App">
        <h1>Hi, I 'm a React App</h1>
        <p>This is really working!</p>
        <Button
          variant="raised"
          color="primary"
          onClick={this.togglePersonsHandler}
        >
          Toggle Persons
        </Button>
        {persons}
      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'I\'m a React App!!!'))
  }
}

export default App;
