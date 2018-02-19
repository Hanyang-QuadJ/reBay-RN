import { combineReducers } from 'redux';
import  LoginReducer  from './LoginReducer';
import ShuttleReducer from './ShuttleReducer';
import NavigationReducer from './NavigationReducer';
import ScrollToTopReducer from './ScrollToTopReducer';

const Reducer = combineReducers({ShuttleReducer, LoginReducer, NavigationReducer, ScrollToTopReducer});
export default Reducer;