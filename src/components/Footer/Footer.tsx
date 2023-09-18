import React from 'react';
import Logo from '../Logo/Logo';

function Footer() {
  return (
    <footer className={'w-full h-fit px-[2rem] py-[1rem] border-t-[2px]'}>
      <div
        className={
          'flex flex-col md:flex-row items-center md:items-start justify-start md:justify-between'
        }>
        <div className={'flex-1'}>
          <Logo />
        </div>
        <div className={'flex-1'}>
          <p className={'max-w-[60ch] mt-[0.65rem] !mb-[0]'}>
            <b className={'text-2xl font-bold'}>Design & Developed</b>
          </p>
          <a
            href={'/'}
            className={
              'inline-block w-full h-fit mx-auto text-center md:text-left font-bold hover:underline underline-offset-1 hover:text-emerald-500'
            }>
            &lt; Lahiru A. Rajakaruna &gt;
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
