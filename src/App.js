import { useEffect, useState } from "react";
import ShimmerUI from "./components/ShimmerUI";
import { IMAGE_API_URL } from "./utils/constants";

function App() {
  const [images, setImages] = useState([]);
  const [index, setIndex] = useState(0);
  const [loading, setLoading] = useState(false);

  async function fetchImages() {
    setLoading(true);
    const data = await fetch(IMAGE_API_URL);
    const json = await data.json();
    const resultData = json.data.children;
    const imagesList = resultData
      .filter((image) => image.data.url_overridden_by_dest.includes(".jpg"))
      .map((image) => image.data.url_overridden_by_dest);
    setImages(imagesList);
    setLoading(false);
  }

  function handleLeftClick() {
    if (index === 0) setIndex(images.length - 1);
    else setIndex(index - 1);
  }
  function handleRightClick() {
    if (index === images.length - 1) setIndex(0);
    else setIndex(index + 1);
  }

  useEffect(() => {
    fetchImages();
  }, []);

  useEffect(() => {
    const intervalTimeId = setInterval(() => {
      handleRightClick();
    }, 3000);

    return () => {
      clearInterval(intervalTimeId);
    };
  }, [index]);

  return (
    <div>
      {loading ? (
        <div>
          <ShimmerUI />
        </div>
      ) : (
        <div className="flex justify-center items-center h-screen bg-gray-100">
          <button
            className="text-4xl text-gray-600 bg-white rounded-full shadow-md p-4 hover:bg-gray-200"
            onClick={handleLeftClick}
          >
            {"<"}
          </button>
          <div className="mx-8 flex justify-center items-center">
            <img
              className="max-h-[80vh] max-w-[80vw] object-contain rounded-lg shadow-lg"
              src={images[index]}
              alt="Not Found"
            />
          </div>
          <button
            className="text-4xl text-gray-600 bg-white rounded-full shadow-md p-4 hover:bg-gray-200"
            onClick={handleRightClick}
          >
            {">"}
          </button>
        </div>
      )}
    </div>
  );
}

export default App;
