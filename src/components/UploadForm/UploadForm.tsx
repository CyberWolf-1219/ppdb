import React, {
  useCallback,
  useRef,
  useState,
  type FormEvent,
  type UIEvent,
  type Dispatch,
  type SetStateAction,
} from 'react';
import type { Exam, SubjectStream } from '../../types/types';
import { useCookies } from 'react-cookie';
import ExamSelector from '../ExamSelector/ExamSelector';
import SubjectStreamSelector from '../SubjectStreamSelector/SubjectStreamSelector';
import SubjectSelectorInjector from '../SubjectSelectorInjector/SubjectSelectorInjector';
import Button from '../Button/Button';

interface Props {
  formCloseHandler: (e: UIEvent) => void;
  getFormState: Dispatch<SetStateAction<boolean>>;
}

function UploadForm({ formCloseHandler, getFormState }: Props) {
  const [cookies, setCookie, removeCookie] = useCookies([
    'logged-in',
    'user-email',
  ]);

  const [exam, setExam] = useState<Exam>('5');
  const [subjectStream, SetsubjectStream] = useState<SubjectStream>('art');

  const form = useRef<HTMLFormElement>(null);

  const upload = useCallback(async (e: FormEvent) => {
    getFormState(true);

    e.preventDefault();
    const fd = new FormData(form.current!);

    const response = await fetch('/api/upload', { method: 'POST', body: fd });
    console.log(await response.json());

    getFormState(false);
  }, []);

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
        <ExamSelector getExam={setExam} />
        <SubjectStreamSelector
          exam={exam}
          getSubjectStream={SetsubjectStream}
        />
        <SubjectSelectorInjector
          exam={exam}
          subjectStream={subjectStream}
        />
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
