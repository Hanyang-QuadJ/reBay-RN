import {combineReducers} from 'redux';
import  LoginReducer  from './LoginReducer';
import ShuttleReducer from './ShuttleReducer';
import NavigationReducer from './NavigationReducer';

const Reducer = combineReducers({ShuttleReducer, LoginReducer, NavigationReducer});
export default Reducer;