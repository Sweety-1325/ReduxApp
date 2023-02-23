import React from "react";
import { useSelector } from "react-redux";
//import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
//import AddMoney from "./AddMoney";


const Navbar = () => {
  //use selector is used to access the state data from the store(here we have made availble the store to all the components
  //using the provide store={store} in index.js)
  //here amount_r is the amount reducer that we have combined in the combine reducers and exported to store as(export default reducers)
 //here we can use the stae of a componet and make changes to it.
  const state=useSelector(state=>state.amount_r)
  
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <a className="navbar-brand" href="/">Navbar</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/">Link</a>
        </li>
        
      </ul>
      <button className="btn btn-success" disabled={true} >Your Balance:{state}</button>
     
    </div>
  </div>
</nav>
    </div>
  );
};
export default Navbar;
