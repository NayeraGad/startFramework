import { useEffect } from "react";
import { FaStar } from "react-icons/fa";

const inputs = [
  { id: "userName", type: "text", name: "User Name" },
  { id: "userAge", type: "number", name: "User Age" },
  { id: "userEmail", type: "email", name: "User Email" },
  { id: "userPassword", type: "password", name: "User Password" },
];

export default function Contact() {
  useEffect(() => {
    document.title = "Contact";
  }, []);

  return (
    <>
      <div className="min-h-screen flex flex-col justify-center">
        <div className="container">
          <h1 className="uppercase mb-4 text-center">contact section</h1>

          <div className="mb-4 flex justify-center items-center before:block before:w-20 before:h-1 before:bg-black after:block after:w-20 after:h-1 after:bg-black">
            <FaStar className="mx-4" />
          </div>

          <form className="p-4">
            {inputs.map((input) => (
              <div className="relative overflow-hidden w-full mt-5" key={input.id}>
                <input
                  type={input.type}
                  name={input.id}
                  id={input.id}
                  className="peer mt-2 px-3 py-4 w-full text-gray-900 border-b border-gray-300 rounded-md appearance-none dark:text-white focus:outline-none focus:ring-0"
                  placeholder={input.name}
                  required
                />
                <label
                  htmlFor={input.id}
                  className="absolute top-0 left-0 text-teal-500
                   transition-[top] duration-700 transform peer-placeholder-shown:top-full
                   peer-placeholder-shown:invisible
                    peer-focus:top-0
                   "
                >
                  {input.name}
                </label>
              </div>
            ))}

            <button className="mt-6 px-3 py-2 bg-teal-500 text-white rounded-md">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
