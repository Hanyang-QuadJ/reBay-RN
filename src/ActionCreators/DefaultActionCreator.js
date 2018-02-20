import {ServerEndPoint, ServerEndPoint2} from "../Constants/server";
import {AsyncStorage} from 'react-native';

//Define Type

export const START_TO_FETCH = "START_TO_FETCH";
export const FAILED_TO_FETCH = "FAILED_TO_FETCH";
export const SUCCEED_TO_FETCH = "SUCCEED_TO_FETCH";

const SAMPLE_STORAGE = "SAMPLE_STORAGE";

//LocalStorage
function sampleStore(data) {
    try {
        AsyncStorage.setItem(SAMPLE_STORAGE, data);


    } catch (error) {
        console.log(error)
    }

}

export const  defaultFetch = () => {
    return async (dispatch) => {
        try {
            dispatch({type: START_TO_FETCH, loading:true});
            let response = await fetch(
                ServerEndPoint+'api/shuttle/vacation/week'
            );
            let responseJson = await response.json();
            console.log(responseJson);
            await dispatch({type: SUCCEED_TO_FETCH, payload: responseJson.shuttleA, loading:false});
        } catch (error) {
            dispatch({type: FAILED_TO_FETCH, payload: {data: "NETWORK_ERROR"}});
            console.error(error);
        }

    }

};


// export const defaultFetch = () => {
//     return async (dispatch) => {
//         dispatch({type: START_TO_FETCH});
//         await fetch(ServerEndPoint, {
//             method: 'GET',
//         })
//             .then((response) => {
//                 if (response.status >= 200 && response.status <= 300) {
//                     return response.json()
//                         .then(responseData => {
//                                 console.log(responseData);
//                                 dispatch({type: SUCCEED_TO_FETCH, payload: {data: responseData}});
//                             }
//                         )
//                 }
//                 else {
//                     return response.json()
//                         .then(responseData => (
//                             dispatch({type: FAILED_TO_FETCH, payload: {data: "SERVER_ERROR"}})
//                         ))
//                 }
//             })
//             .catch(err => {
//                 dispatch({type: FAILED_TO_FETCH, payload: {data: "NETWORK_ERROR"}})
//
//             });
//     }
//
// };



