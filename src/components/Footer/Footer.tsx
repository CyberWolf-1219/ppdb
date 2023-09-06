import React from 'react';
import Logo from '../Logo/Logo';

function Footer() {
  return (
    <footer className={'w-full h-fit px-[1rem] py-[1rem] border-t-[2px]'}>
      <div className={'flex flex-col md:flex-row items-start justify-between'}>
        <div className={''}>
          <Logo />
        </div>
        <div>
          <p className={'max-w-[60ch] mt-[1rem] !mb-[0]'}>
            <b className={'text-xl font-bold'}>Design & Developed</b>
            <br />
            <a href={'/'}>Lahiru A. Rajakaruna</a>
            <br />
            <small className={''}>
              full-stack web developer with 2+ years of experience. specializing
              React, Node, MongoDB, MySQL, Tailwind. available to work on web
              applications and website design and development.
            </small>
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
