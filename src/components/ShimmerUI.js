import React from "react";

function ShimmerUI() {
  return (
    <div>
      {" "}
      <div className="flex justify-center items-center h-screen bg-gray-100">
        <button
          className="text-4xl text-gray-600 bg-white rounded-full shadow-md p-4 hover:bg-gray-200"
          disabled
        >
          {"<"}
        </button>
        <div className="mx-8 flex justify-center items-center">
          <div className="w-[80vw] h-[80vh] bg-gray-200 rounded-lg shadow-lg relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 animate-shimmer"></div>
          </div>
        </div>
        <button
          className="text-4xl text-gray-600 bg-white rounded-full shadow-md p-4 hover:bg-gray-200"
          disabled
        >
          {">"}
        </button>
      </div>
    </div>
  );
}

export default ShimmerUI;
