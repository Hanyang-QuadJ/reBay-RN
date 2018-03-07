import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import Reducer from "../Reducers";
const loggerMiddleware = createLogger();
import {
    createReactNavigationReduxMiddleware,
} from 'react-navigation-redux-helpers';

const middleware = createReactNavigationReduxMiddleware(
    "root",
    state => state.NavigationReducer,
);



const createStoreWithMiddleware = applyMiddleware(
    thunkMiddleware, // Middleware for dispatch()
    middleware,
    // Middleware for loging
)(createStore);

const store = createStoreWithMiddleware(Reducer);
export default store;






