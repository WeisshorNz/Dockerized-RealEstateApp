import React, { useState, useEffect } from "react";
import testData from "../testData/testListings.json";

function ImageGrid() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    // In your case, you can directly use the imported JSON data
    setImages(testData);
  }, []);

  return (
    <div className="mx-auto max-w-screen-xl px-8">
      <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3">
        {images.slice(0, 9).map((image) => (
          <div key={image.id} className="flex justify-center p-4">
            <img
              src={image.image}
              alt={image.alt}
              className="max-h-80 max-w-full mx-auto"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default ImageGrid;
