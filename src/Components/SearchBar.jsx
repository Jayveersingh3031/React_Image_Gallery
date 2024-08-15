import React from 'react';

const SearchBar = ({ searchInput, setSearchInput, handleSearch }) => {
  return (
    <form onSubmit={handleSearch} className="text-center">
      <h1 className="mt-8 ml-[-10px] text-2xl mb-8">Image Search App</h1>
      <input
        id="searchInput"
        type="text"
        placeholder="Search for images"
        className="md:p-4 p-2 md:w-64 w-40 border border-gray-400"
        value={searchInput}
        onChange={(e) => setSearchInput(e.target.value)}
      />
      <button type="submit" className="md:p-4 p-2 bg-green-600 text-white ml-2">
        Search
      </button>
    </form>
  );
};

export default SearchBar;
