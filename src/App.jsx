import React, { useState } from 'react';

const App = () => {
  const key = 'ciANcspREIxZzirwUEtt_gbSmwGzYUCokAzbsp2Q3Qk';
  const [searchInput, setSearchInput] = useState('');
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);

  const search = async () => {
    const url = `https://api.unsplash.com/search/photos?page=${page}&query=${searchInput}&client_id=${key}`;
    const res = await fetch(url);
    const data = await res.json();
    const result = data.results;

    if (page === 1) {
      setImages(result);
    } else {
      setImages(prevImages => [...prevImages, ...result]);
    }

    setPage(page + 1);
  };

  const handleSearch = (event) => {
    event.preventDefault();
    setPage(1);
    search();
  };

  return (
    <div className="h-full w-full">
      <div className="flex justify-center">
        <form onSubmit={handleSearch} className="text-center">
          <h1 className="mt-8 ml-24 text-2xl mb-8">Image Search App</h1>
          <input
            id="searchInput"
            type="text"
            placeholder="Search for images"
            className="p-4 w-64 border border-gray-400"
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
          />
          <button type="submit" className="p-4 bg-green-600 text-white ml-2">
            Search
          </button>
        </form>
      </div>
      <div className="flex flex-wrap ">
        {images.map((image) => (
          <div key={image.id} className="m-8 w-96 h-96 flex flex-col border border-gray-400">
            <div className="w-full h-4/5">
              <img src={image.urls.small} alt={image.alt_description} className="w-full h-full object-cover" />
            </div>
            <div className="w-full h-1/5 p-4">
              <a href={image.links.download} target="_blank" rel="noopener noreferrer" className="text-black uppercase">
                {image.alt_description || 'No description'}
              </a>
            </div>
          </div>
        ))}
      </div>
      {images.length > 0 && (
        <div className="flex justify-center">
          <button onClick={search} className="mb-12 p-4 bg-green-600 text-white cursor-pointer">
            Show More
          </button>
        </div>
      )}
    </div>
  );
};

export default App;
