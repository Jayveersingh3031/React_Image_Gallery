import React from 'react';

const ImageCard = ({ image }) => {
  return (
    <div className="m-8 w-96 h-96 flex flex-col border border-gray-400">
      <div className="w-full h-4/5">
        <img src={image.urls.small} alt={image.alt_description} className="w-full h-full object-cover" />
      </div>
      <div className="w-full h-1/5 p-4">
        <a href={image.links.download} target="_blank" rel="noopener noreferrer" className="text-black uppercase">
          {image.alt_description || 'No description'}
        </a>
      </div>
    </div>
  );
};

export default ImageCard;
