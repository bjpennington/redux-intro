import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import ElementsForm from './components/ElementsForm/ElementsForm';
import ElementsList from './components/ElementsList/ElementsList';

class App extends Component {



  render() {

    return (
      <div>
        <p>Redux Intro</p>
        {/* When we click, make redux happen */}
        <button onClick={() => this.props.dispatch({ type: 'BUTTON_ONE' })}>Button One</button>
        <button onClick={() => this.props.dispatch({ type: 'BUTTON_TWO' })}>Button Two</button>
        <ElementsForm />
        {JSON.stringify(this.props.elements)}
        {JSON.stringify(this.props.first)}
        <button onClick={() => this.props.dispatch({ type: 'CLEAR_LIST' })}>Clear List</button>
        <ElementsList />
      </div>
    );
  }
}

// how we will be interacting with props and redux
const mapStateToProps = (state) => {
  // what this returns appears on this component's props
  return {
    elements: state.elementList,
    first: state.firstReducer
  }
}

// currying
// connect gives us dispatch on props
// connect can take in our mapReduxStateToProps, which gives us our data from redux
export default connect(mapStateToProps)(App);

// let connectedComponent = connect();
// let connectedApp = connectedComponent(App);
