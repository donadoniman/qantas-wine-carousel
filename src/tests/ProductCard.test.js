import { render, screen } from "@testing-library/react";
import ProductCard from "../components/ProductCard";

const mockProduct = {
  name: "Sample Product",
  description: "Sample Description",
  imageSrc: "https://via.placeholder.com/150",
  currentPrice: { cashPrice: { amount: 100 }, pointsPrice: { amount: 2000 } },
  wasPrice: { cashPrice: { amount: 150 }, pointsPrice: { amount: 3000 } },
  tag: "sale",
};

test("renders product details", () => {
  render(<ProductCard product={mockProduct} />);
  expect(screen.getByText("Sample Product")).toBeInTheDocument();
  expect(screen.getByText("Sample Description")).toBeInTheDocument();
  expect(screen.getByText("$100 / 2000 pts")).toBeInTheDocument();
  expect(screen.getByText("Was: $150 / 3000 pts")).toBeInTheDocument();
});
