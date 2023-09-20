import React, { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function ImageGrid({ data }) {
  useEffect(() => {}, [data]);

  return (
    <div className="mx-auto max-w-screen-xl px-4 md:px-8 mb-40 flex justify-center items-center mt-10">
      <div className="grid gap-8 grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3">
        {data.slice(0, 9).map((item) => (
          <div key={item.id}>
            <div
              className="card w-96 bg-white shadow-xl"
              style={{ borderRadius: "0", border: "1px solid #e2e8f0" }}
            >
              <div className="relative">
                <img src={item.image} alt={item.alt} />
                <div className="absolute top-0 right-0 bg-white p-1">
                  <FontAwesomeIcon
                    icon={["far", "heart"]}
                    className="text-gray-400 text-2xl"
                  />
                </div>
              </div>

              <img
                src={item.Agent}
                alt={item.alt}
                className="w-20 h-20 rounded-full absolute mt-150 right-5"
              />
              <div className="card-body">
                <div className="flex items-center">
                  <h1 className="card-title font-dm-sans text-3xl">
                    $ {item.Rent}
                  </h1>
                  <span className="text-gray-400 ml-1"> / Week</span>
                </div>
                <h2 className="card-title font-dm-sans text-3xl">
                  {item.Suburb}
                </h2>
                <h3 className="text-gray-400 ml-1 text-lg">{item.Address}</h3>
                <hr className="border-t-1 border-gray-400 my-4" />

                <div className="flex items-center gap-2">
                  <span className="text-gray-400 ml-1">
                    <FontAwesomeIcon icon={["fas", "bed"]} size="xl" />
                  </span>
                  <div className="text-2xl text-gray-400">{item.Rooms} </div>
                  <span className="text-gray-400 ml-1">
                    <FontAwesomeIcon icon={["fas", "bath"]} size="xl" />
                  </span>
                  <div className="text-2xl text-gray-400">{item.Bathrooms}</div>
                  <span className="text-gray-400 ml-1">
                    <FontAwesomeIcon icon={["fas", "car"]} size="xl" />
                  </span>
                  <div className="text-2xl text-gray-400">{item.Carparks}</div>
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
