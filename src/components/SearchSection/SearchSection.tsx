import React from 'react';
import Button from '../Button/Button';
import SearchResultCard from '../SearchResultCard/SearchResultCard';

function SearchSection() {
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
            type='date'
            name='exam-year'
            id='input_exam-year'
            className={'w-full h-fit px-[1em] py-[0.5em] text-base'}
          />

          <select
            name='exam'
            id='input_exam'
            className={'w-full h-fit px-[1em] py-[0.5em] text-base'}>
            <option value='grade-5'>Grade 5</option>
            <option value='grade-11'>Ordinary Level</option>
            <option value='grade-13'>Advanced Level</option>
          </select>

          <select
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
            action={() => {}}>
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
