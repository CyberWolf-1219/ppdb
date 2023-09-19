import React, {
  type ChangeEvent,
  type Dispatch,
  type SetStateAction,
} from 'react';
import type { Exam, SubjectStream } from '../../types/types';

interface Props {
  exam: Exam;
  getSubjectStream: Dispatch<SetStateAction<SubjectStream>>;
}

function SubjectStreamSelector({ exam, getSubjectStream }: Props) {
  function onStreamSelect(e: ChangeEvent<HTMLSelectElement>) {
    const subjectStream = e.currentTarget.value as SubjectStream;
    getSubjectStream(subjectStream);
  }

  if (exam === 'al') {
    return (
      <>
        <label
          htmlFor='select_subject_stream'
          className={'text-sky-900/70 font-semibold'}>
          Select the Subject Stream:{' '}
        </label>
        <select
          id='select_subject_stream'
          defaultValue={'art'}
          onChange={onStreamSelect}
          className={
            'w-full h-fit mb-[0.5rem] px-[0.5em] pt-[0.4rem] pb-[0.25rem] text-[1.25rem] leading-[100%] border-[2px] rounded-[0.25rem]'
          }>
          <option value='art'>Art</option>
          <option value='maths'>Maths</option>
          <option value='bio'>Bio</option>
          <option value='tech'>Tech</option>
          <option value='commerce'>Commerce</option>
        </select>
      </>
    );
  }
}

export default React.memo(SubjectStreamSelector);
