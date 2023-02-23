import React from "react";
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "./state/index";
import { useSelector } from "react-redux";

const Shop=(()=>{
    //The useDispatch hook allows you to access the dispatch function from the Redux store in a React component.(in action creator with the necessary data)
    const dispatch = useDispatch();
    //use selector is used to access the state data from the store
    const balance=useSelector(state=>state.amount_r)//for accessing the state
    //A "bind action creator" function is a function that takes an action creator (a function that returns an action) and returns a new function that dispatches the original action when called
    //it calls return the deposit and withdraw money function the is using the dispatch function and bimding them together
    const {depositMoney,withdrawMoney}=bindActionCreators(actionCreators,dispatch);//for updating the state
    return(
        <div>
            <h2>Deposit/Withdraw Money</h2>
          <button className="btn btn-info mx-2" onClick={()=>withdrawMoney(200)} >-</button>
          Update Balance : {balance}
        <button className="btn btn-info mx-2" onClick={()=>depositMoney(200)}>+</button>
        </div>
    )
})
export default Shop;