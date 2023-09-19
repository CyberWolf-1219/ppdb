import React, { useState, type UIEvent } from 'react';
import Button from '../Button/Button';
import { useCookies } from 'react-cookie';
import UploadForm from '../UploadForm/UploadForm';

interface Props {
  formCloseHandler: (e: UIEvent) => void;
}

function UploadWindow({ formCloseHandler }: Props) {
  const [cookies, setCookie, removeCookie] = useCookies([
    'logged-in',
    'user-email',
  ]);

  const [isSending, setIsSending] = useState(false);

  if (!cookies['logged-in'] || cookies['logged-in'] !== 1) {
    return (
      <div
        className={
          'w-fit h-fit p-[1rem] rounded-[0.25rem] bg-white border-[2px]'
        }>
        <p
          className={
            'w-full h-fit mt-[2rem] mb-[0.5rem] text-3xl font-bold text-center'
          }>
          OOPs
        </p>
        <img
          src='/not-loggedin.gif'
          alt='not logged in animation'
        />
        <p
          className={
            'w-full h-fit p-[1rem] text-yellow-500 text-center font-bold bg-yellow-500/30 border-[2px] border-yellow-500'
          }>
          You Are Not Logged In to Upload
        </p>
        <Button
          type={'secondary'}
          textSize={'lg'}
          width={'full'}
          fontWeight={'normal'}
          action={formCloseHandler}>
          Close
        </Button>
      </div>
    );
  } else if (isSending) {
    return (
      <div
        className={
          'w-fit h-fit p-[1rem] rounded-[0.25rem] bg-white border-[2px]'
        }>
        <img
          src='/upload_animation.gif'
          alt='upload animation'
        />
      </div>
    );
  } else {
    return (
      <UploadForm
        getFormState={setIsSending}
        formCloseHandler={formCloseHandler}
      />
    );
  }
}

export default UploadWindow;
