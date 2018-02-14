import * as HttpRequest from '../Utils/HttpRequest';


async function postData() {
    return await HttpRequest.post({ url: "api/auth/login", headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        }, body:JSON.stringify({
            username: "admin",
            password: "admin"
        }) });
}
// async function postData() {
//     return await fetch('localhost:3000/api/auth/login', {
//         method: 'POST',
//         headers: {
//             Accept: 'application/json',
//             'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({
//             username: 'admin',
//             password: 'admin',
//         }),
//     });
// }

export const START_TO_LOIGN = "START_TO_LOGIN";
export const FAILED_TO_LOGIN= "FAILED_TO_LOGIN";
export const SUCCEED_TO_LOGIN = "SUCCEED_TO_LOGIN";

export const dispatchPostData = () => {
    return async ( dispatch ) => {
        // dispatch({
        //     type: START_TO_GET_SHUTTLE_TIMETABLE,
        // });
        try {
            const data = await postData();
            console.log(data);
            dispatch({
                type: SUCCEED_TO_LOGIN,
                payload: {
                    loginStatus: data
                }
            });
        } catch (err) {
            dispatch({
                type: FAILED_TO_LOGIN,
            });
        }
    };
};

