import {ACTIONS_TYPE, CounterReducerActionsTypes} from "./actions";
import {restoreState} from "../localStorage/localStorage";

export enum MESSAGES {
  ENTER_VALUES = `enter values and press 'set'`,
  INCORRECT_VALUE = `incorrect value!`
}

export type CounterStateType = {
  messageText: MESSAGES

  inputMinValue: number
  inputMaxValue: number

  counterCurrentValue: number
  counterMinMaxValues: counterMinMaxValuesType

  errorsState: ErrorStateType
  buttonsDisabled: ButtonsStateType
}

export type counterMinMaxValuesType = {
  min: number
  max: number
}

type ErrorStateType = {
  minValueError: boolean
  maxValueError: boolean
  counterValueError: boolean
}

type ButtonsStateType = {
  setButton: boolean
  incButton: boolean
  resetButton: boolean
}

export type LocalStorageStateType = {
  min: number
  max: number
}

const localStorageState: LocalStorageStateType = restoreState<LocalStorageStateType>("counterMinMaxValues", {
  min: 0,
  max: 5
})

const initialState: CounterStateType = {
  messageText: MESSAGES.ENTER_VALUES,

  inputMinValue: localStorageState.min,
  inputMaxValue: localStorageState.max,

  counterCurrentValue: localStorageState.min,
  counterMinMaxValues: {
    min: localStorageState.min,
    max: localStorageState.max,
  },

  errorsState: {
    minValueError: false,
    maxValueError: false,
    counterValueError: false,
  },

  buttonsDisabled: {
    setButton: false,
    incButton: false,
    resetButton: true
  }
}

const counterReducer = (state = initialState, action: CounterReducerActionsTypes): CounterStateType => {
 debugger
  switch (action.type) {
    case ACTIONS_TYPE.CHANGE_MIN_VALUE:
      if (action.payload.newValue < 0 || action.payload.newValue >= state.inputMaxValue) {
        return {
          ...state,
          messageText: MESSAGES.INCORRECT_VALUE,
          inputMinValue: action.payload.newValue,
          errorsState: {
            ...state.errorsState,
            minValueError: true,
          },
          buttonsDisabled: {
            setButton: true,
            incButton: true,
            resetButton: true
          }
        }
      } else {
        return {
          ...state,
          messageText: MESSAGES.ENTER_VALUES,
          inputMinValue: action.payload.newValue,
          errorsState: {
            ...state.errorsState,
            minValueError: false,
          },
          buttonsDisabled: {
            setButton: false,
            incButton: true,
            resetButton: true
          }
        }
      }

    case ACTIONS_TYPE.CHANGE_MAX_VALUE:
      if (action.payload.newValue <= state.inputMinValue) {
        return {
          ...state,
          messageText: MESSAGES.INCORRECT_VALUE,
          inputMaxValue: action.payload.newValue,
          errorsState: {
            ...state.errorsState,
            maxValueError: true,
          },
          buttonsDisabled: {
            setButton: true,
            incButton: true,
            resetButton: true
          }
        }
      } else {
        return {
          ...state,
          messageText: MESSAGES.ENTER_VALUES,
          inputMaxValue: action.payload.newValue,
          errorsState: {
            ...state.errorsState,
            maxValueError: false,
          },
          buttonsDisabled: {
            setButton: false,
            incButton: true,
            resetButton: true
          }
        }
      }

    case ACTIONS_TYPE.CHANGE_COUNTER_MIN_MAX_VALUES:
      return {
        ...state,
        counterMinMaxValues: {
          min: state.inputMinValue,
          max: state.inputMaxValue
        },
        buttonsDisabled: {
          setButton: true,
          incButton: false,
          resetButton: true
        }
      }

    case ACTIONS_TYPE.INCREASE_COUNTER:
      if (state.counterCurrentValue !== state.counterMinMaxValues.max) {
        return {...state, counterCurrentValue: state.counterCurrentValue + 1}
      } else {
        return {
          ...state,
          buttonsDisabled: {
            ...state.buttonsDisabled,
            incButton: true,
            resetButton: false
          },
          errorsState: {
            ...state.errorsState,
            counterValueError: true,
          },
        }
      }

    case ACTIONS_TYPE.RESET_COUNTER:
      return {...state, counterCurrentValue: state.counterMinMaxValues.max}

    default:
      return state
  }
}

export default counterReducer