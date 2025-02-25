/* eslint-disable react/prop-types */
import Header from "./Header";
// import Data from "../data.json";
import { Link, useParams } from "react-router-dom";
// import Country from "./Country";
// import { useState } from "react";

const CountryDetail = ({ countries = [], darkMode, toggleTheme }) => {
  console.log(countries);
  const { id } = useParams();
  const country = countries.find((c) => c.cca3 === id);
  if (!country) {
    return (
      <p className="text-center text-2xl dark:bg-very-dark-blue min-h-screen">
        Country not found!
      </p>
    );
  }

  return (
    <div
      className={`flex flex-col gap-12 min-h-screen 
    ${
      darkMode
        ? "bg-very-dark-blue text-white"
        : "bg-light-dark-gray text-black"
    }`}
    >
      <Header darkMode={darkMode} toggleTheme={toggleTheme} />
      <Link to="/">
        <button className="flex dark:bg-dark-blue mx-8 max-w-[120px]  gap-2 px-4 p-1 rounded-[3px] shadow-2xl shadow-black hover:shadow-none hover:cursor-pointer dark:hover:border dark:hover:border-white hover:border hover:border-dark-gray">
          <img src="/images/arrowback.svg" alt="" />
          <span className="text-center">Back</span>
        </button>
      </Link>
      <div
        key={country.cca3}
        className="px-8 flex flex-col md:grid lg:grid grid-cols-2 items-center gap-8"
      >
        <figure>
          <img
            className="w-full max-w-[550px]"
            src={country?.flags?.svg || countries?.flags?.png}
            alt=""
          />
        </figure>
        <div>
          <div>
            <h1 className="text-3xl font-bold mb-4">{country?.name?.common}</h1>
            <div className="flex flex-row flex-wrap gap-2">
              <div className="flex flex-col gap-2">
                {/* <span>Native Name: {getOfficialNativeName(country)}</span> */}
                <span>Population: {country.population.toLocaleString()}</span>
                <span>Region: {country.region}</span>
                <span>Sub Region: {country.subregion}</span>
                <span>Capital: {country.capital}</span>
              </div>
              <div className="flex flex-col gap-2">
                <span>Top Level Domain: {country.tld}</span>
                {/* <span>Currencies: {country.currencies.name}</span> */}
                {/* <span>Languages: {{ ...country.languages }}</span> */}
              </div>
            </div>
          </div>
          <div className="mt-10">
            <span>
              Border Countries:{" "}
              {country.borders ? country.borders.join(" ") : "None"}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

const getOfficialNativeName = (country) => {
  const nativeNames = country.name?.nativeName;
  if (!nativeNames) return "No native name available";

  // Get the first native language key
  const firstLangKey = Object.keys(nativeNames)[0];

  return nativeNames[firstLangKey]?.official || "No official native name";
};

export default CountryDetail;
