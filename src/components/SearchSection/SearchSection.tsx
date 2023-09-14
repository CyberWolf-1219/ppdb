import React, { useRef, type UIEvent } from 'react';
import Button from '../Button/Button';
import SearchResultCard from '../SearchResultCard/SearchResultCard';

function SearchSection() {
  const yearInput = useRef<HTMLInputElement>(null);
  const examSelect = useRef<HTMLSelectElement>(null);
  const subjectSelect = useRef<HTMLSelectElement>(null);

  async function search(e: UIEvent) {
    e.preventDefault();

    const year = yearInput.current!.value as string;
    const exam = examSelect.current!.value as string;
    const subject = subjectSelect.current!.value as string;

    const searchParams = new URLSearchParams();
    searchParams.append('year', year);
    searchParams.append('exam', exam);
    searchParams.append('subject', subject);

    const response = await fetch(`/api/search?${searchParams.toString()}`);
    const result = await response.json();
    console.log(result);
  }

  return (
    <section
      id={'search'}
      className={'bg-pallet-accent/20'}>
      <div>
        <h2 className={'text-center'}>Search for past papers</h2>
        <form
          id='searchbar'
          className={
            'w-full h-fit mx-auto mb-[3rem] flex flex-col md:flex-row items-center justify-center md:gap-[0.5rem] shadow-md shadow-black/30 bg-white rounded-sm overflow-hidden'
          }>
          <input
            ref={yearInput}
            type='number'
            name='exam-year'
            id='input_exam-year'
            className={'w-full h-fit px-[1em] py-[0.5em] text-base'}
          />

          <select
            ref={examSelect}
            name='exam'
            id='input_exam'
            className={'w-full h-fit px-[1em] py-[0.5em] text-base'}>
            <option value='5'>Grade 5</option>
            <option value='ol'>Ordinary Level</option>
            <option value='al'>Advanced Level</option>
          </select>

          <select
            ref={subjectSelect}
            name='subject'
            id='input_subject'
            className={'w-full h-fit px-[1em] py-[0.5em] text-base'}>
            <option value='english'>English</option>
            <option value='maths'>Maths</option>
            <option value='it'>I.C.T</option>
            <option value='science'>Science</option>
            <option value='commerce'>Commerce</option>
          </select>
          <Button
            type={'primary'}
            width={'full'}
            textSize={'md'}
            action={search}>
            Search
          </Button>
        </form>

        <div
          className={
            'w-full h-fit grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-[2rem]'
          }>
          <SearchResultCard
            imageLink={''}
            downloadLink={''}
          />
          <SearchResultCard
            imageLink={''}
            downloadLink={''}
          />
          <SearchResultCard
            imageLink={''}
            downloadLink={''}
          />
          <SearchResultCard
            imageLink={''}
            downloadLink={''}
          />
          <SearchResultCard
            imageLink={''}
            downloadLink={''}
          />
          <SearchResultCard
            imageLink={''}
            downloadLink={''}
          />
          <SearchResultCard
            imageLink={''}
            downloadLink={''}
          />
          <SearchResultCard
            imageLink={''}
            downloadLink={''}
          />
        </div>
      </div>
    </section>
  );
}

export default SearchSection;
