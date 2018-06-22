import React, { Component } from "react";
import PropTypes from 'prop-types';

import withClass from '../../../hoc/withClass';
import Aux from '../../../hoc/Aux';
import { AuthContext } from '../../../containers/App';

import classes from "./Person.css";

class Person extends Component {

  constructor(props) {
    super(props);
    this.inputRef = React.createRef();
    console.log('Person.js constructor, props: ', props);
  }

  componentWillMount() {
    console.log('Person.js componentWillMount');
  }

  componentDidMount() {
    console.log('Person.js componentDidMount');
    if (this.props.position === 0) {
      this.inputRef.current.focus();
    }
  }

  focusIt() {
    this.inputRef.current.focus();
  }

  render() {
    console.log('Person.js render');

    return (
      <Aux>
        <AuthContext.Consumer>
          {auth => auth ? <p>Authenticated!!</p> : null}
        </AuthContext.Consumer>
        <p onClick={this.props.click}>
          I'm {this.props.name} and I am {this.props.age} years old!
        </p>
        <p>{this.props.children}</p>
        <input
          ref={this.inputRef}
          type="text"
          onChange={this.props.changed}
          value={this.props.name} />
      </Aux>
    );

    // return [
    //   <p key='1' onClick={this.props.click}>I'm {this.props.name} and I am {this.props.age} years old!</p>,
    //   <p key='2'>{this.props.children}</p>,
    //   <Input key='3' type="text" onChange={this.props.changed} value={this.props.name} />
    // ];
  }
}

Person.propTypes = {
  click: PropTypes.func,
  name: PropTypes.string,
  age: PropTypes.number,
  changed: PropTypes.func
}

export default withClass(Person, classes.Person);
// export default Person;
