import React from "react";
import Input from "material-ui/TextField";

import "./Person.css";

const person = props => {
  return (
    <div className="Person">
      <p onClick={props.click}>
        I'm {props.name} and I am {props.age} years old!
      </p>
      <p>{props.children}</p>
      <Input type="text" onChange={props.changed} value={props.name} />
    </div>
  );
};

export default person;
