import React from "react";
import ProductCard from "./ProductCard";
import withEnhancements from "../hoc/withEnhancements";

const EnhancedProductCard = withEnhancements(ProductCard);

const Carousel = ({ data, loading, error }) => {
  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  const products = data?.data?.search?.products || [];

  return (
    <div className="relative">
        <div className="flex gap-4 overflow-x-auto scrollbar-hide p-4">
        {products.map((product, index) => (
            <EnhancedProductCard key={index} product={product} />
        ))}
        </div>
    </div>
  );
};

export default Carousel;
