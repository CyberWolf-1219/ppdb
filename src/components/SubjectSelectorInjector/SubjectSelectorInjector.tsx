import React from 'react';
import OlSubjectSelector from '../OlSubjectSelector/OlSubjectSelector';
import AlSubjectSelector from '../AlSubjectSelector/AlSubjectSelector';
import type { Exam, SubjectStream } from '../../types/types';

interface Props {
  exam: Exam;
  subjectStream: SubjectStream;
}

function SubjectSelectorInjector({ exam, subjectStream }: Props) {
  switch (exam) {
    case '5':
      return (
        <>
          <label
            htmlFor='select_subject'
            className={'text-sky-900/70 font-semibold'}>
            Select the Subject:{' '}
          </label>
          <select
            name='subject'
            id='select_subject'
            defaultValue={'common'}
            className={
              'w-full h-fit mb-[0.5rem] px-[0.5em] pt-[0.4rem] pb-[0.25rem] text-[1.25rem] leading-[100%] border-[2px] rounded-[0.25rem]'
            }>
            <option value='common'>Common</option>
          </select>
        </>
      );

    case 'ol':
      return <OlSubjectSelector />;

    case 'al':
      return <AlSubjectSelector subjectStream={subjectStream} />;

    default:
      return <></>;
  }
}

export default React.memo(SubjectSelectorInjector);
