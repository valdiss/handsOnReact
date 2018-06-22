import React from 'react';
import Button from "material-ui/Button";

const cockpit = props => {
    return (
        <React.Fragment>
            <h1>{props.appTitle}</h1>
            <p>This is really working!</p>
            <Button
                variant="raised"
                color="primary"
                onClick={props.toggle}
            >
                Toggle Persons
            </Button>
            <button onClick={props.login}>Log In</button>
        </React.Fragment>
    );
}

export default cockpit;