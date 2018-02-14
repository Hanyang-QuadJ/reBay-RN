export const START_TO_GET_SHUTTLE_TIMETABLE = "START_TO_GET_SHUTTLE_TIMETABLE";
export const FAILED_TO_GET_SHUTTLE_TIMETABLE = "FAILED_TO_GET_SHUTTLE_TIMETABLE";
export const SUCCEED_TO_GET_SHUTTLE_TIMETABLE = "SUCCEED_TO_GET_SHUTTLE_TIMETABLE";

import * as HttpRequest from '../Utils/HttpRequest';

async function getShuttleTimeTable () {
    return await HttpRequest.get({ url: "shuttle/vacation/week" });
}

export const dispatchShuttleTimetable = () => {
    return async  ( dispatch )  => {
        try {
            // dispatch({
            //     type: START_TO_GET_SHUTTLE_TIMETABLE,
            // });
            const data = await getShuttleTimeTable();
            console.log(data);
            dispatch({
                type: SUCCEED_TO_GET_SHUTTLE_TIMETABLE,
                payload: {
                    shuttleTimetable: data.shuttleA
                }
            });
        } catch (err) {
            dispatch({
                type: FAILED_TO_GET_SHUTTLE_TIMETABLE,
            });
        }
    };
};







