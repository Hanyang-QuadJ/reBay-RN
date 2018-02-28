import {combineReducers} from 'redux';
import LoginReducer from './LoginReducer';
import NavigationReducer from './NavigationReducer';
import ScrollToTopReducer from './ScrollToTopReducer';
import DefaultReducer from './DefaultReducer';
import SignUpReducer from './SignUpReducer';
import BrandReducer from './BrandReducer';
import ItemReducer from './ItemReducer';


const Reducer = combineReducers({
    LoginReducer,
    NavigationReducer,
    ScrollToTopReducer,
    DefaultReducer,
    SignUpReducer,
    BrandReducer,
    ItemReducer
});
export default Reducer;