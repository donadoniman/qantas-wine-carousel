import React from "react";

const Loader = () => {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-blue-500"></div>
      <p className="text-blue-500 font-semibold text-lg ml-4">Loading...</p>
    </div>
  );
};

export default Loader;
