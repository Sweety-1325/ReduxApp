//s doe-listing the orders of action creator and working on it to deliver to the components
const reducer=(state=0,action)=>{
    if(action.type==="deposit")
    {
        return state+action.payload;
    }
    else if(action.type==="withdraw")
    {
        return state-action.payload;
    }
    else{
        return state;
    }
}
export default reducer;