export enum ACTIONS_TYPE {
  CHANGE_MIN_VALUE =               'Counter/CHANGE_MIN_VALUE',
  CHANGE_MAX_VALUE =               'Counter/CHANGE_MAX_VALUE',
  CHANGE_COUNTER_MIN_MAX_VALUES =  'Counter/CHANGE_COUNTER_MIN_MAX_VALUES',
  INCREASE_COUNTER =               'Counter/INCREASE_COUNTER',
  RESET_COUNTER =                  'Counter/RESET_COUNTER',
  SET_INIT_MIN_MAX_VALUES  =       'Counter/SET_INIT_MIN_MAX_VALUES',
}

type changeMinValueActionType = {
  type: typeof ACTIONS_TYPE.CHANGE_MIN_VALUE
  payload: {
    newValue: number
  }
}

type changeMaxValueActionType = {
  type: typeof ACTIONS_TYPE.CHANGE_MAX_VALUE
  payload: {
    newValue: number
  }
}

type changeMinMaxCounterValuesActionType = {
  type: typeof ACTIONS_TYPE.CHANGE_COUNTER_MIN_MAX_VALUES
}

type increaseCounterActionType = {
  type: typeof ACTIONS_TYPE.INCREASE_COUNTER
}

type resetCounterActionType = {
  type: typeof ACTIONS_TYPE.RESET_COUNTER
}

type setInitMinMaxValuesActionType = {
  type: typeof ACTIONS_TYPE.SET_INIT_MIN_MAX_VALUES
  min: number,
  max: number
}

export const changeMinValueAC = (newValue: number): changeMinValueActionType =>
    ({ type: ACTIONS_TYPE.CHANGE_MIN_VALUE, payload: {newValue} })

export const changeMaxValueAC = (newValue: number): changeMaxValueActionType =>
    ({ type: ACTIONS_TYPE.CHANGE_MAX_VALUE, payload: {newValue} })

export const changeMinMaxCounterValuesAC = (): changeMinMaxCounterValuesActionType =>
    ({ type: ACTIONS_TYPE.CHANGE_COUNTER_MIN_MAX_VALUES })

export const increaseCounterAC = (): increaseCounterActionType =>
    ({ type: ACTIONS_TYPE.INCREASE_COUNTER })

export const resetCounterAC = (): resetCounterActionType =>
    ({ type: ACTIONS_TYPE.RESET_COUNTER })

export const setInitMinMaxValuesAC = (min: number, max: number): setInitMinMaxValuesActionType =>
    ({ type: ACTIONS_TYPE.SET_INIT_MIN_MAX_VALUES, min, max })

export type CounterReducerActionsTypes = changeMinValueActionType  | changeMaxValueActionType | changeMinMaxCounterValuesActionType |
                                         increaseCounterActionType | resetCounterActionType | setInitMinMaxValuesActionType
