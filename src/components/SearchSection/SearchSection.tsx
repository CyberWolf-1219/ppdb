import React, { useState, useCallback } from 'react';
import Searchbar from '../Searchbar/Searchbar';
import SearchResultGallery from '../SearchResultGallery/SearchResultGallery';

export type Result = {
  email: string;
  image: string;
  pdf: string;
};

function SearchSection() {
  const [searchResults, setSearchResults] = useState<Result[]>([]);

  const getResults = useCallback((results: Object[]) => {
    setSearchResults(results as Result[]);
  }, []);

  return (
    <section
      id={'search'}
      className={'bg-pallet-accent/20'}>
      <div>
        <h2 className={'text-center'}>Search for past papers</h2>
        <Searchbar RecieveResults={getResults} />
        <SearchResultGallery SearchResults={searchResults} />
      </div>
    </section>
  );
}

export default SearchSection;
