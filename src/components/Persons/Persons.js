import React, { PureComponent } from 'react';

import Person from './Person/Person';

class Persons extends PureComponent {
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

    componentWillReceiveProps(nextProps) {
        console.log('UPDATE Persons.js componentWillReceiveProps', nextProps);
    }

    // shouldComponentUpdate(nextProps, nextState) {
    //     console.log('UPDATE Persons.js shouldComponentUpdate', nextProps, nextState);
    //     return nextProps.persons !== this.props.persons ||
    //         nextProps.clicked !== this.props.clicked ||
    //         nextProps.changed !== this.props.changed;
    // }

    componentWillUpdate(nextProps, nextState) {
        console.log('UPDATE Persons.js componentWillUpdate', nextProps, nextState);
    }

    componentDidUpdate() {
        console.log('UPDATE Persons.js componentDidUpdate');
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