import React, { useRef, useState, useCallback } from 'react';
import type { UIEvent, FormEvent } from 'react';
import Button from '../Button/Button';

interface Props {
  formCloseHandler: () => void;
}

function RegistrationForm({ formCloseHandler }: Props) {
  const emailInput = useRef<HTMLInputElement>(null);
  const passwordInput = useRef<HTMLInputElement>(null);

  const [isProcessing, setIsProcessing] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const register = useCallback(async (e: FormEvent) => {
    e.preventDefault();

    setIsProcessing(true);

    const fd = new FormData();

    fd.append('email', emailInput.current!.value);
    fd.append('password', passwordInput.current!.value);

    const response = await fetch('/api/register', { method: 'POST', body: fd });
    const result: { message: string } = await response.json();
    if (!response.ok) {
      setError(result.message);
    } else {
      formCloseHandler();
    }

    setIsProcessing(false);
  }, []);

  function formCloseButtonHandler(e: UIEvent) {
    e.preventDefault();
    formCloseHandler();
  }

  return isProcessing ? (
    <>
      <div className={'w-fit h-fit p-[1rem] rounded-sm bg-white border-[2px]'}>
        <img
          src='/upload_animation.gif'
          alt='upload animation'
        />
      </div>
    </>
  ) : (
    <div
      className={
        'w-fit h-fit p-[1rem] bg-white rounded-sm flex flex-col items-stretch justify-start'
      }>
      <p className={'mt-[2rem] mb-[1rem] text-center text-3xl font-bold'}>
        Register
      </p>

      {error ? (
        <>
          <p
            className={
              'w-full h-fit p-[1rem] text-red-500 font-semibold leading-[100%] bg-red-400/30 border-[2px] border-red-500 rounded-sm'
            }>
            {error}
          </p>
        </>
      ) : null}

      <form
        onSubmit={register}
        action=''
        className={'w-fit h-fit bg-white rounded-sm'}>
        <fieldset
          className={
            'w-fit h-fit p-[1rem] flex flex-col items-start justify-start border-[2px] rounded-sm'
          }>
          <legend>Enter Your Details</legend>
          <label htmlFor='input_email'>Email Address: </label>
          <input
            ref={emailInput}
            type='email'
            name='email'
            id='input_email'
            className={
              'w-full h-fit px-[0.5em] py-[0.25em] text-[1.25rem] leading-[100%] border-[2px] rounded-sm'
            }
            required={true}
          />
          <label htmlFor='input_password'>Account Password: </label>
          <input
            ref={passwordInput}
            type='password'
            name='password'
            id='input_password'
            className={
              'w-full h-fit px-[0.5em] py-[0.25em] text-[1.25rem] leading-[100%] border-[2px] rounded-sm'
            }
            required={true}
          />
          <br />
          <div className={'w-full h-fit flex flex-col gap-[0.25rem]'}>
            <Button
              type={'primary'}
              textSize={'lg'}
              width={'full'}
              fontWeight={'bold'}
              action={() => {}}>
              Register
            </Button>
            <Button
              type={'secondary'}
              textSize={'lg'}
              width={'full'}
              fontWeight={'normal'}
              action={formCloseButtonHandler}>
              Cancel
            </Button>
          </div>
        </fieldset>
      </form>
    </div>
  );
}

export default RegistrationForm;
