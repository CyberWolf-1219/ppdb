import React, { useRef, useState, type FormEvent, type UIEvent } from 'react';
import Button from '../Button/Button';
import { useCookies } from 'react-cookie';

interface Props {
  formCloseHandler: (e: UIEvent) => void;
}

function UploadForm({ formCloseHandler }: Props) {
  const [cookies, setCookie, removeCookie] = useCookies([
    'logged-in',
    'user-email',
  ]);

  const form = useRef<HTMLFormElement>(null);

  const [isSending, setIsSending] = useState(false);

  function submitHandler(e: FormEvent) {
    e.preventDefault();
    const fd = new FormData(form.current!);
    const formdata = fd.entries();
    console.log(formdata);

    const XHR = new XMLHttpRequest();
    XHR.open('POST', '/api/upload');

    XHR.addEventListener('loadstart', (e) => {
      setIsSending(true);
    });

    XHR.addEventListener('load', (e) => {
      setIsSending(false);
    });

    XHR.addEventListener('error', (e) => {
      alert(e);
      console.log(e);
    });

    console.log(XHR);
    XHR.send(fd);
  }

  if (!cookies['logged-in'] || cookies['logged-in'] !== 1) {
    return (
      <div className={'w-fit h-fit p-[1rem] rounded-sm bg-white border-[2px]'}>
        <p
          className={
            'w-full h-fit mt-[2rem] mb-[1rem] text-3xl font-bold text-center'
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
  }

  if (isSending) {
    return (
      <div className={'w-fit h-fit p-[1rem] rounded-sm bg-white border-[2px]'}>
        <img
          src='/upload_animation.gif'
          alt='upload animation'
        />
      </div>
    );
  }

  return (
    <form
      ref={form}
      onSubmit={submitHandler}
      action=''
      className={'w-fit h-fit p-[1rem] bg-white rounded-sm'}>
      <p className={'mt-[2rem] mb-[1rem] text-center text-3xl font-bold'}>
        Upload an Exam Paper
      </p>
      <fieldset
        className={
          'w-fit h-fit p-[1rem] flex flex-col items-start justify-start border-[2px] rounded-sm'
        }>
        <legend>Enter Paper Details</legend>
        <input
          type='hidden'
          name='email'
          value={cookies['user-email']}
        />
        <label htmlFor='input_exam-year'>Exam Year: </label>
        <input
          type='number'
          name='year'
          id='input_exam-year'
          min={2000}
          className={
            'w-full h-fit mb-[1rem] px-[0.5em] py-[0.25em] text-[1.25rem] leading-[100%] border-[2px] rounded-sm'
          }
          required={true}
        />

        <label htmlFor='select_exam'>Select the Exam: </label>
        <select
          name='exam'
          id='select_exam'
          defaultValue={'dummy'}
          className={
            'w-full h-fit mb-[1rem] px-[0.5em] py-[0.25em] text-[1.25rem] leading-[100%] border-[2px] rounded-sm'
          }
          required={true}>
          <option
            value='dummy'
            disabled={true}>
            SELECT AN EXAM
          </option>
          <option value='5'>Grade 5</option>
          <option value='ol'>GCE O/L</option>
          <option value='al'>GCE A/L</option>
        </select>

        <label htmlFor='select_subject'>Select the Subject: </label>
        <select
          name='subject'
          id='select_subject'
          defaultValue={'dummy'}
          className={
            'w-full h-fit mb-[1rem] px-[0.5em] py-[0.25em] text-[1.25rem] leading-[100%] border-[2px] rounded-sm'
          }>
          <option
            value='dummy'
            disabled={true}>
            SELECT A SUBJECT
          </option>
          <option value='english'>English</option>
          <option value='sinhala'>Sinhala</option>
          <option value='maths'>Maths</option>
          <option value='ict'>I.C.T</option>
          <option value='science'>Science</option>
        </select>

        <label htmlFor='file_exam-paper-screenshot'>
          Select A Screenshot of the File:
        </label>
        <input
          type='file'
          name='screenshot'
          id='file_exam-paper-screenshot'
          accept={'.jpg, .jpeg, .png'}
          className={
            'w-full h-fit mb-[1rem] px-[0.5em] py-[0.25em] text-[1.25em] leading-[100%] border-[2px] rounded-sm'
          }
          required={true}
        />
        <label htmlFor='file_exam-paper'>Select the Document:</label>
        <input
          type='file'
          name='file'
          id='file_exam-paper'
          accept={'.pdf'}
          className={
            'w-full h-fit mb-[1rem] px-[0.5em] py-[0.25em] text-[1.25em] leading-[100%] border-[2px] rounded-sm'
          }
          required={true}
        />
        <br />
        <div className={'w-full h-fit flex flex-col gap-[0.25rem]'}>
          <button
            className={
              'px-[2em] py-[0.75em] border-[2px] border-transparent bg-pallet-accent text-pallet-light text-lg font-bold rounded-sm leading-[100%]'
            }>
            Upload the Document
          </button>
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

export default UploadForm;
