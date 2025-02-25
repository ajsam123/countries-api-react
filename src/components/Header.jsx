/* eslint-disable react/prop-types */
//Header Component
// import { useEffect, } from "react";
const Header = ({ darkMode, toggleTheme }) => {
  return (
    <div className="bg-white flex justify-between dark:bg-dark-blue p-6 px-8">
      <span className="font-bold text-4 lg:text-[20px]">
        Where in the world?
      </span>
      <figure>
        {/* <img src="" alt="" /> */}
        <button
          onClick={toggleTheme}
          className="font-bold flex gap-2 hover:cursor-pointer"
        >
          <img
            src={darkMode ? "/images/lightmode.svg" : "/images/darkmode.svg"}
            alt=""
          />
          <span className="text-4 lg:text-xl">
            {darkMode ? "Light mode" : "Dark mode"}
          </span>
        </button>
      </figure>
    </div>
  );
};

export default Header;
