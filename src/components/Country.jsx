/* eslint-disable react/prop-types */
//Country component
// import Data from "../data.json";

// import { useState } from "react";
import { Link } from "react-router";

const Country = ({ countries = [] }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-9">
      {countries.map((country, index) => (
        <div
          key={index}
          className="flex flex-col bg-white dark:bg-dark-blue  rounded-[5px] mx-8 w-full max-w-[250px] overflow-hidden h-full max-h-[300px] "
        >
          <Link to={`/countryDetail/${country.cca3}`}>
            <img
              className="w-full h-full max-h-32 object-cover"
              src={country.flags.svg}
            />
            <div className="flex flex-col pl-6 p-4">
              <h1 className="font-bold mb-2 text-[18px]">
                {country.name.common}
              </h1>
              <span className="">
                Population: {country.population.toLocaleString}
                <span className="text-dark-gray">
                  {country.population.toLocaleString()}
                </span>
              </span>
              <span>
                Region: <span className="text-dark-gray">{country.region}</span>
              </span>
              <span>
                Capital:{" "}
                <span className="text-dark-gray">{country.capital}</span>
              </span>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Country;
