import {ServerEndPoint, ServerEndPoint2} from "../Constants/server";
import {AsyncStorage} from 'react-native';

//Define Type

export const START_TO_SIGN_UP = "START_TO_FETCH";
export const FAILED_TO_SIGN_UP = "FAILED_TO_FETCH";
export const SUCCEED_TO_SIGN_UP = "SUCCEED_TO_FETCH";

const ACCESS_TOKEN= "ACCESS_TOKEN";

//LocalStorage
function storeToken(data) {
    try {
        AsyncStorage.setItem(ACCESS_TOKEN, data);


    } catch (error) {
        console.log(error)
    }

}

export const  signUp = (username, password, email, phone) => {
    return async (dispatch) => {
        try {
            dispatch({type: START_TO_SIGN_UP, signUpStatus:false});
            let response = await fetch(
                ServerEndPoint2+'api/auth/register',{
                    method:'POST',
                    headers: {
                        Accept: 'application/json',
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        username:username,
                        email: email,
                        password: password,
                        phone:phone,

                    })
                }
            );
            let responseJson = await response.json();
            console.log(responseJson);
            await dispatch({type: SUCCEED_TO_SIGN_UP, payload: responseJson, signUpStatus:true});
            await storeToken(responseJson.token);
        } catch (error) {
            dispatch({type: FAILED_TO_SIGN_UP, payload: {data: "NETWORK_ERROR"}});
            console.error(error);
        }

    }

};