import React from 'react';
import Button from '../Button/Button';
import SearchResultCard from '../SearchResultCard/SearchResultCard';

function SearchSection() {
  return (
    <section id={'search'}>
      <div>
        <form
          id='searchbar'
          className={
            'w-fit h-fit mx-auto mb-[3rem] flex flex-row items-center justify-center gap-[1rem] shadow-md shadow-black/30 bg-white'
          }>
          <input
            type='date'
            name='exam-year'
            id='input_exam-year'
            className={'w-fit h-fit px-[1em] py-[0.75em] text-xl'}
          />
          <div className={'w-[2px] h-[50px] bg-black'}></div>
          <select
            name='exam'
            id='input_exam'
            className={'w-fit h-fit px-[1em] py-[0.75em] text-xl'}>
            <option value='grade-5'>Grade 5</option>
            <option value='grade-11'>Ordinary Level</option>
            <option value='grade-13'>Advanced Level</option>
          </select>
          <div className={'w-[2px] h-[50px] bg-black'}></div>
          <select
            name='subject'
            id='input_subject'
            className={'w-fit h-fit px-[1em] py-[0.75em] text-xl'}>
            <option value='english'>English</option>
            <option value='maths'>Maths</option>
            <option value='it'>I.C.T</option>
            <option value='science'>Science</option>
            <option value='commerce'>Commerce</option>
          </select>
          <Button
            type={'primary'}
            width={'fit'}
            action={() => {}}>
            Search
          </Button>
        </form>
        <div className={'w-full h-fit grid grid-cols-4 gap-[2rem]'}>
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
