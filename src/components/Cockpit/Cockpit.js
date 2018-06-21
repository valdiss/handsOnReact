import React from 'react';
import Button from "material-ui/Button";

import classes from "./Cockpit.css";

const cockpit = props => {
    return (
        <div className={classes.Cockpit}>
            <h1>{props.appTitle}</h1>
            <p>This is really working!</p>
            <Button
                variant="raised"
                color="primary"
                onClick={props.toggle}
            >
                Toggle Persons
        </Button>
        </div>
    );
}

export default cockpit;