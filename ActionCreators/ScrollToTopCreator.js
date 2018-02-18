export const SCROLL_TO_TOP = "SCROLL_TO_TOP";
export const TOP_RESET = "TOP_RESET";

export const scrollToTop = () => {
    return ( dispatch ) => {
        dispatch({ type:SCROLL_TO_TOP, payload:{top:true}})
    }
};
export const topReset = () => {
    return ( dispatch ) => {
        dispatch({ type:TOP_RESET, payload:{top:false}})
    }

};

