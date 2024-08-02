import { useEffect } from "react";
import avatar from "../../assets/avataaars.svg";
import { FaStar } from "react-icons/fa";

export default function Home() {
  useEffect(() => {
    document.title = "Home";
  }, []);

  return (
    <>
      <div className="min-h-screen flex flex-col justify-center items-center bg-teal-500 text-white">
        <div className="w-64 mb-4">
          <img src={avatar} alt="" className=" w-full" />
        </div>
        <h1 className="uppercase mb-4">Start Framework</h1>
        <div className="mb-4 flex justify-center items-center before:block before:w-20 before:h-1 before:bg-white after:block after:w-20 after:h-1 after:bg-white">
          <FaStar className="mx-4" />
        </div>
        <p>Graphic Artist - Web Designer - Illustrator</p>
      </div>
    </>
  );
}
