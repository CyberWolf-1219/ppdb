import React from 'react';
import SearchResultCard from '../SearchResultCard/SearchResultCard';
import type { Result } from '../SearchSection/SearchSection';

interface Props {
  SearchResults: Result[];
}

function SearchResultGallery({ SearchResults }: Props) {
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

export default SearchResultGallery;
