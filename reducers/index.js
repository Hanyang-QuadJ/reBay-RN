import {combineReducers} from 'redux';
import {
    START_TO_GET_SHUTTLE_TIMETABLE,
    FAILED_TO_GET_SHUTTLE_TIMETABLE,
    SUCCEED_TO_GET_SHUTTLE_TIMETABLE
} from "../ActionCreators/ShuttleActionCreator";

const initialState = {
    actionResult: null,
    loading:true,
    shuttleTimetable: null,
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
        default:
            return state;
    }
};

const Reducer = combineReducers({reducer});
export default Reducer;