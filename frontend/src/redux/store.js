import { applyMiddleware, combineReducers, createStore } from "redux"

const initialState = {

}

const reducers = combineReducers({

})

const store = createStore(reducers, initialState, composeWithDevTools(applyMiddleware(thunk)))

export default store;