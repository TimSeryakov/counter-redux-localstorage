import {counterMinMaxValuesType} from "../redux/counterReducer";
import store from "../redux/state";

export function saveState<T>(key: string, state: T) {
  const stateAsString = JSON.stringify(state)
  localStorage.setItem(key, stateAsString)
}

export function restoreState<T>(key: string, defaultState: T) {
  const stateAsString = localStorage.getItem(key)
  if (stateAsString !== null) defaultState = JSON.parse(stateAsString) as T
  return defaultState
}

export function saveStateMinMaxValuesToLocalStorage() {
  const state = {min: store.getState().counter.inputMinValue, max: store.getState().counter.inputMaxValue}
  saveState<counterMinMaxValuesType>("counterMinMaxValues", {min: state.min, max: state.max})
}

export function loadStateMinMaxValuesFromLocalStorage() {
  const minMaxValues = restoreState<counterMinMaxValuesType>("counterMinMaxValues", {min: 0, max: 5})
  return {
    min: minMaxValues.min,
    max: minMaxValues.max
  }
}