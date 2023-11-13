import React from "react";

import { BsFillMoonStarsFill } from "react-icons/bs";

const Navbar = ({ darkMode, setDarkMode, scroll }) => {
  return (
    <nav className="py-14 mb-12 flex justify-between dark:text-white">
      <h1 className="text-4xl hover:text-red-800 font-lucyTheCat px-6 py-2 ">
        {" "}
        <a href="#"> Clay </a>{" "}
      </h1>
      <nav className="hidden lg:block md:block">
        <ul className="flex items-center justify-center flex-row px-2 lg:gap-4 md:gap-4">
          <li className="hover:text-red-800">
            {" "}
            <a href="#about" style={scroll}>
              About
            </a>{" "}
          </li>
          <li className="hover:text-red-800">
            {" "}
            <a href="#skills" style={scroll}>
              Skills
            </a>{" "}
          </li>
          <li className="hover:text-red-800">
            {" "}
            <a href="#projects" style={scroll}>
              Projects
            </a>{" "}
          </li>
          <li className="hover:text-red-800">
            {" "}
            <a href="#contact" style={scroll}>
              Contact
            </a>{" "}
          </li>
        </ul>
      </nav>

      <ul className="flex items-center justify-end">
        <li>
          {" "}
          <BsFillMoonStarsFill
            onClick={() => setDarkMode(!darkMode)}
            className="cursor-pointer text-2xl hover:text-red-800 dark:text-gray-200 "
          />{" "}
        </li>
        <li>
          {" "}
          <a
            href="https://drive.google.com/file/d/1VoumIAA5ZWDu0zV31e_tTmvY3GmF9BKL/view?usp=sharing"
            alt="alt text"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="bg-gradient-to-r from-red-800 to-red-500 hover:from-red-400 hover:to-yellow-500 px-6 py-2 text-white rounded-xl ml-8">
              Resume{" "}
            </button>{" "}
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
