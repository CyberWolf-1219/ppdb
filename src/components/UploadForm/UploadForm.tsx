import React from 'react';
import Button from '../Button/Button';

interface Props {
  formCloseHandler: Function;
}

function UploadForm({ formCloseHandler }: Props) {
  return (
    <form
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
        <label htmlFor='input_exam-year'>Email Address: </label>
        <input
          type='date'
          name='exam-year'
          id='input_exam-year'
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
          <option value='grade-5'>Grade 5</option>
          <option value='grade-11'>Grade 11</option>
          <option value='grade-13'>Grade 13</option>
        </select>
        <label htmlFor='select_subject'>Select the Subject: </label>
        <select
          name='subject'
          id='select_subject'
          className={
            'w-full h-fit px-[0.5em] py-[0.25em] text-[1.25rem] leading-[100%] border-[2px] rounded-sm'
          }>
          <option value='english'>English</option>
          <option value='sinhala'>Sinhala</option>
          <option value='maths'>Maths</option>
          <option value='ict'>I.C.T</option>
          <option value='science'>Science</option>
        </select>
        <label htmlFor='file_exam-paper'>Select the Document:</label>
        <input
          type='file'
          name='exam-paper'
          id='file_exam-paper'
          accept={'.pdf'}
          className={
            'w-full h-fit px-[0.5em] py-[0.25em] text-[1.25em] leading-[100%] border-[2px] rounded-sm'
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
            Upload the Document
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

export default UploadForm;
