import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import reducers from '../Reducers';

const loggerMiddleware = createLogger();
const createStoreWithMiddleware = applyMiddleware(
    thunkMiddleware, // Middleware for dispatch()
    loggerMiddleware // Middleware for loging
)(createStore);

let store = createStoreWithMiddleware(reducers);


export default store;