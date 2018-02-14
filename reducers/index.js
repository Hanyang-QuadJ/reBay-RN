import {combineReducers} from 'redux';
import {
    START_TO_GET_SHUTTLE_TIMETABLE,
    FAILED_TO_GET_SHUTTLE_TIMETABLE,
    SUCCEED_TO_GET_SHUTTLE_TIMETABLE,

} from "../ActionCreators/ShuttleActionCreator";

import {
    FAILED_TO_LOGIN,
    SUCCEED_TO_LOGIN
} from "../ActionCreators/LoginActionCreator";

const initialState = {
    actionResult: null,
    loading:true,
    shuttleTimetable: null,
    loginStatus: false,
    loginResponse: null,
};

const reducer = (state = initialState, action) => {
    console.log('!!!');
    console.log(action.type);
    switch (action.type) {
        case START_TO_GET_SHUTTLE_TIMETABLE:
        case FAILED_TO_GET_SHUTTLE_TIMETABLE:
        case SUCCEED_TO_GET_SHUTTLE_TIMETABLE:
            return Object.assign({}, state, {
                shuttleTimetable: action.payload.shuttleTimetable,
                loading:false,
            });
        case SUCCEED_TO_LOGIN:
            return Object.assign({}, state, {
                loginStatus: true,
                loginResponse: action.payload.loginResponse,
            });
        case FAILED_TO_LOGIN:
        default:
            return state;
    }
};

const Reducer = combineReducers({reducer});
export default Reducer;