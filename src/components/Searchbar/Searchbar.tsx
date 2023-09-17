import React, { useRef, type FormEvent, useCallback } from 'react';
import Button from '../Button/Button';

interface Props {
  RecieveResults: (results: Object[]) => void;
}

function Searchbar({ RecieveResults }: Props) {
  const yearInput = useRef<HTMLInputElement>(null);
  const examSelect = useRef<HTMLSelectElement>(null);
  const subjectSelect = useRef<HTMLSelectElement>(null);

  const search = useCallback(async (e: FormEvent) => {
    e.preventDefault();

    const year = yearInput.current!.value as string;
    const exam = examSelect.current!.value as string;
    const subject = subjectSelect.current!.value as string;

    const searchParams = new URLSearchParams();
    searchParams.append('year', year);
    searchParams.append('exam', exam);
    searchParams.append('subject', subject);

    const response = await fetch(`/api/search?${searchParams.toString()}`);
    if (!response.ok) {
      console.log(await response.json());
    } else {
      const result = await response.json();
      console.log(result);
      RecieveResults(result);
    }
  }, []);

  return (
    <form
      id='searchbar'
      onSubmit={search}
      className={
        'w-full h-fit mx-auto mb-[3rem] flex flex-col md:flex-row items-center justify-center md:gap-[0.5rem] shadow-md shadow-black/30 bg-white rounded-[0.25rem] overflow-hidden'
      }>
      <input
        ref={yearInput}
        type='number'
        name='exam-year'
        id='input_exam-year'
        placeholder={'Ex: 2020'}
        min={2000}
        max={new Date().getFullYear()}
        required={true}
        className={'w-full h-fit px-[1em] py-[0.5em] text-base'}
      />

      <select
        ref={examSelect}
        name='exam'
        id='input_exam'
        required={true}
        className={'w-full h-fit px-[1em] py-[0.5em] text-base'}>
        <option value='5'>Grade 5</option>
        <option value='ol'>Ordinary Level</option>
        <option value='al'>Advanced Level</option>
      </select>

      <select
        ref={subjectSelect}
        name='subject'
        id='input_subject'
        required={true}
        className={'w-full h-fit px-[1em] py-[0.5em] text-base'}>
        <option value='english'>English</option>
        <option value='maths'>Maths</option>
        <option value='ict'>I.C.T</option>
        <option value='science'>Science</option>
        <option value='commerce'>Commerce</option>
      </select>
      <Button
        type={'primary'}
        width={'full'}
        textSize={'md'}
        fontWeight={'bold'}
        roundness={'right'}
        action={() => {}}>
        Search
      </Button>
    </form>
  );
}

export default React.memo(Searchbar);
