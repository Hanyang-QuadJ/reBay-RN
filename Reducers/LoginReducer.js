import {
    FAILED_TO_LOGIN,
    SUCCEED_TO_LOGIN
} from "../ActionCreators/LoginActionCreator";



const initialState = {
    loginStatus: false,
    loginResponse: null,
};

const LoginReducer  = (state = initialState, action) => {
    switch (action.type) {
        case SUCCEED_TO_LOGIN:

            return Object.assign({}, state, {
                loginStatus: true,
                loginResponse: action.payload.loginResponse,

            });
        case FAILED_TO_LOGIN:
            return Object.assign({}, state, {
                loginStatus:false,
            });
        default:
            return state;
    }
};
export default LoginReducer;