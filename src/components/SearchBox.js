import React from 'react';

const SearchBox = ({ searchfield, searchChange }) => {
  return (
    <div className='pa1'>
      <input
        className='br3 pa2 bg-washed yellow'
        type='search'
        placeholder='search robots...'
        onChange={searchChange}
      />
    </div>
  );
}

export default SearchBox;