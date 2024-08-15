import React, { useState } from 'react';
import SearchBar from './Components/SearchBar';
import ImageList from './Components/ImageList';
import FallbackImages from './Components/FallBackImages';
import ShowMoreButton from './Components/ShowMoreButton';

const App = () => {
  const key = 'ciANcspREIxZzirwUEtt_gbSmwGzYUCokAzbsp2Q3Qk';
  const [searchInput, setSearchInput] = useState('');
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);

  const search = async (newSearch = false) => {
    const currentPage = newSearch ? 1 : page; // Reset page to 1 if it's a new search
    const url = `https://api.unsplash.com/search/photos?page=${currentPage}&query=${searchInput}&client_id=${key}`;
    const res = await fetch(url);
    const data = await res.json();
    const result = data.results;

    if (newSearch) {
      setImages(result); // Set new images on fresh search
    } else {
      setImages(prevImages => [...prevImages, ...result]); // Append new images to existing ones for pagination
    }

    setPage(currentPage + 1); // Increase the page number
  };

  const handleSearch = (event) => {
    event.preventDefault();
    setImages([]); // Clear previous images on new search
    setPage(1); // Reset the page number
    search(true); // Call search with newSearch flag
  };

  return (
    <div className="h-full w-full">
      <div className="flex justify-center">
        <SearchBar searchInput={searchInput} setSearchInput={setSearchInput} handleSearch={handleSearch} />
      </div>

      {images.length === 0 ? (
        <FallbackImages />
      ) : (
        <ImageList images={images} />
      )}

      {images.length > 0 && (
        <ShowMoreButton onClick={() => search(false)} />
      )}
    </div>
  );
};

export default App;
