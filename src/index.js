import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {createStore, combineReducers,applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import logger from 'redux-logger';
import firstReducer from './reducers/firstReducer';
import secondReducer from './reducers/secondReducer';
import elementList from './reducers/elementList';

// This creates our store object
// can only take in one reducer
const storeInstance = createStore(
    // This is a reducer. Hang tight.
    combineReducers({
        firstReducer,
        secondReducer,
        elementList
    }),
    applyMiddleware(logger)
)

ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
