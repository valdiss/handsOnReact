import React, { Component } from "react";
import Input from "material-ui/TextField";
import PropTypes from 'prop-types';

import withClass from '../../../hoc/withClass';

import classes from "./Person.css";

class Person extends Component {

  constructor(props) {
    super(props);
    console.log('Person.js constructor, props: ', props);
  }

  componentWillMount() {
    console.log('Person.js componentWillMount');
  }

  componentDidMount() {
    console.log('Person.js componentDidMount');
  }

  render() {
    console.log('Person.js render');

    return (
      <React.Fragment>
        <p onClick={this.props.click}>
          I'm {this.props.name} and I am {this.props.age} years old!
        </p>
        <p>{this.props.children}</p>
        <Input type="text" onChange={this.props.changed} value={this.props.name} />
      </React.Fragment>
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
