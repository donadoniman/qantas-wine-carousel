import React from "react";
import { render, screen } from "@testing-library/react";
import ProductCard from "../components/ProductCard"; // Adjust the import path as necessary
import '@testing-library/jest-dom'; // For additional matchers like toBeInTheDocument

describe("ProductCard Component", () => {
  const mockProduct = {
    name: "Product 1",
    description: "This is a test product.",
    imageSrc: "https://via.placeholder.com/150",
    currentPrice: {
      cashPrice: { amount: 100 },
      pointsPrice: { amount: 200 },
    },
    wasPrice: {
      cashPrice: { amount: 120 },
      pointsPrice: { amount: 220 },
    },
    tag: "sale",
    discount: 20,
  };

  test("renders product name and description", () => {
    render(<ProductCard product={mockProduct} />);
    
    // Check if the product name is rendered
    expect(screen.getByText(mockProduct.name)).toBeInTheDocument();

    // Check if the description is rendered
    expect(screen.getByText(mockProduct.description)).toBeInTheDocument();
  });

  test("renders product image", () => {
    render(<ProductCard product={mockProduct} />);
    
    // Check if the product image is rendered correctly
    const imgElement = screen.getByAltText(mockProduct.name);
    expect(imgElement).toBeInTheDocument();
    expect(imgElement).toHaveAttribute("src", mockProduct.imageSrc);
  });

  test("renders price display with correct values", () => {
    render(<ProductCard product={mockProduct} />);
    
    // Check if the current price is displayed
    expect(screen.getByText("$100")).toBeInTheDocument();

    // Check if the points price is displayed
    expect(screen.getByText("200 pts")).toBeInTheDocument();

    // Check if the was price is displayed with line-through
    expect(screen.getByText("$120")).toHaveClass("line-through");

    // Check if the discount is displayed
    expect(screen.getByText("20% OFF")).toBeInTheDocument();
  });

  test("renders the product tag if provided", () => {
    render(<ProductCard product={mockProduct} />);
    
    // Check if the tag is rendered
    expect(screen.getByText("SALE")).toBeInTheDocument();
  });

  test("does not render the product tag if not provided", () => {
    const productWithoutTag = { ...mockProduct, tag: null };
    
    render(<ProductCard product={productWithoutTag} />);
    
    // Check if the tag is not rendered
    expect(screen.queryByText("SALE")).not.toBeInTheDocument();
  });
});
