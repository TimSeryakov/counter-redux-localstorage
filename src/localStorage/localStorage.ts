import store from '../redux/state'
import {counterMinMaxValuesType} from "../redux/counterReducer";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function saveState<T>(key: string, state: { min: number; max: number }) {
    const stateAsString = JSON.stringify(state);
    localStorage.setItem(key, stateAsString)
}

export function restoreState<T>(key: string, defaultState: T) {
    const stateAsString = localStorage.getItem(key);
    if (stateAsString !== null) defaultState = JSON.parse(stateAsString) as T;
    return defaultState
}

export function saveStateMinMaxValuesToLocalStorage() {
  const state = store.getState().counter.counterMinMaxValues
  saveState<counterMinMaxValuesType>("counterMinMaxValues", {min: state.min, max: state.max})
}