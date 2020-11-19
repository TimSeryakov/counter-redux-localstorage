import React, {ButtonHTMLAttributes, DetailedHTMLProps, FC} from 'react';

type DefaultButtonPropsType = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>;

type ButtonPropsType = DefaultButtonPropsType & {
  callbackFn: () => void
}

export const CustomButton: FC<ButtonPropsType> = (
    {
      callbackFn, ...restProps
    }
) => {

  return (
      <button
        className={`${restProps.disabled ? 'opacity-50' : 'opacity-100'} bg-theme-dark inline-block text-2xl
                    py-3 font-bold rounded-lg text-theme-light w-120px focus:outline-none focus:shadow-outline`}
        onClick={callbackFn}

        {...restProps}
      />
  );
}