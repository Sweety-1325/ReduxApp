//import { createStore } from " redux";  - configure store is a more updated version of create store
import { configureStore } from '@reduxjs/toolkit'
import { applyMiddleware } from "redux";
import thunk from "redux-thunk";
import reducers from "./reducers";
//over here we are creating a common store for all the app state and this is accessible to all the app by using 
//Provider in the maine index.js file of the src foldder


export const store=configureStore({reducer:reducers},{},applyMiddleware(thunk));