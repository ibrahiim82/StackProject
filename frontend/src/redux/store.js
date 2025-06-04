import { combineReducers } from "redux";
import { configureStore } from '@reduxjs/toolkit'

const initialState = {};

const rootReducer = combineReducers({});

const store = configureStore({
  reducer: rootReducer,
  proloadedState: initialState,
});

export default store;



// import { applyMiddleware, combineReducers, createStore } from "redux";
// import { composeWithDevTools } from "redux-devtools-extension";
// import { thunk } from "redux-thunk";

// const initialState = {};

// const reducers = combineReducers({});

// const store = createStore(
//   reducers,
//   initialState,
//   composeWithDevTools(applyMiddleware(thunk))
// );

// export default store;
