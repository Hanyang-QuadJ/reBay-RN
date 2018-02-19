import { combineReducers } from 'redux';
import  LoginReducer  from './LoginReducer';
import NavigationReducer from './NavigationReducer';
import ScrollToTopReducer from './ScrollToTopReducer';
import DefaultReducer from './DefaultReducer';



const Reducer = combineReducers({LoginReducer, NavigationReducer, ScrollToTopReducer, DefaultReducer});
export default Reducer;