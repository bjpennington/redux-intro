import React, { Component } from 'react';
import {connect} from 'react-redux';

class ElementsForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
          newElement: {
            name: '',
            atomicNumber: ''
          }
        }
      }
    
      handleInputChangeFor = (propertyName) => {
        // set state of react local state to whatever is typed
        return (event => {
          this.setState({
            newElement: {
              ...this.state.newElement,
              [propertyName]: event.target.value
            }
          })
        })
      }
    
      handleSubmit = (event) => {
        event.preventDefault();
        this.props.dispatch({ type: 'ADD_ELEMENT', payload: this.state.newElement });
        this.setState({
          newElement: {
            name: '',
            atomicNumber: ''
          }
        })
      }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input type="text" placeholder="element" value={this.state.newElement.name} onChange={this.handleInputChangeFor('name')} />
                <input type="number" placeholder="atomic number" value={this.state.newElement.atomicNumber} onChange={this.handleInputChangeFor('atomicNumber')} />
                <input type="submit" value="Add Element" />
            </form>
        )
    }
}

export default connect()(ElementsForm);