import {
    START_TO_SIGN_UP,
    SUCCEED_TO_SIGN_UP,
    FAILED_TO_SIGN_UP

} from "../ActionCreators/SignUpCreator";



const initialState = {
    signUpStatus:false,
    response: null

};

const SignUpReducer  = (state = initialState, action) => {
    switch (action.type) {
        case START_TO_SIGN_UP:
            return Object.assign({}, state, {
                signUpStatus: action.signUpStatus
            });
        case SUCCEED_TO_SIGN_UP:
            return Object.assign({}, state, {
                response: action.payload,                
                signUpStatus: action.signUpStatus
            });
        case FAILED_TO_SIGN_UP:

        default:
            return state;
    }
};
export default SignUpReducer;