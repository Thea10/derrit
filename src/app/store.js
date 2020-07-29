import {createStore, applyMiddleware, combineReducers } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { displayList, SearchList, filterSearch, filterDateSearch } from "./listReducers";

const rootReducer = combineReducers({displayList, SearchList, filterSearch, filterDateSearch});

 const  store = createStore(rootReducer, applyMiddleware(thunkMiddleware));

 export default store;
