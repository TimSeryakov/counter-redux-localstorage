import {Dispatch} from 'react'
import {connect} from 'react-redux'
import {Counter} from "../Counter/Counter"
import {
  changeMaxValueAC,
  changeMinMaxCounterValuesAC,
  changeMinValueAC,
  CounterReducerActionsTypes,
  increaseCounterAC,
  resetCounterAC
} from "../../redux/actions";
import {IGlobalState} from "../../redux/state";
import {saveStateMinMaxValuesToLocalStorage} from "../../localStorage/localStorage";

const mapStateToProps = (state: IGlobalState) => {
  return {
    messageText: state.counter.messageText,
    counterCurrentValue: state.counter.counterCurrentValue,
    counterValueError: state.counter.errorsState.counterValueError,

    minValue: state.counter.inputMinValue,
    minValueError: state.counter.errorsState.minValueError,

    maxValue: state.counter.inputMaxValue,
    maxValueError: state.counter.errorsState.maxValueError,

    setButtonDisabled: state.counter.buttonsDisabled.setButton,
    incButtonDisabled: state.counter.buttonsDisabled.incButton,
    resetButtonDisabled: state.counter.buttonsDisabled.resetButton,
  }
}

const mapDispatchToProps = (dispatch: Dispatch<CounterReducerActionsTypes>) => {
  return {
    setMinValueFn(newValue: number) {
      dispatch(changeMinValueAC(newValue))
    },
    setMaxValueFn(newValue: number) {
      dispatch(changeMaxValueAC(newValue))
    },
    setMinMaxCounterValuesFn() {
      saveStateMinMaxValuesToLocalStorage()
      dispatch(changeMinMaxCounterValuesAC())
    },
    incCounterFn() {
      dispatch(increaseCounterAC())
    },
    resetCounterFn() {
      dispatch(resetCounterAC())
    }
  }
}

export const CounterContainer = connect(mapStateToProps, mapDispatchToProps)(Counter)