import React from "react";
import { ShoppingCartIcon } from "@heroicons/react/outline";
import PropTypes from "prop-types";
import PriceDisplay from "./PriceDisplay"; // Import the PriceDisplay component

const ProductCard = ({ product }) => {
  const { name, description, imageSrc, currentPrice, wasPrice, tag, discount } =
    product;

  const handleAddToCart = () => {
    //add method to handle add to cart functionality
  };

  return (
    <div className="relative bg-white shadow-md rounded-lg w-80 flex-shrink-0">
      {tag && (
        <span className="absolute top-2 left-2 bg-blue-100 text-grey text-xs font-semibold px-2 py-1 rounded">
          {tag.toUpperCase()}
        </span>
      )}
      <div className="p-4 mt-5">
        <h3 className="text-lg font-bold text-gray-800">{name}</h3>
        <p className="text-sm text-gray-500 truncate">{description}</p>
        {/* Product Image */}
        <div className="relative h-48 w-full my-4">
          <img
            src={imageSrc}
            alt={name}
            className="absolute inset-0 w-full h-full object-contain rounded-t-lg"
          />
        </div>
        {/* Product Details */}

        {/* PriceDisplay Component */}
        <PriceDisplay
          wasPrice={wasPrice}
          currentPrice={currentPrice}
          discount={discount}
          handleAddToCart={handleAddToCart}
        />
      </div>
    </div>
  );
};

export default ProductCard;
