import React, { ChangeEvent, useEffect, useRef, useState } from 'react';
import debounce from 'lodash/debounce';
import { SearchIcon } from './Icon';

interface SearchProps {
  setSearchText: (value: string) => void;
  searchText?: string;
  isFullWidthSearch?: boolean;
  className?: string;
}

const Search = (props: SearchProps) => {
  const { searchText, setSearchText, isFullWidthSearch = false, className } = props;
  const [searchValue, setSearchValue] = useState('');

  const inputClass = `py-[14px] pl-12 pr-4 text-sm font-semibold 
  text-textDark placeholder-[#BABABA] placeholder:font-medium border-[0px] bg-light-blue rounded-md
   outline-none focus:outline-none focus:ring-0
  ${isFullWidthSearch ? 'w-full' : ''}
  ${className}`;

  useEffect(() => {
    setSearchValue(searchText ?? '');
  }, [searchText]);

  const debouncedSearchHandler = useRef(
    debounce((text) => {
      setSearchText(text);
    }, 300),
  ).current;

  const searchHandler = (e: ChangeEvent<HTMLInputElement>): void => {
    let { value } = e.target;
    setSearchValue(value);
    debouncedSearchHandler(value);
  };



  return (
    <div className={`relative ${isFullWidthSearch ? 'w-full' : ''}`}>
      <div className={`absolute top-1/2 transform -translate-y-1/2 left-4 pointer-events-none`}>
        <SearchIcon fill="#363853" width={20} height={20} />
      </div>
      <input type="text" placeholder="Search" onChange={searchHandler} className={inputClass} value={searchValue} />
    </div>
  );
};

export default Search;
