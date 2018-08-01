import React, { Component } from 'react';
import {connect} from 'react-redux';
import Element from '../Element/Element';

class ElementsList extends Component {
    render() {

        let sortElements = (element1, element2) => {
            return (Number(element1.atomicNumber) - Number(element2.atomicNumber))
        }

        let sortedElements = this.props.elements.sort(sortElements);

        let elementsList = sortedElements.map(
            (element, index) => {
              return(<Element key={index} element={element} />)
            }
          )

        return (
            <ul>
                {elementsList}
            </ul>
        )
    }
}

const mapStateToProps = (state) => {
    // what this returns appears on this component's props
    return {
      elements: state.elementList,
      first: state.firstReducer
    }
  }


export default connect(mapStateToProps)(ElementsList);