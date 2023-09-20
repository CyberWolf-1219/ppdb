import React, { useState, type ReactNode } from 'react';
import Logo from '../Logo/Logo';
import Button from '../Button/Button';
import Portal from '../Portal/Portal';
import ModalBG from '../ModalBG/ModalBG';
import RegistrationForm from '../RegistrationForm/RegistrationForm';
import LoginForm from '../LoginForm/LoginForm';
import UploadForm from '../UploadWindow/UploadWindow';
import { CookiesProvider } from 'react-cookie';
import ErrorBoundy from '../ErrorBoundry/ErrorBoundry';

function Navigation() {
  const [viewRegistrationModal, setViewRegistrationModal] = useState(false);
  const [viewLoginModal, setViewLoginModal] = useState(false);
  const [viewUploadModal, setViewUploadModal] = useState(false);

  function registerButtonHandler() {
    setViewRegistrationModal((prevState) => {
      return !prevState;
    });
  }

  function loginButtonHandler() {
    setViewLoginModal((prevState) => {
      return !prevState;
    });
  }

  function uploadButtonHandler() {
    setViewUploadModal((prevState) => {
      return !prevState;
    });
  }

  return (
    <CookiesProvider>
      <>
        {viewRegistrationModal ? (
          <Portal>
            <ModalBG>
              <RegistrationForm formCloseHandler={registerButtonHandler} />
            </ModalBG>
          </Portal>
        ) : null}
        {viewLoginModal ? (
          <Portal>
            <ModalBG>
              <LoginForm formCloseHandler={loginButtonHandler} />
            </ModalBG>
          </Portal>
        ) : null}
        {viewUploadModal ? (
          <Portal>
            <ModalBG>
              <UploadForm formCloseHandler={uploadButtonHandler} />
            </ModalBG>
          </Portal>
        ) : null}
        <nav className={'w-full h-fit px-[1rem] py-[1rem] border-b-[2px]'}>
          <ErrorBoundy>
            <div
              className={
                'flex flex-col md:flex-row items-center justify-between'
              }>
              <Logo />
              <ul
                className={
                  'w-fit md:max-w-[60%] lg:max-w-[45%] mt-[1rem] md:m-[0] flex flex-col md:flex-row items-center justify-end gap-[2rem]'
                }>
                <div
                  className={
                    'w-fit h-fit flex flex-row item-center gap-[1rem]'
                  }>
                  <li className={'w-fit'}>
                    <Button
                      type={'secondary'}
                      width={'fit'}
                      textSize={'md'}
                      action={registerButtonHandler}>
                      Register
                    </Button>
                  </li>
                  <li className={'w-fit'}>
                    <Button
                      type={'secondary'}
                      width={'fit'}
                      textSize={'md'}
                      action={loginButtonHandler}>
                      Login
                    </Button>
                  </li>
                </div>
                <li className={'w-fit'}>
                  <Button
                    type={'primary'}
                    width={'fit'}
                    textSize={'md'}
                    fontWeight={'bold'}
                    action={uploadButtonHandler}>
                    Upload
                  </Button>
                </li>
              </ul>
            </div>
          </ErrorBoundy>
        </nav>
      </>
    </CookiesProvider>
  );
}

export default Navigation;
