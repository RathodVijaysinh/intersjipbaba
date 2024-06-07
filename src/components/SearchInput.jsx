// src/components/SearchInput.js

import React from 'react';

const SearchInput = ({ value, onChange }) => {
  return (
    <div className="search-container">
      <input
        type="text"
        value={value}
        onChange={onChange}
        placeholder="Search items..."
        className="search-input"
      />
    </div>
  );
};

export default SearchInput;
