import React from 'react';
import {MESSAGES} from "../../redux/counterReducer";

type CounterDisplayPropsType = {
  value: number
  messageText: string
  error: boolean
}

export function CounterDisplay(props: CounterDisplayPropsType) {
  return (
      <div className="h-64 rounded-lg bg-theme-dark w-300px h-150px flex justify-center items-center">
        {
          <h1 className={`text-center font-bold
                          ${ props.error ? 'text-red-300' : 'text-theme-light' } 
                          ${ props.messageText ? 'text-xl' : 'text-6xl' }
                          ${ props.messageText === MESSAGES.ENTER_VALUES && 'animate-pulse-slow'}
                          ${ props.messageText === MESSAGES.INCORRECT_VALUE && ' animate-bounce'}
                        `}
          >
            {props.messageText ? props.messageText : props.value}
          </h1>
        }
      </div>
  );
}


