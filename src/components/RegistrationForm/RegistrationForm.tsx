import React from 'react';
import Button from '../Button/Button';

interface Props {
  formCloseHandler: Function;
}

function RegistrationForm({ formCloseHandler }: Props) {
  return (
    <form
      action=''
      className={'w-fit h-fit p-[1rem] bg-white rounded-sm'}>
      <p className={'mt-[2rem] mb-[1rem] text-center text-3xl font-bold'}>
        Register
      </p>
      <fieldset
        className={
          'w-fit h-fit p-[1rem] flex flex-col items-start justify-start border-[2px] rounded-sm'
        }>
        <legend>Enter Your Details</legend>
        <label htmlFor='input_email'>Email Address: </label>
        <input
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
            action={formCloseHandler}>
            Cancel
          </Button>
        </div>
      </fieldset>
    </form>
  );
}

export default RegistrationForm;
