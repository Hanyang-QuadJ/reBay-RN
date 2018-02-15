import { NavigationActions } from 'react-navigation';
import { TabNavigation} from "../Navigation/NavigationStack";

const initialState = TabNavigation.router.getStateForAction(NavigationActions.init());

const LoggedInNavReducer = (state = initialState, action) => {
    const newState = TabNavigation.router.getStateForAction(action, state);
    return newState || state;
};

export default LoggedInNavReducer;