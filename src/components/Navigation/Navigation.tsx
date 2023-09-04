import React from 'react';
import Logo from '../Logo/Logo';

function Navigation() {
  return (
    <nav className={'w-full h-fit px-[1rem] py-[2rem] border-b-[2px]'}>
      <div className={'flex flex-row items-center justify-between'}>
        <Logo />
        <ul className={'flex flex-row items-center justify-center gap-[1rem]'}>
          <li>
            <button
              className={
                'w-fit h-fit px-[1em] py-[0.75em] border-[2px] border-pallet-accent text-pallet-accent font-bold'
              }>
              Register
            </button>
          </li>
          <li>
            <button
              className={
                'w-fit h-fit px-[1em] py-[0.75em] border-[2px] border-pallet-accent text-pallet-accent font-bold'
              }>
              Login
            </button>
          </li>
          <li>
            <button
              className={
                'w-fit h-fit px-[1em] py-[0.75em] bg-pallet-accent text-pallet-light font-bold'
              }>
              UPLOAD
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navigation;
