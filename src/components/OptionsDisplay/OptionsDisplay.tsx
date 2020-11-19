import React from 'react';
import {CustomInput} from "../common/CustomInput/CustomInput";

type OptionsBoxTypes = {
  maxValue: number
  minValue: number
  maxValueError: boolean
  minValueError: boolean
  setMinValue: (value: number) => void
  setMaxValue: (value: number) => void
}

export function OptionsDisplay(props: OptionsBoxTypes) {
  return (
      <div className="h-64 rounded-lg bg-theme-dark w-300px h-150px flex flex-col justify-around py-5">
        <div className="flex justify-center items-center w-9/12 mx-auto">
          <div className="w-8/12"><h3 className="uppercase text-theme-light text-xl font-bold font-mono">Max Value:</h3></div>
          <div className="w-4/12 text-right"><CustomInput value={props.maxValue} error={props.maxValueError} callbackFn={props.setMaxValue}/></div>
        </div>
        <div className="flex justify-center items-center w-9/12 mx-auto">
          <div className="w-8/12"><h3 className="uppercase text-theme-light text-xl font-bold font-mono">Start Value:</h3></div>
          <div className="w-4/12 text-right"><CustomInput value={props.minValue} error={props.minValueError} callbackFn={props.setMinValue}/></div>
        </div>
      </div>
  );
}


