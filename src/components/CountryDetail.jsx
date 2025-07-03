/* eslint-disable react/prop-types */
import Header from "./Header";
// import Data from "../data.json";
import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
// import Country from "./Country";
// import { useState } from "react";

const CountryDetail = ({ darkMode, toggleTheme, Loader }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [countriesEach, setCountriesEach] = useState([]);
  // const setIsloading = false;
  const { id } = useParams();
  const country = countriesEach.find((c) => c.cca3 === id) || null;
  useEffect(() => {
    async function fetchCountries() {
      try {
        setIsLoading(true);
        const res = await fetch(
          `https://restcountries.com/v3.1/alpha/${id}?fields=cca3,name,flags,population,region,subregion,capital,tld,borders`
        );

        console.log(res);

        if (!res.ok)
          throw new Error("Something went wrong with fetching countries");

        const data = await res.json();
        setCountriesEach(Array.isArray(data) ? data : [data]);
        setIsLoading(false);
      } catch (err) {
        console.error(err.message);
      }
    }
    console.log("FETCHING");
    fetchCountries();
  }, [id]);
  console.log(countriesEach);

  if (isLoading) {
    return (
      <div className="bg-light-dark-gray min-h-screen dark:bg-very-dark-blue flex flex-col gap-8 text-black dark:text-white">
        <Header />
        <Loader />
      </div>
    );
  }

  if (!isLoading && !country) {
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
            src={country?.flags?.svg || country?.flags?.png}
            alt=""
          />
        </figure>
        <div>
          <div>
            <h1 className="text-3xl font-bold mb-4">{country?.name?.common}</h1>
            <div className="flex flex-row flex-wrap gap-2">
              <div className="flex flex-col gap-2">
                {/* <span>Native Name: {getOfficialNativeName(country)}</span> */}
                <span>Population: {country?.population?.toLocaleString()}</span>
                <span>Region: {country?.region}</span>
                <span>Sub Region: {country?.subregion}</span>
                <span>Capital: {country?.capital}</span>
              </div>
              <div className="flex flex-col gap-2">
                <span>Top Level Domain: {country?.tld}</span>
                {/* <span>Currencies: {country.currencies.name}</span> */}
                {/* <span>Languages: {{ ...country.languages }}</span> */}
              </div>
            </div>
          </div>
          <div className="mt-10">
            <span>
              Border Countries:{" "}
              {country?.borders ? country?.borders.join(" ") : "None"}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

// const getOfficialNativeName = (country) => {
//   const nativeNames = country.name?.nativeName;
//   if (!nativeNames) return "No native name available";

//   // Get the first native language key
//   const firstLangKey = Object.keys(nativeNames)[0];

//   return nativeNames[firstLangKey]?.official || "No official native name";
// };

export default CountryDetail;
