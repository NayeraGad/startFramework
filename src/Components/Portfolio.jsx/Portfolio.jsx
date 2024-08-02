import { useEffect, useState } from "react";
import { FaPlus, FaStar } from "react-icons/fa";

import port1 from "../../assets/port1.png";
import port2 from "../../assets/port2.png";
import port3 from "../../assets/port3.png";

const images = [
  { src: port1, id: "port1" },
  { src: port2, id: "port2" },
  { src: port3, id: "port3" },
];

export default function Portfolio() {
  const [selectedImageId, setSelectedImageId] = useState(null);

  useEffect(() => {
    document.title = "Portfolio";
  }, []);

  const handleClick = (index) => {
    setSelectedImageId(index);
  };

  const handleCloseModal = () => {
    setSelectedImageId(null);
  };

  const selectedImageSrc =
    selectedImageId !== null ? images[selectedImageId].src : null;

  return (
    <>
      <div className="min-h-screen flex flex-col justify-center items-center py-24">
        <h1 className="uppercase mb-4 mt-6">portfolio component</h1>
        <div className="mb-4 flex justify-center items-center before:block before:w-20 before:h-1 before:bg-black after:block after:w-20 after:h-1 after:bg-black">
          <FaStar className="mx-4" />
        </div>

        <div className="cards container">
          <div className="grid px-3 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {images.map((image, index) => (
              <div
                key={image.id}
                className="relative overflow-hidden cursor-pointer rounded-lg group"
                onClick={() => handleClick(index)}
              >
                <img src={image.src} alt={image.id} className="w-full" />

                <div
                  className="absolute top-0 left-0 w-full h-full flex justify-center items-center
                       bg-teal-500 bg-opacity-90 text-white opacity-0 group-hover:opacity-100
                       transition-opacity duration-300"
                >
                  <FaPlus className=" text-8xl" />
                </div>
              </div>
            ))}
            
            {images.map((image, index) => (
              <div
                key={image.id}
                className="relative overflow-hidden cursor-pointer rounded-lg group"
                onClick={() => handleClick(index)}
              >
                <img src={image.src} alt={image.id} className="w-full" />

                <div
                  className="absolute top-0 left-0 w-full h-full flex justify-center items-center
                       bg-teal-500 bg-opacity-90 text-white opacity-0 group-hover:opacity-100
                       transition-opacity duration-300"
                >
                  <FaPlus className=" text-8xl" />
                </div>
              </div>
            ))}
          </div>
        </div>

        {selectedImageSrc && (
          <div
            className="fixed top-0 left-0 w-full h-full z-50 flex justify-center items-center bg-blue-600 bg-opacity-25"
            onClick={handleCloseModal}
          >
            <div
              className="relative max-w-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <img src={selectedImageSrc} alt="" className="w-full" />
            </div>
          </div>
        )}
      </div>
    </>
  );
}
