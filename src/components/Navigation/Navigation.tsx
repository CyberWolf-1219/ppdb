import React, { useState, type ReactNode } from 'react';
import Logo from '../Logo/Logo';
import Button from '../Button/Button';
import Portal from '../Portal/Portal';
import ModalBG from '../ModalBG/ModalBG';
import RegistrationForm from '../RegistrationForm/RegistrationForm';

function Navigation() {
  const [viewRegistrationModal, setViewRegistrationModal] = useState(false);
  const [viewLoginModal, setViewLoginModal] = useState(false);
  const [viewUploadModal, setViewUploadModal] = useState(false);

  function registerButtonHandler() {
    setViewRegistrationModal((prevState) => {
      return !prevState;
    });
  }

  function loginButtonHandler() {}

  function uploadButtonHandler() {}

  return (
    <>
      {viewRegistrationModal ? (
        <Portal>
          <ModalBG>
            <RegistrationForm formCloseHandler={registerButtonHandler} />
          </ModalBG>
        </Portal>
      ) : null}

      <nav className={'w-full h-fit px-[1rem] py-[1rem] border-b-[2px]'}>
        <div
          className={'flex flex-col md:flex-row items-center justify-between'}>
          <Logo />
          <ul
            className={
              'w-full md:max-w-[50%] lg:max-w-[40%] mt-[1rem] md:m-[0] flex flex-col md:flex-row items-center justify-center gap-[1rem]'
            }>
            <div
              className={'w-full h-fit flex flex-row item-center gap-[1rem]'}>
              <li className={'w-full'}>
                <Button
                  type={'secondary'}
                  width={'full'}
                  textSize={'md'}
                  action={registerButtonHandler}>
                  Register
                </Button>
              </li>
              <li className={'w-full'}>
                <Button
                  type={'secondary'}
                  width={'full'}
                  textSize={'md'}
                  action={loginButtonHandler}>
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
                action={uploadButtonHandler}>
                Upload
              </Button>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navigation;
