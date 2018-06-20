import React from "react";
import Input from "material-ui/TextField";
import Button from "material-ui/Button";

import classes from "./Person.css";

const person = props => {
  return (
    <div className={classes.Person}>
      <p onClick={props.click}>
        I'm {props.name} and I am {props.age} years old!
      </p>
      <p>{props.children}</p>
      <Input type="text" onChange={props.changed} value={props.name} />
      <Button
        variant="raised"
        color="primary">
        Toggle Persons
        </Button>
    </div>
  );
};

export default person;
