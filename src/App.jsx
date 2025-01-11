import React from "react";
import withDataFetching from "./hoc/withDataFetching";
import Carousel from "./components/Carousel";

const URL = "/api/data.json";

const CarouselWithData = withDataFetching(Carousel, URL);

const App = () => {
  return (
    <div className="app bg-gray-100 min-h-screen p-8">
      <h1 className="text-3xl font-bold text-center mb-6">Qantas Wine Carousel</h1>
      <CarouselWithData />
    </div>
  );
};

export default App;
