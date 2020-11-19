import React from 'react'
import {CounterDisplay} from "../CounterDisplay/CounterDisplay"
import {OptionsDisplay} from "../OptionsDisplay/OptionsDisplay"
import {CustomButton} from '../common/CustomButton/CustomButton'
import './Counter.css'

type CounterPropsTypes = {
  messageText: string
  counterCurrentValue: number
  counterValueError: boolean

  minValue: number
  minValueError: boolean
  setMinValueFn: (newValue: number) => void

  maxValue: number
  maxValueError: boolean
  setMaxValueFn: (newValue: number) => void

  setMinMaxCounterValuesFn: () => void
  incCounterFn: () => void
  resetCounterFn: () => void

  setButtonDisabled: boolean
  incButtonDisabled: boolean
  resetButtonDisabled: boolean
}

export const Counter = (props: CounterPropsTypes) => {

  const setNewCounterValues = () => props.setMinMaxCounterValuesFn()
  const incCounter = () => props.incCounterFn()
  const resetCounter = () => props.resetCounterFn()

  return (
      <div className="w-full h-full grid place-content-center">
        <div className="flex flex-col md:flex-row">

          <section className="p-3 mt-10 md:mt-0 border-theme-dark border-4 rounded-lg mx-5">
            <div>
              <OptionsDisplay
                  minValue={props.minValue}
                  minValueError={props.minValueError}
                  setMinValue={props.setMinValueFn}

                  maxValue={props.maxValue}
                  maxValueError={props.maxValueError}
                  setMaxValue={props.setMaxValueFn}
              />
            </div>
            <div className="p-3 border-theme-dark border-4 rounded-lg mt-3 flex justify-center">
              <CustomButton callbackFn={setNewCounterValues} disabled={props.setButtonDisabled}>set</CustomButton>
            </div>
          </section>

          <section className="p-3 mt-10 md:mt-0 border-theme-dark border-4 rounded-lg mx-5">
            <div>
              <CounterDisplay value={props.counterCurrentValue}
                              messageText={props.messageText}
                              error={props.minValueError || props.maxValueError || props.counterValueError}
              />
            </div>
            <div className="p-3 border-theme-dark border-4 rounded-lg mt-3 flex justify-between">
              <CustomButton callbackFn={incCounter} disabled={props.incButtonDisabled}>inc</CustomButton>
              <CustomButton callbackFn={resetCounter} disabled={props.resetButtonDisabled}>reset</CustomButton>
            </div>
          </section>

        </div>
      </div>
  )
}
