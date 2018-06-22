import React, { PureComponent } from "react";

import Persons from "../components/Persons/Persons";
import Cockpit from "../components/Cockpit/Cockpit";
import withClass from '../hoc/withClass';

import classes from './App.css';

export const AuthContext = React.createContext(false);

class App extends PureComponent {

  constructor(props) {
    super(props);
    console.log('App.js constructor, props: ', props);
  }

  componentWillMount() {
    console.log('App.js componentWillMount');
  }

  componentDidMount() {
    console.log('App.js componentDidMount');
  }

  state = {
    persons: [
      { uuid: "1234", name: "Max", age: 28 },
      { uuid: "2345", name: "Manu", age: 29 },
      { uuid: "3456", name: "Stephanie", age: 25 }
    ],
    otherState: "some other value",
    showPersons: false,
    toggleClicked: 0,
    authenticated: false
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
    this.setState((prevState, props) => {
      return {
        showPersons: doesItShow,
        toggleClicked: prevState.toggleClicked + 1
      }
    });
  }

  deletePersonHandler = personIndex => {
    // const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({
      persons: persons
    });
  };

  // shouldComponentUpdate(nextProps, nextState) {
  //   console.log('UPDATE App.js shouldComponentUpdate', nextProps, nextState);
  //   return nextState.persons !== this.state.persons ||
  //     nextState.showPersons !== this.state.showPersons;
  // }

  componentWillUpdate(nextProps, nextState) {
    console.log('UPDATE App.js componentWillUpdate', nextProps, nextState);
  }


  static getDerivedStateFromProps(nextProps, prevState) {
    console.log('App.js getDerivedStateFromProps', nextProps, prevState);

    return prevState;
  }

  getSnapshotBeforeUpdate() {
    console.log('App.js getSnapshotBeforeUpdate');
  }

  componentDidUpdate() {
    console.log('UPDATE App.js componentDidUpdate');
  }

  loginHandler = () => {
    this.setState({ authenticated: true });
  }

  render() {
    console.log('App.js render');
    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          <Persons persons={this.state.persons}
            clicked={this.deletePersonHandler}
            changed={this.nameChangedHandler} />
        </div>
      );
    }

    return (
      <React.Fragment>
        <button onClick={() => { this.setState({ showPersons: true }) }}>Show Persons</button>
        <Cockpit
          login={this.loginHandler}
          appTitle={this.props.title}
          toggle={this.togglePersonsHandler} />
        <AuthContext.Provider value={this.state.authenticated}>
          {persons}
        </AuthContext.Provider>
      </React.Fragment>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'I\'m a React App!!!'))
  }
}

export default withClass(App, classes.App);
