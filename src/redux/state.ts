import { combineReducers, createStore } from 'redux'
import counterReducer from "./counterReducer";

const reducers = combineReducers({
  counter: counterReducer
})

export type IGlobalState = ReturnType<typeof reducers>

const store = createStore(reducers)

export default store