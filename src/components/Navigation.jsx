/* eslint-disable react/prop-types */
// import { useState } from "react";
// import { useState } from "react";

const Navigation = ({ region, setRegion, searchCountry, setSearchCountry }) => {
  return (
    <div className="px-8  flex flex-col md:flex lg:flex justify-between w-full gap-4">
      <div>
        <input
          type="text"
          className="bg-white dark:bg-dark-blue p-4 rounded-[10px] focus:border-none  w-full max-w-80  "
          placeholder="Search for a country"
          value={searchCountry}
          onChange={(e) => setSearchCountry(e.target.value)}
        />
      </div>
      <div>
        <select
          value={region}
          onChange={(e) => setRegion(e.target.value)}
          className="w-44 h-8 rounded-[5px] px-4 pr-8 appearance-none focus:border-none bg-white dark:bg-dark-blue "
        >
          <option value="filter">Filter by region</option>
          <option value="Africa">Africa</option>
          <option value="Americas">America</option>
          <option value="Asia">Asia</option>
          <option value="Europe">Europe</option>
          <option value="Oceania">Oceania</option>
        </select>
      </div>
    </div>
  );
};

export default Navigation;
