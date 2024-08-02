import { useEffect } from "react";
import { FaStar } from "react-icons/fa";

export default function About() {
  useEffect(() => {
    document.title = "About";
  }, []);

  return (
    <>
      <div className="min-h-screen flex flex-col justify-center items-center bg-teal-500 ">
        <div className="container text-white">
          <h1 className="uppercase text-center mb-4">about component</h1>

          <div className="mb-4 flex justify-center items-center before:block before:w-20 before:h-1 before:bg-white after:block after:w-20 after:h-1 after:bg-white">
            <FaStar className="mx-4" />
          </div>

          <div className="flex flex-col md:flex-row px-12">
            <div className="md:w-6/12 mb-4 md:pl-12 md:pr-3">
              <p>
                Freelancer is a free bootstrap theme created by Route. The
                download includes the complete source files including HTML, CSS,
                and JavaScript as well as optional SASS stylesheets for easy
                customization.
              </p>
            </div>

            <div className="md:w-6/12 md:pl-12 md:pr-3">
              <p>
                Freelancer is a free bootstrap theme created by Route. The
                download includes the complete source files including HTML, CSS,
                and JavaScript as well as optional SASS stylesheets for easy
                customization.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
