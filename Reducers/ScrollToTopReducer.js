import {SCROLL_TO_TOP, TOP_RESET} from "../ActionCreators/ScrollToTopCreator"

const initialState = {
    top:false
};

const ScrollToTopReducer = (state = initialState, action) => {
    switch (action.type){
        case SCROLL_TO_TOP:
            return Object.assign({}, state, {
                top:action.payload.top
            });
        case TOP_RESET:
            return Object.assign({}, state, {
                top:action.payload.top
            });
        default:
            return state;
    }

};

export default ScrollToTopReducer;