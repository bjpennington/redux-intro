import React, {Component} from 'react';

class Element extends Component {
    render() {
        return (
            <li>{this.props.element.name}'s atomic number is {this.props.element.atomicNumber}</li>
        )
    }
}

export default Element;