import React, {ChangeEvent, DetailedHTMLProps, FC, InputHTMLAttributes} from 'react';
import './CustomInput.css'

type DefaultInputPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;

type CustomInputPropsType = DefaultInputPropsType & {
  value: number
  error: boolean
  callbackFn: (value: number) => void
}

export const CustomInput: FC<CustomInputPropsType> = (
    {
      type, value, error, callbackFn, ...restProps
    }
) => {

  const onChangeFn = (e: ChangeEvent<HTMLInputElement>) => callbackFn(Number(e.currentTarget.value))

  return (
        <input
            type="number"
            value={value}
            onChange={onChangeFn}
            className={`${error ? 'text-red-300 border-red-400 bg-red-500' : 'text-theme-light border-theme-light bg-theme-dark'}
                        text-right border-2 rounded-md w-60px font-bold`}

            {...restProps}
        />
  );
}


