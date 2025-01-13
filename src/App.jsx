import React from "react";
import withDataFetching from "./hoc/withDataFetching";
import withLoadingAndError from "./hoc/withLoadingAndError";
import Carousel from "./components/Carousel";

const DATA_URL = "/api/data.json";

// Wrap Carousel with both HOCs
const EnhancedCarousel = withDataFetching(
  withLoadingAndError(Carousel),
  DATA_URL
);

const App = () => {
  return (
    <div className="app bg-gray-100 min-h-screen p-8">
      <h1 className="text-3xl font-bold text-center mb-6">Qantas Wine Carousel</h1>
      <EnhancedCarousel />
    </div>
  );
};

export default App;
