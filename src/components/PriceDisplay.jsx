import React from "react";
import PropTypes from "prop-types";
import { ShoppingCartIcon } from "@heroicons/react/outline";

const PriceDisplay = ({
  wasPrice,
  currentPrice,
  discount,
  handleAddToCart,
}) => {
  return (
    <div className="flex justify-between items-start">
      {/* Pricing Section */}
      <div className="text-left">
        {wasPrice && (
          <p className="text-sm text-gray-500 line-through">
            ${wasPrice.cashPrice.amount}
          </p>
        )}
        <p
          className={`text-xl font-semibold ${
            wasPrice ? "text-red-500" : "text-gray-700"
          }`}
        >
          ${currentPrice.cashPrice.amount}
        </p>
        <div className="flex items-center mt-4">
            <p className="text-sm text-gray-500 mr-1">Or</p>
            <p
            className={`text-lg font-semibold ${
                wasPrice ? "text-red-500" : "text-gray-700"
            }`}
            >
            {currentPrice.pointsPrice.amount} pts
            </p>
        </div>
        {wasPrice && (
          <p className="text-sm text-gray-500 line-through">
            {wasPrice.pointsPrice.amount} pts
          </p>
        )}
      </div>

      {/* Add to Cart Button */}
      <div className="mt-4 flex flex-col items-end">
        {discount && (
          <div className="text-sm font-semibold text-green-500 mb-2">
            {discount}% OFF
          </div>
        )}
        <div className="absolute bottom-4 right-4">
          <button
            onClick={handleAddToCart}
            className="flex items-center px-4 py-2 bg-red-500 text-white font-semibold rounded shadow hover:bg-red-600"
          >
            Add
            <ShoppingCartIcon className="h-5 w-5 ml-2" />
          </button>
        </div>
      </div>
    </div>
  );
};

PriceDisplay.propTypes = {
  wasPrice: PropTypes.shape({
    cashPrice: PropTypes.shape({
      amount: PropTypes.number.isRequired,
    }),
    pointsPrice: PropTypes.shape({
      amount: PropTypes.number.isRequired,
    }),
  }),
  currentPrice: PropTypes.shape({
    cashPrice: PropTypes.shape({
      amount: PropTypes.number.isRequired,
    }),
    pointsPrice: PropTypes.shape({
      amount: PropTypes.number.isRequired,
    }),
  }).isRequired,
  discount: PropTypes.number,
  handleAddToCart: PropTypes.func.isRequired,
};

export default PriceDisplay;
