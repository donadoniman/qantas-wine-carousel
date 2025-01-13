// withLoadingAndError.jsx
import React from "react";
import Loader from "../components/Loader";

const withLoadingAndError = (WrappedComponent) => {
  return ({ loading, error, ...props }) => {
    if (loading) {
      return <Loader />;
    }

    if (error) {
      return (
        <div className="flex flex-col items-center justify-center min-h-screen">
          <div className="text-red-500 text-2xl font-bold mb-4">Error</div>
          <p className="text-gray-600 text-lg">{error}</p>
          <button
            className="mt-4 px-4 py-2 bg-blue-500 text-white font-semibold rounded shadow hover:bg-blue-600"
            onClick={() => window.location.reload()}
          >
            Retry
          </button>
        </div>
      );
    }

    return <WrappedComponent {...props} />;
  };
};

export default withLoadingAndError;
