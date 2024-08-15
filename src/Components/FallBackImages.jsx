import React from 'react';

const FallbackImages = () => {
  const fallbackImages = [
    {
      src: "https://images.unsplash.com/photo-1453396450673-3fe83d2db2c4?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      alt: "Man in black",
      link: "https://unsplash.com/photos/grayscale-photo-of-man-wearing-blazer-Kt8eGw8_S8Y"
    },
    {
      src: "https://images.unsplash.com/photo-1719216323962-ea9b315ad9bd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0N3x8fGVufDB8fHx8fA%3D%3D",
      alt: "Wolf in winter",
      link: "https://unsplash.com/photos/a-wolf-laying-in-the-snow-with-its-eyes-closed-2e2slrmmEAw"
    },
    {
      src: "https://images.unsplash.com/photo-1629892707072-823a636e6890?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      alt: "Beautiful mountain in fog",
      link: "https://unsplash.com/photos/gray-mountain-under-white-clouds-during-daytime-Z8cOaJTyQDI"
    }
  ];

  return (
    <div className="flex flex-wrap justify-center">
      {fallbackImages.map((image, index) => (
        <div key={index} className="m-8 w-96 h-96 flex flex-col border border-gray-400">
          <div className="w-full h-4/5">
            <img src={image.src} alt={image.alt} className="w-full h-full object-cover" />
          </div>
          <div className="w-full h-1/5 p-4">
            <a href={image.link} className="text-black uppercase" target="_blank" rel="noopener noreferrer">
              {image.alt}
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FallbackImages;
