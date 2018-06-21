import React, { Component } from 'react';

import Person from './Person/Person';

class Persons extends Component {
    constructor(props) {
        super(props);
        console.log('Persons.js constructor, props: ', props);
    }

    componentWillMount() {
        console.log('Persons.js componentWillMount');
    }

    componentDidMount() {
        console.log('Persons.js componentDidMount');
    }

    render() {
        console.log('Persons.js render');

        return this.props.persons.map((person, index) => {
            return (
                <Person
                    key={person.uuid}
                    click={this.props.clicked.bind(this, index)}
                    name={person.name}
                    age={person.age}
                    changed={event => this.props.changed(event, person.uuid)} />
            );
        })
    }
}

export default Persons;