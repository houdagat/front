import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import useFetch from "../../hooks/useFetch";
import "./featuredProperties.css";

const FeaturedProperties = () => {
  const { data, loading } = useFetch("http://localhost:8000/api/hotels?featured=true");

  return (
    <div className="fp">
      {loading ? (
        "Loading"
      ) : (
        <>
          {data.map((item) => (
            <div className="fpItem" key={item._id}>
              <div>
                <img src={item.photos[0]} alt="img" className="fpImg" />
              </div>

              <div className="fpName">{item.name}</div>
              <div className="fpCity">{item.city}</div>
              <div className="fpPrice">
                Starting from {item.cheapesPrice} TND
              </div>

              {item.rating && (
                <div className="fpRating">
                  <button>{item.rating}</button>
                  <span>Excellent</span>
                </div>
              )}
            </div>
          ))}
        </>
      )}
    </div>
  );
};
export default FeaturedProperties;
