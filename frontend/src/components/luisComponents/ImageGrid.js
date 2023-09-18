
import React, { useEffect } from "react";

function ImageGrid({ data }) {
  useEffect(() => {
    
  }, [data]);

  return (
    <div className="mx-auto max-w-screen-xl px-4 md:px-8">
      <div className="grid gap-4 grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3">
        {data.slice(0, 9).map((item) => (
          <div key={item.id}>
            <div
              className="card w-96 bg-base-100 shadow-xl"
              style={{ borderRadius: "0", border: "1px solid black" }}
            >
              <figure>
                <img src={item.image} alt={item.alt} />
              </figure>
              <div className="card-body">
                <h2 className="card-title">{item.Suburb}</h2>
                <p>Weekly Rent: {item.Rent}</p>
                <p>🛏️ {item.Rooms}</p>
                <p>🛁 {item.Bathrooms}</p>
                <div className="card-actions justify-end">
                  <button className="btn btn-error text-white bg-red-600">
                    Rent me!
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ImageGrid;
