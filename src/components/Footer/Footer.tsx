import React from 'react';
import Logo from '../Logo/Logo';

function Footer() {
  return (
    <footer className={'w-full h-fit px-[1rem] py-[2rem] border-t-[2px]'}>
      <div className={'flex flex-row items-center justify-between'}>
        <div>
          <Logo />
        </div>
        <div>
          <h2>Design & Developed</h2>
          <p>Lahiru A. Rajakaruna</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
