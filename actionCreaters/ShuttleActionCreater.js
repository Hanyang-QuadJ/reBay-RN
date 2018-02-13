import * as HttpRequest from '../utils/HttpRequest';


async function getShuttleTimeTable () {
    return await HttpRequest.get({ url: "shuttle/vacation/week" });
}


// async function getShuttleTimeTable() {
//     return  await fetch("http://api.exitsoft.kr/api/shuttle/vacation/week")
//         .then((response) => {
//             return response.json()
//         })
//         .catch(err => {
//             return err
//         })
// }

export const START_TO_GET_SHUTTLE_TIMETABLE = "START_TO_GET_SHUTTLE_TIMETABLE";
export const FAILED_TO_GET_SHUTTLE_TIMETABLE = "FAILED_TO_GET_SHUTTLE_TIMETABLE";
export const SUCCESSED_TO_GET_SHUTTLE_TIMETABLE = "SUCCESSED_TO_GET_SHUTTLE_TIMETABLE";

export const dispatchShuttleTimetable = () => {
    return async ( dispatch ) => {
        // dispatch({
        //     type: START_TO_GET_SHUTTLE_TIMETABLE,
        // });
        try {
            const data = await getShuttleTimeTable();
            console.log(data);
            dispatch({
                type: SUCCESSED_TO_GET_SHUTTLE_TIMETABLE,
                payload: {
                    shuttleTimetable: data
                }
            });
        } catch (err) {
            dispatch({
                type: FAILED_TO_GET_SHUTTLE_TIMETABLE,
            });
        }
    };
};

