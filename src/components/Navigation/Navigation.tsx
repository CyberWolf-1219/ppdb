import React from 'react';
import Logo from '../Logo/Logo';
import Button from '../Button/Button';

function Navigation() {
  return (
    <nav className={'w-full h-fit px-[1rem] py-[1rem] border-b-[2px]'}>
      <div className={'flex flex-col md:flex-row items-center justify-between'}>
        <Logo />
        <ul
          className={
            'w-full md:max-w-[50%] lg:max-w-[40%] mt-[1rem] md:m-[0] flex flex-col md:flex-row items-center justify-center gap-[1rem]'
          }>
          <div className={'w-full h-fit flex flex-row item-center gap-[1rem]'}>
            <li className={'w-full'}>
              <Button
                type={'secondary'}
                width={'full'}
                textSize={'md'}
                action={() => {}}>
                Register
              </Button>
            </li>
            <li className={'w-full'}>
              <Button
                type={'secondary'}
                width={'full'}
                textSize={'md'}
                action={() => {}}>
                Login
              </Button>
            </li>
          </div>
          <li className={'w-full'}>
            <Button
              type={'primary'}
              width={'full'}
              textSize={'md'}
              fontWeight={'bold'}
              action={() => {}}>
              Upload
            </Button>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navigation;
