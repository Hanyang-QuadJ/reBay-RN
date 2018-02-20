import { combineReducers } from 'redux';
import  LoginReducer  from './LoginReducer';
import NavigationReducer from './NavigationReducer';
import ScrollToTopReducer from './ScrollToTopReducer';
import DefaultReducer from './DefaultReducer';
import SignUpReducer from './SignUpReducer'



const Reducer = combineReducers({LoginReducer, NavigationReducer, ScrollToTopReducer, DefaultReducer, SignUpReducer});
export default Reducer;