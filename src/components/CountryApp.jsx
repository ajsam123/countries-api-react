/* eslint-disable react/prop-types */
//App.jsx

// import { useState } from "react";
// import reactLogo from "./assets/react.svg544";
// import viteLogo from "/vite.svg";
// import "./App.css";
// import { Route, Routes } from "react-router";

import Header from "./Header";
import Navigation from "./Navigation";
import Country from "./Country";
import { useEffect, useState } from "react";
// import CountryDetail from "./CountryDetail";
// import { Link } from "react-router";

// import CountryDetail from "./components/CountryDetail";

function CountryApp({
  countries,
  setCountries,
  sortCountries,
  darkMode,
  setDarkMode,
  toggleTheme,
}) {
  // onfocus(searchCountry);
  const [isLoading, setIsLoading] = useState(false);
  const [region, setRegion] = useState("filter");
  const [searchCountry, setSearchCountry] = useState("");

  if (region !== "filter")
    sortCountries = sortCountries.filter(
      (country) => country.region === region
    );

  if (searchCountry) {
    sortCountries = sortCountries.filter((country) =>
      country.name.common.toLowerCase().includes(searchCountry.toLowerCase())
    );
  }

  // const [error, setError] = useState("");
  useEffect(() => {
    async function fetchMovies() {
      try {
        setIsLoading(true);
        const res = await fetch("https://restcountries.com/v3.1/all");

        if (!res.ok)
          throw new Error("Something went wrong with fetching countries");

        const data = await res.json();
        setCountries(data);
        setIsLoading(false);
      } catch (err) {
        console.error(err.message);
      }
    }
    fetchMovies();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  console.log(countries);

  return (
    <main className=" bg-light-dark-gray dark:bg-very-dark-blue min-h-screen flex flex-col gap-10   text-very-dark-blue dark:text-white">
      {/* <CountryDetail /> */}

      <Header
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        toggleTheme={toggleTheme}
      />
      <Navigation
        countries={countries}
        region={region}
        setRegion={setRegion}
        searchCountry={searchCountry}
        setSearchCountry={setSearchCountry}
      />
      {isLoading ? (
        <Loader />
      ) : (
        // <Link to="/countryDetail">
        <Country countries={sortCountries} searchCountry={searchCountry} />
        // </Link>
      )}
    </main>
  );
}

export default CountryApp;

function Loader() {
  return (
    <div className="w-6 h-6 border-3 border-black rounded-full animate-spin border-r-transparent place-self-center dark:border-white dark:border-r-transparent"></div>
  );
}
