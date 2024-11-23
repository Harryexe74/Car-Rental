// Reviews.js
import React from "react";
import { topProducts } from "../../../utils/utils";

const TopProducts = ({ heading, products }) => {
  return (
    <div className="bg-ground rounded-[10px] p-4">
      <h4 className="text-primary-400 mb-4  text-[1rem] font-semibold">
        {heading}
      </h4>

      <div className="space-y-3 min-w-full h-96 w-full overflow-y-scroll overflow-x-auto scrollbar-hide p-2">
        {topProducts.map((products, index) => (
          <div
          key={index}
          className="flex items-center shadow-sm bg-white rounded-[10px] p-4 transition transform hover:scale-105 hover:bg-gray-100"
        >
          <div className="w-full flex items-center justify-between">
            <div className="flex items-center gap-5">
              <img
                src={products.image}
                alt={products.name}
                className="w-12 h-12 rounded-full"
              />
        
              <div className="flex flex-col">
                <h5 className="text-gray-800 text-[.8rem]">{products.name}</h5>
                <p className="text-gray-600 text-[.8rem]">{products.sales}</p>
              </div>
            </div>
        
            <p className="text-green-600 text-[.8rem]">{products.price}</p>
          </div>
        </div>
        ))}
      </div>
    </div>
  );
};

export default TopProducts;
