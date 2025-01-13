import React from "react";
import { render, screen } from "@testing-library/react";
import Carousel from "../components/Carousel";

const mockData = {
  data: {
    search: {
      products: [
        {
          "name": "Product 1",
          "description": "Description 1",
          "imageSrc": "https://via.placeholder.com/300x200",
          "tag": "sale",
          "wasPrice": {
            "cashPrice": { "amount": 200 },
            "pointsPrice": { "amount": 25000 }
          },
          "currentPrice": {
            "cashPrice": { "amount": 119 },
            "pointsPrice": { "amount": 15000 }
          }
        },
        {
          "name": "Product 2",
          "description": "Description 2",
          "imageSrc": "https://via.placeholder.com/300x200",
          "tag": "sale",
          "wasPrice": {
            "cashPrice": { "amount": 134 },
            "pointsPrice": { "amount": 23470 }
          },
          "currentPrice": {
            "cashPrice": { "amount": 129.99 },
            "pointsPrice": { "amount": 19900 }
          }
        },
      ],
    },
  },
};

describe("Carousel Component", () => {
  test("renders products correctly", () => {
    render(<Carousel data={mockData} />);
    expect(screen.getByText("Product 1")).toBeInTheDocument();
    expect(screen.getByText("Product 2")).toBeInTheDocument();
  });
});
