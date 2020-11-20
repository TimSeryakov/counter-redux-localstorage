import {ACTIONS_TYPE, CounterReducerActionsTypes} from "./actions";

export enum MESSAGES {
  ENTER_VALUES = `enter values and press 'set'`,
  INCORRECT_VALUE = `incorrect value!`,
  EMPTY = ``
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


const initialState: CounterStateType = {
  messageText: MESSAGES.ENTER_VALUES,

  inputMinValue: 0,
  inputMaxValue: 5,

  counterCurrentValue: 0,
  counterMinMaxValues: {
    min: 0,
    max: 5,
  },

  errorsState: {
    minValueError: false,
    maxValueError: false,
    counterValueError: false,
  },

  buttonsDisabled: {
    setButton: false,
    incButton: true,
    resetButton: true
  }
}

export const counterReducer = (state = initialState, action: CounterReducerActionsTypes): CounterStateType => {
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
        messageText: MESSAGES.EMPTY,
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
      if (state.counterCurrentValue === state.counterMinMaxValues.max - 1) {
          return {
            ...state,
            counterCurrentValue: state.counterCurrentValue + 1,
            buttonsDisabled: {
              ...state.buttonsDisabled,
              incButton: true,
              resetButton: false
            },
            errorsState: {
              ...state.errorsState,
              counterValueError: true,
            }
          }
      } else {
        return {...state, counterCurrentValue: state.counterCurrentValue + 1}
      }

    case ACTIONS_TYPE.RESET_COUNTER:
      return {
        ...state,
        counterCurrentValue: state.counterMinMaxValues.min,
        buttonsDisabled: {
          setButton: false,
          incButton: false,
          resetButton: true
        },
        errorsState: {
          ...state.errorsState,
          counterValueError: false,
        },
      }

    case ACTIONS_TYPE.SET_INIT_MIN_MAX_VALUES:
      return {
        ...state,
        inputMinValue: action.min,
        inputMaxValue: action.max,

        counterCurrentValue: action.min,
        counterMinMaxValues: {
          min: action.min,
          max: action.max,
        }
      }

    default:
      return state
  }
}