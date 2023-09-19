import React from 'react';
import { AL_SUBJECTS } from '../../static-data/al-subjects';

interface Props {
  subjectStream: null | 'maths' | 'bio' | 'art' | 'commerce' | 'tech';
}

function AlSubjectSelector({ subjectStream }: Props) {
  if (subjectStream == 'art') {
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
          {AL_SUBJECTS.art.map((subject, i) => {
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
  } else if (subjectStream == 'maths') {
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
          {AL_SUBJECTS.maths.map((subject, i) => {
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
  } else if (subjectStream == 'bio') {
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
          {AL_SUBJECTS.bio.map((subject, i) => {
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
  } else if (subjectStream == 'commerce') {
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
          {AL_SUBJECTS.commerce.map((subject, i) => {
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
  } else if (subjectStream == 'tech') {
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
          {AL_SUBJECTS.tech.map((subject, i) => {
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
}

export default AlSubjectSelector;
