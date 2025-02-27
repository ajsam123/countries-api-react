import { Routes, Route } from "react-router-dom";
import CountryApp from "./components/CountryApp";
import CountryDetail from "./components/CountryDetail";
import { useState, useEffect } from "react";

const App = () => {
  const [countries, setCountries] = useState([]);
  let storedTheme;
  storedTheme = localStorage.getItem("theme") || "light";
  const [darkMode, setDarkMode] = useState(storedTheme === "dark");
  function Loader() {
    return (
      <div className="w-6 h-6 border-3 border-black rounded-full animate-spin border-r-transparent place-self-center dark:border-white dark:border-r-transparent"></div>
    );
  }

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  let sortCountries = countries;

  console.log(countries);
  return (
    <main className={darkMode ? "dark" : ""}>
      <Routes>
        <Route
          path="/"
          element={
            <CountryApp
              countries={countries}
              setCountries={setCountries}
              sortCountries={sortCountries}
              darkMode={darkMode}
              setDarkMode={setDarkMode}
              toggleTheme={toggleTheme}
              Loader={Loader}
            />
          }
        />
        <Route
          path="/countryDetail/:id"
          element={
            <CountryDetail
              countries={sortCountries}
              setCountries={setCountries}
              darkMode={darkMode}
              toggleTheme={toggleTheme}
              Loader={Loader}
            />
          }
        />
      </Routes>
    </main>
  );
};

export default App;
