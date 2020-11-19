import {Dispatch} from 'react'
import {connect} from 'react-redux'
import {Counter} from "../Counter/Counter"
import {
  CounterReducerActionsTypes,
  changeMaxValueAC,
  changeMinMaxCounterValuesAC,
  changeMinValueAC,
  increaseCounterAC,
  resetCounterAC
} from "../../redux/actions";
import {IGlobalState} from "../../redux/state";
import {saveStateMinMaxValuesToLocalStorage} from "../../localStorage/localStorage";

const mapStateToProps = (state: IGlobalState) => {

  debugger
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
      dispatch(changeMinMaxCounterValuesAC())

      // FIXME Где лучше ее использовать с архитектурной точки зрения?
      saveStateMinMaxValuesToLocalStorage()
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