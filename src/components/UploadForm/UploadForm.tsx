import React, {
  useRef,
  useState,
  type FormEvent,
  type UIEvent,
  useCallback,
} from 'react';
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

  const upload = useCallback(async (e: FormEvent) => {
    setIsSending(true);

    e.preventDefault();
    const fd = new FormData(form.current!);

    const response = await fetch('/api/upload', { method: 'POST', body: fd });
    console.log(await response.json());

    setIsSending(false);
  }, []);

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
  }

  if (isSending) {
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
  }

  return (
    <form
      ref={form}
      onSubmit={upload}
      action=''
      className={
        'w-fit h-full p-[1rem] bg-white rounded-[0.25rem] overflow-y-auto'
      }>
      <p className={'mt-[1rem] mb-[0.5rem] text-center text-3xl font-bold'}>
        Upload an Exam Paper
      </p>
      <fieldset
        className={
          'w-fit h-fit p-[1rem] flex flex-col items-start justify-start border-[2px] rounded-[0.25rem]'
        }>
        <legend>Enter Paper Details</legend>
        <input
          type='hidden'
          name='email'
          value={cookies['user-email']}
        />
        <label
          htmlFor='input_exam-year'
          className={'text-sky-900/70 font-semibold'}>
          Exam Year:{' '}
        </label>
        <input
          type='number'
          name='year'
          id='input_exam-year'
          min={2000}
          max={new Date().getFullYear()}
          placeholder={'Ex: 2000'}
          className={
            'w-full h-fit mb-[0.5rem] px-[0.5rem] pt-[0.4rem] pb-[0.25rem] text-[1.25rem] leading-[100%] border-[2px] rounded-[0.25rem]'
          }
          required={true}
        />

        <label
          htmlFor='select_exam'
          className={'text-sky-900/70 font-semibold'}>
          Select the Exam:{' '}
        </label>
        <select
          name='exam'
          id='select_exam'
          defaultValue={'dummy'}
          className={
            'w-full h-fit mb-[0.5rem] px-[0.5rem] pt-[0.4rem] pb-[0.25rem] text-[1.25rem] leading-[100%] border-[2px] rounded-[0.25rem]'
          }
          required={true}>
          <option
            value='dummy'
            disabled={true}>
            Select An Exam
          </option>
          <option value='5'>Grade 5</option>
          <option value='ol'>GCE O/L</option>
          <option value='al'>GCE A/L</option>
        </select>

        <label
          htmlFor='select_subject'
          className={'text-sky-900/70 font-semibold'}>
          Select the Subject:{' '}
        </label>
        <select
          name='subject'
          id='select_subject'
          defaultValue={'dummy'}
          className={
            'w-full h-fit mb-[0.5rem] px-[0.5em] pt-[0.4rem] pb-[0.25rem] text-[1.25rem] leading-[100%] border-[2px] rounded-[0.25rem]'
          }>
          <option
            value='dummy'
            disabled={true}>
            Select A Subject
          </option>
          <option value='english'>English</option>
          <option value='sinhala'>Sinhala</option>
          <option value='maths'>Maths</option>
          <option value='ict'>I.C.T</option>
          <option value='science'>Science</option>
        </select>

        <label
          htmlFor='file_exam-paper-screenshot'
          className={'text-sky-900/70 font-semibold'}>
          Select A Screenshot of the File:
        </label>
        <input
          type='file'
          name='screenshot'
          id='file_exam-paper-screenshot'
          accept={'.jpg, .jpeg, .png'}
          className={
            'w-full h-fit mb-[0.5rem] px-[0.25rem] py-[0.25rem] text-[1.25em] leading-[100%] border-[2px] rounded-[0.25rem]'
          }
          required={true}
        />
        <label
          htmlFor='file_exam-paper'
          className={'text-sky-900/70 font-semibold'}>
          Select the Document:
        </label>
        <input
          type='file'
          name='file'
          id='file_exam-paper'
          accept={'.pdf'}
          className={
            'w-full h-fit mb-[0.5rem] px-[0.25rem] py-[0.25rem] text-[1.25em] leading-[100%] border-[2px] rounded-[0.25rem]'
          }
          required={true}
        />
        <div className={'w-full h-fit mt-[1rem] flex flex-col gap-[0.25rem]'}>
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
