import React from 'react';
import SearchResultCard from '../SearchResultCard/SearchResultCard';
import type { Result } from '../SearchSection/SearchSection';

interface Props {
  searched: boolean;
  SearchResults: Result[];
}

function SearchResultGallery({ searched, SearchResults }: Props) {
  if (!searched) {
    return (
      <div
        className={'w-full h-fit flex flexl-col items-center justify-center'}>
        <img
          src='/study.svg'
          alt='no content illustration'
          width={400}
          height={400}
          className={'object-contain'}
        />
      </div>
    );
  } else if (SearchResults.length < 1 && searched) {
    return (
      <div
        className={'w-full h-fit flex flexl-col items-center justify-center'}>
        <img
          src='404.svg'
          alt='no content illustration'
          width={400}
          height={400}
          className={'object-contain'}
        />
      </div>
    );
  } else {
    return (
      <div
        className={
          'w-full h-fit grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-[2rem]'
        }>
        {SearchResults.map((result, i) => {
          return (
            <SearchResultCard
              key={`search_result_${i}_${Math.random()}`}
              uploaderEmail={result.email}
              imageLink={result.image}
              downloadLink={result.pdf}
            />
          );
        })}
      </div>
    );
  }
}

export default SearchResultGallery;
