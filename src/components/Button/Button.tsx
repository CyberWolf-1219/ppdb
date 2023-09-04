import React, { type ReactNode } from 'react';

const WIDTH_OPTIONS = {
  fit: 'w-fit',
  full: 'w-full',
};

const TYPE_OPTIONS = {
  primary: 'border-transparent bg-pallet-accent text-pallet-light',
  secondary: 'border-pallet-accent bg-transparent text-pallet-accent',
};

interface Props {
  width: keyof typeof WIDTH_OPTIONS;
  type: keyof typeof TYPE_OPTIONS;
  action: Function;
  children: ReactNode;
}

function Button({ type, width, action, children }: Props) {
  function clickHandler() {
    action();
  }

  return (
    <button
      onClick={clickHandler}
      className={`${WIDTH_OPTIONS[width]} h-fit px-[1em] py-[0.75em] border-[2px] ${TYPE_OPTIONS[type]} font-semibold text-lg`}>
      {children}
    </button>
  );
}

export default Button;
