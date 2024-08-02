import { NavLink } from "react-router-dom";

import "./Navbar.css";
import { useEffect, useState } from "react";

const navLinks = ["about", "portfolio", "contact"];

export default function Navbar() {
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, []);

  const handleScroll = () => {
    window.scrollY > 80 ? setScroll(true) : setScroll(false);
  };

  return (
    <>
      <nav
        className={`bg-main text-white fixed w-full z-50 p-6 transition-[padding] duration-500 ${
          scroll ? "py-2" : ""
        }`}
      >
        <div className="container flex flex-wrap items-center justify-between">
          <NavLink to="" className="flex items-center">
            <span className="uppercase text-2xl lg:text-3xl font-bold">
              Start Framework
            </span>
          </NavLink>

          <button
            data-collapse-toggle="navbar-default"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-default"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>

          <div className="hidden w-full lg:block lg:w-auto" id="navbar-default">
            <ul className="font-medium flex flex-col lg:flex-row">
              {navLinks.map((link) => (
                <li key={link} className="uppercase mt-4 lg:mt-0 mr-4">
                  <NavLink to={link} className="p-2">
                    {link}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
