import { NavigationActions } from 'react-navigation';
import MainNavigator from "../Navigation/NavigationStack";

const initialState = MainNavigator.router.getStateForAction(NavigationActions.init());

const NavigationReducer = (state = initialState, action) => {
    const newState = MainNavigator.router.getStateForAction(action, state);
    return newState || state;
};

export default NavigationReducer;