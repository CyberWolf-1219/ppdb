import React, {
  type ChangeEvent,
  type Dispatch,
  type SetStateAction,
} from 'react';
import type { Exam } from '../../types/types';

interface Props {
  getExam: Dispatch<SetStateAction<Exam>>;
}

function ExamSelector({ getExam }: Props) {
  function onSelect(e: ChangeEvent<HTMLSelectElement>) {
    const exam = e.currentTarget.value as '5' | 'ol' | 'al';
    getExam(exam);
  }

  return (
    <>
      <label
        htmlFor='select_exam'
        className={'text-sky-900/70 font-semibold'}>
        Select the Exam:{' '}
      </label>
      <select
        name='exam'
        id='select_exam'
        defaultValue={'5'}
        onChange={onSelect}
        className={
          'w-full h-fit mb-[0.5rem] px-[0.5rem] pt-[0.4rem] pb-[0.25rem] text-[1.25rem] leading-[100%] border-[2px] rounded-[0.25rem]'
        }
        required={true}>
        <option value='5'>Grade 5</option>
        <option value='ol'>GCE O/L</option>
        <option value='al'>GCE A/L</option>
      </select>
    </>
  );
}

export default React.memo(ExamSelector);
