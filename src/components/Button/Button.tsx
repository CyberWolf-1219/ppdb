import React, { type ReactNode, type UIEvent } from 'react';

const WIDTH_OPTIONS = {
  fit: 'w-fit',
  full: 'w-full',
};

const TYPE_OPTIONS = {
  primary: 'border-transparent bg-pallet-accent text-pallet-light',
  secondary: 'border-pallet-accent bg-transparent text-pallet-accent',
};

const TEXT_SIZE_OPTIONS = {
  sm: 'text-sm',
  md: 'text-base',
  lg: 'text-lg',
};

const FONT_WEIGHT_OPTIONS = {
  thin: '!font-thin',
  normal: '!font-normal',
  bold: '!font-bold',
};

interface Props {
  type: keyof typeof TYPE_OPTIONS;
  width: keyof typeof WIDTH_OPTIONS;
  textSize: keyof typeof TEXT_SIZE_OPTIONS;
  fontWeight?: keyof typeof FONT_WEIGHT_OPTIONS;
  action: (e: UIEvent) => void | Promise<void>;
  children: ReactNode;
}

function Button({
  type,
  width,
  textSize,
  fontWeight = 'normal',
  action,
  children,
}: Props) {
  return (
    <button
      onClick={action}
      className={`${WIDTH_OPTIONS[width]} h-fit px-[2em] py-[0.75em] border-[2px] ${TYPE_OPTIONS[type]} ${TEXT_SIZE_OPTIONS[textSize]} ${FONT_WEIGHT_OPTIONS[fontWeight]} rounded-sm leading-[100%]`}>
      {children}
    </button>
  );
}

export default Button;
