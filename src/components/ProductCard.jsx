import React from "react";

const ProductCard = ({ product }) => {
  const {
    name,
    description,
    imageSrc,
    currentPrice,
    wasPrice,
    tag,
    discount,
  } = product;

  return (
    <div className="bg-white shadow-md rounded-lg w-80 flex-shrink-0">
        {/* Product Image */}
      <img src={imageSrc} alt={name} className="rounded-t-lg h-48 w-full object-cover" />
      {/* Product Details */}
      <div className="p-4">
        <h3 className="text-lg font-bold text-gray-800">{name}</h3>
        <p className="text-sm text-gray-500">{description}</p>
        {tag && <span className="text-xs bg-red-500 text-white px-2 py-1 rounded-full mt-2 inline-block">
            {tag}
          </span>}
        {discount && <span className="ml-2 text-sm text-green-500">-{discount}%</span>}
        <div className="mt-4">
          <p className="text-lg font-semibold text-gray-900">
            ${currentPrice.cashPrice.amount} / {currentPrice.pointsPrice.amount} pts
          </p>
          {wasPrice && (
            <p className="text-sm text-gray-500 line-through">
              ${wasPrice.cashPrice.amount} / {wasPrice.pointsPrice.amount} pts
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
