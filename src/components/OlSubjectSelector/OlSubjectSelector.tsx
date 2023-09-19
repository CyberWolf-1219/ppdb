import React from 'react';
import { OL_SUBJECTS } from '../../static-data/ol-subjects';

function OlSubjectSelector() {
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
        defaultValue={'dummy'}
        className={
          'w-full h-fit mb-[0.5rem] px-[0.5em] pt-[0.4rem] pb-[0.25rem] text-[1.25rem] leading-[100%] border-[2px] rounded-[0.25rem]'
        }>
        {OL_SUBJECTS.map((subject, i) => {
          const value = subject.replaceAll(/\s|-|,/g, '').toLowerCase();
          return (
            <option
              key={`subject_${i}_${Math.random().toString()}`}
              value={value}>
              {subject}
            </option>
          );
        })}
      </select>
    </>
  );
}

export default OlSubjectSelector;
