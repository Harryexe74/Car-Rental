// Reviews.js
import React from "react";

const Reviews = ({ heading, reviews }) => {
  return (
    <div className="bg-ground rounded-[10px] p-4">
      <h4 className="text-primary-400 mb-4  text-[1rem] font-semibold">
        {heading}
      </h4>

      <div className="space-y-3 min-w-full h-96 w-full overflow-y-scroll overflow-x-auto scrollbar-hide p-2">
        {reviews.map((review, index) => (
          <div
            key={index}
            className="flex items-center shadow-sm justify-between bg-white rounded-[10px] p-4 transition transform hover:scale-105 hover:bg-gray-100"
          >
            <div className="flex items-center">
              <img
                src={review.image}
                alt={review.name}
                className="w-12 h-12 rounded-full mr-4"
              />
              <div>
                <h5 className="text-white text-[.9rem]">{review.name}</h5>
                <p className="text-yellow-400 text-[.8rem]">{review.rating}</p>
                <p className="text-primary-400 text-[.8rem]">{review.comment}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Reviews;
