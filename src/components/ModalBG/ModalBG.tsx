import type { ReactNode } from 'react';

function ModalBG({ children }: { children: ReactNode }) {
  return (
    <div
      className={
        'fixed z-[100] inset-[0] w-auto h-auto p-[1rem] flex flex-col items-center justify-center bg-black/60 backdrop-blur-sm'
      }>
      {children}
    </div>
  );
}

export default ModalBG;
