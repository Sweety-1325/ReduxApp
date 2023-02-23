import { combineReducers } from "redux";
import amountreducer from "./amountreducer";
//over here we are combining all the reducers using combineReducers
//here we have just one reducer which is amount reducer ut we can have many reducers depending on the state
const rootreducers=combineReducers({
    amount_r:amountreducer
})
export default rootreducers;