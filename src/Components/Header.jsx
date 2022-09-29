import { useState, useEffect } from "react";
import { Link } from "react-scroll";

import Logo from "../assets/img/logo.png";

const Header = () => {
  const [scrollBg, setScrollBg] = useState(false);
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  const navigations = [
    { name: "Home", link: "home" },
    { name: "About", link: "about" },
    { name: "Portfolio", link: "portfolio" },
    { name: "Services", link: "services" },
    { name: "Contact", link: "contact" },
  ];

  useEffect(() => {
    window.addEventListener("scroll", () => {
      return window.scrollY > 50 ? setScrollBg(true) : setScrollBg(false);
    });
  }, []);

  return (
    <header>
      <nav
        className={`${
          scrollBg
            ? "bg-light-primary dark:bg-dark-primary"
            : "bg-white dark:bg-gray-900"
        } w-full fixed z-20 border-gray-200 px-2 sm:px-4 py-2.5 rounded`}
      >
        <div className="container flex flex-wrap justify-between items-center mx-auto">
          <a href="https://laraveller.com/" className="flex items-center">
            <img src={Logo} className="mr-3 h-6 sm:h-9" alt="Laraveller Logo" />
            <span
              className="
              self-center
              text-xl
              font-semibold
              whitespace-nowrap
              dark:text-white
            "
            >
              Laraveller
            </span>
          </a>
          <button
            onClick={() => setMobileNavOpen(!mobileNavOpen)}
            type="button"
            className="
            inline-flex
            items-center
            p-2
            ml-3
            text-sm text-gray-500
            rounded-lg
            md:hidden
            hover:bg-gray-100
            focus:outline-none focus:ring-2 focus:ring-gray-200
            dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600
          "
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-6 h-6"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clipRule="evenodd"
              ></path>
            </svg>
          </button>
          <div
            className={`${
              mobileNavOpen ? "" : "hidden"
            } w-full md:block md:w-auto`}
          >
            <ul
              className="
              flex flex-col
              p-4
              mt-4
              rounded-lg
              border border-gray-100
              md:flex-row
              md:space-x-8
              md:mt-0
              md:text-sm
              md:font-medium
              md:border-0
              dark:border-gray-700
            "
            >
              {navigations.map((nav, index) => {
                return (
                  <li
                    key={index}
                    className="cursor-pointer text-light-tail-500 dark:text-dark-navy-100 hover:text-light-tail-100 dark:hover:text-dark-navy-500"
                  >
                    <Link
                      to={nav.link}
                      activeClass="active"
                      spy={true}
                      smooth={true}
                      duration={500}
                      offset={-70}
                      className="transition-all duration-300"
                    >
                      {nav.name}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};
export default Header;
