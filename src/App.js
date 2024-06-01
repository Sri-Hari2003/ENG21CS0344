
import React, { useState } from 'react';
import 'tachyons';
import CardList from './components/CardList';
import SearchBox from './components/SearchBox';
import { cardValues } from './components/details/CardValues';

function App() {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredCards = cardValues.filter(card =>
    card.productName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="tc App">
      <h1 className="tc">DaMart</h1>
      <SearchBox searchChange={handleSearchChange} />
      <CardList cardValues={filteredCards} />
    </div>
  );
}

export default App;
