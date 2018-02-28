import {
    START_TO_POST_ITEM,
    SUCCEED_TO_POST_ITEM,
    FAILED_TO_POST_ITEM

} from "../ActionCreators/ItemActionCreator";

const initialState = {
    item_id:null,
};

const ItemReducer  = (state = initialState, action) => {
    switch (action.type) {
        case START_TO_POST_ITEM:
        case SUCCEED_TO_POST_ITEM:
            return Object.assign({}, state, {
                item_id:action.payload
            });
        case FAILED_TO_POST_ITEM:

        default:
            return state;
    }
};
export default ItemReducer;