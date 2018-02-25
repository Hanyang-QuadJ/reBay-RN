import { combineReducers } from 'redux';
import  LoginReducer  from './LoginReducer';
import NavigationReducer from './NavigationReducer';
import ScrollToTopReducer from './ScrollToTopReducer';
import DefaultReducer from './DefaultReducer';
import SignUpReducer from './SignUpReducer';
import BrandReducer from './BrandReducer';



const Reducer = combineReducers({LoginReducer, NavigationReducer, ScrollToTopReducer, DefaultReducer, SignUpReducer, BrandReducer});
export default Reducer;