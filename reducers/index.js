import {combineReducers} from 'redux';
import  LoginReducer  from './LoginReducer';
import ShuttleReducer from './ShuttleReducer';


const Reducer = combineReducers({ShuttleReducer, LoginReducer});
export default Reducer;