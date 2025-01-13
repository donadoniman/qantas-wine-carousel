import React from "react";
import { render, screen } from "@testing-library/react";
import PriceDisplay from "../components/PriceDisplay"; // Adjust the import path as necessary
import '@testing-library/jest-dom'; // For additional matchers like toBeInTheDocument

describe("PriceDisplay Component", () => {
  const mockHandleAddToCart = jest.fn();

  const mockCurrentPrice = {
    cashPrice: { amount: 100 },
    pointsPrice: { amount: 200 },
  };

  const mockWasPrice = {
    cashPrice: { amount: 120 },
    pointsPrice: { amount: 220 },
  };

  test("renders the correct current price and points price", () => {
    render(
      <PriceDisplay
        wasPrice={mockWasPrice}
        currentPrice={mockCurrentPrice}
        discount={10}
        handleAddToCart={mockHandleAddToCart}
      />
    );

    // Check if the current price is rendered in red
    expect(screen.getByText("$100")).toHaveClass("text-red-500");

    // Check if the points price is rendered correctly
    expect(screen.getByText("200 pts")).toBeInTheDocument();
  });

  test("renders the original price with line-through if wasPrice is provided", () => {
    render(
      <PriceDisplay
        wasPrice={mockWasPrice}
        currentPrice={mockCurrentPrice}
        discount={10}
        handleAddToCart={mockHandleAddToCart}
      />
    );

    // Check if the original price has line-through class
    expect(screen.getByText("$120")).toHaveClass("line-through");

    // Check if the original points price has line-through class
    expect(screen.getByText("220 pts")).toHaveClass("line-through");
  });

  test("renders the discount percentage if provided", () => {
    render(
      <PriceDisplay
        wasPrice={mockWasPrice}
        currentPrice={mockCurrentPrice}
        discount={20}
        handleAddToCart={mockHandleAddToCart}
      />
    );

    // Check if the discount text is displayed
    expect(screen.getByText("20% OFF")).toBeInTheDocument();
  });

});
