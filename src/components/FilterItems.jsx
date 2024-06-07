
import React, { useState } from 'react';
import SearchInput from './SearchInput';
import ItemList from './ItemList';
import '../App.css';

const FilterItems = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const items = [
    'Apple',
    'Banana',
    'Orange',
    'Mango',
    'Pineapple',
    'Strawberry',
    'Gulabjabu',
  ];

  const filteredItems = items.filter(item =>
    item.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  return (
    <div className="App mt-6">
      <SearchInput value={searchQuery} onChange={handleSearchChange} />
      <ItemList items={filteredItems} />
    </div>
  );
};

export default FilterItems;

