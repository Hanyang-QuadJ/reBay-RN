import * as HttpRequest from '../Utils/HttpRequest';


async function getData() {
    return await HttpRequest.get({ url: "" });
}

export const START_TO_GET = "START_TO_GET";
export const FAILED_TO_GET= "FAILED_TO_GET";
export const SUCCEED_TO_GET = "SUCCESSED_TO_GET";

export const dispatchData = () => {
    return async ( dispatch ) => {
        // dispatch({
        //     type: START_TO_GET_SHUTTLE_TIMETABLE,
        // });
        try {
            const data = await getData();
            console.log(data);
            dispatch({
                type: SUCCEED_TO_GET,
                payload: {
                    data: data
                }
            });
        } catch (err) {
            dispatch({
                type: FAILED_TO_GET,
            });
        }
    };
};

