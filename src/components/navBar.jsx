import React from "react";
import { BsFillMoonStarsFill } from "react-icons/bs";

const NavItem = ({ href, text, scroll, onClick }) => (
  <li className="hover:text-red-800">
    <a href={href} style={scroll} onClick={onClick}>
      {text}
    </a>
  </li>
);

const Navbar = ({ darkMode, setDarkMode, scroll }) => {
  return (
    <nav className="py-14 mb-12 flex justify-between dark:text-white">
      <h1 className="text-4xl hover:text-red-800 font-lucyTheCat px-6 py-2">
        <a href="#">Clay</a>
      </h1>

      <nav className="hidden lg:block md:block">
        <ul className="flex items-center justify-center flex-row px-2 lg:gap-4 md:gap-4">
          <NavItem href="#about" text="About" scroll={scroll} />
          <NavItem href="#skills" text="Skills" scroll={scroll} />
          <NavItem href="#projects" text="Projects" scroll={scroll} />
          <NavItem href="#contact" text="Contact" scroll={scroll} />
        </ul>
      </nav>

      <ul className="flex items-center justify-end space-x-4">
        <li>
          <BsFillMoonStarsFill
            onClick={() => setDarkMode(!darkMode)}
            className="cursor-pointer text-2xl hover:text-red-800 dark:text-gray-200"
          />
        </li>
        <li>
          <a
            href="https://drive.google.com/file/d/1peWsYTrbXoMGe0xcMaIxBrdoHCx8niSk/view?usp=sharing"
            alt="Resume"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="bg-gradient-to-r from-red-800 to-red-500 hover:from-red-400 hover:to-yellow-500 px-6 py-2 text-white rounded-xl">
              Resume
            </button>
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
