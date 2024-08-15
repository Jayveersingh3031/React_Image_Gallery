import React from 'react';

const ShowMoreButton = ({ onClick }) => {
  return (
    <div className="flex justify-center">
      <button onClick={onClick} className="mb-12 p-4 bg-green-600 text-white cursor-pointer">
        Show More
      </button>
    </div>
  );
};

export default ShowMoreButton;
