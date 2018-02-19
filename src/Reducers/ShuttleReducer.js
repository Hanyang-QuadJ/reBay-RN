import {
    START_TO_GET_SHUTTLE_TIMETABLE,
    FAILED_TO_GET_SHUTTLE_TIMETABLE,
    SUCCEED_TO_GET_SHUTTLE_TIMETABLE,

} from "../ActionCreators/ShuttleActionCreator";

const initialState = {
    actionResult: null,
    loading:true,
    shuttleTimetable: null,

};


const ShuttleReducer = (state = initialState, action) => {
    switch (action.type){
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

export default ShuttleReducer;