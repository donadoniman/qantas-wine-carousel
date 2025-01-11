import { render, screen } from "@testing-library/react";
import Carousel from "../components/Carousel";

const sampleProducts = [
  { name: "Product 1", description: "Description 1", imageSrc: "image1.jpg", currentPrice: { cashPrice: { amount: 100 }, pointsPrice: { amount: 2000 } } },
  { name: "Product 2", description: "Description 2", imageSrc: "image2.jpg", currentPrice: { cashPrice: { amount: 150 }, pointsPrice: { amount: 3000 } } },
];

test("renders carousel with products", () => {
  render(<Carousel products={sampleProducts} />);
  expect(screen.getByText("Product 1")).toBeInTheDocument();
  expect(screen.getByText("Product 2")).toBeInTheDocument();
});
