import React from "react";

const withEnhancements = (WrappedComponent) => {
  return (props) => {
    const { product } = props;

    const discount =
      product.wasPrice &&
      Math.round(
        ((product.wasPrice.cashPrice.amount - product.currentPrice.cashPrice.amount) /
          product.wasPrice.cashPrice.amount) *
          100
      );

    const enhancedProduct = {
      ...product,
      discount: discount || null,
      tag: product.tag || "new",
    };

    return <WrappedComponent {...props} product={enhancedProduct} />;
  };
};

export default withEnhancements;
