import React, { useRef, useState, type FormEvent } from 'react';
import Button from '../Button/Button';

interface Props {
  formCloseHandler: Function;
}

function UploadForm({ formCloseHandler }: Props) {
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

  return isSending ? (
    <>
      <div className={'w-fit h-fit p-[1rem] rounded-sm bg-white border-[2px]'}>
        <img
          src='/upload_animation.gif'
          alt='upload animation'
        />
      </div>
    </>
  ) : (
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

        <label htmlFor='input_exam-year'>Exam Year: </label>
        <input
          type='number'
          name='year'
          id='input_exam-year'
          min={2000}
          className={
            'w-full h-fit px-[0.5em] py-[0.25em] text-[1.25rem] leading-[100%] border-[2px] rounded-sm'
          }
          required={true}
        />

        <label htmlFor='select_exam'>Select the Exam: </label>
        <select
          name='exam'
          id='select_exam'
          className={
            'w-full h-fit px-[0.5em] py-[0.25em] text-[1.25rem] leading-[100%] border-[2px] rounded-sm'
          }
          required={true}>
          <option
            value='dummy'
            disabled={true}>
            SELECT AN EXAM
          </option>
          <option value='grade-5'>Grade 5</option>
          <option value='gce-ol'>GCE O/L</option>
          <option value='gce-al'>GCE A/L</option>
        </select>

        <label htmlFor='select_subject'>Select the Subject: </label>
        <select
          name='subject'
          id='select_subject'
          className={
            'w-full h-fit px-[0.5em] py-[0.25em] text-[1.25rem] leading-[100%] border-[2px] rounded-sm'
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

        <label htmlFor='file_exam-paper'>Select the Document:</label>
        <input
          type='file'
          name='file'
          id='file_exam-paper'
          accept={'.pdf'}
          className={
            'w-full h-fit px-[0.5em] py-[0.25em] text-[1.25em] leading-[100%] border-[2px] rounded-sm'
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
