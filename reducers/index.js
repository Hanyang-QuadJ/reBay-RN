import { combineReducers} from 'redux';
import {
    START_TO_GET_SHUTTLE_TIMETABLE,
    FAILED_TO_GET_SHUTTLE_TIMETABLE,
    SUCCESSED_TO_GET_SHUTTLE_TIMETABLE
} from '../actionCreaters/ShuttleActionCreater';

const initialState = {
    actionResult: null,
    shuttleTimetable: null,
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case START_TO_GET_SHUTTLE_TIMETABLE:
        case FAILED_TO_GET_SHUTTLE_TIMETABLE:
        case SUCCESSED_TO_GET_SHUTTLE_TIMETABLE:
            return Object.assign({}, state, {
                shuttleTimetable: action.payload.shuttleTimetable
            });
        default:
            return state;
    }
};

const Reducer = combineReducers({ reducer });
export default Reducer;