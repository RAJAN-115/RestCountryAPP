import { useEffect, useState } from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import CountriesList from './components/CountriesList';
import CountryDetail from './components/CountryDetail';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import SelectMenu from './components/SelectMenu';
import countriesData from './countriesData.js';

import './App.css';

const App = () => {
  const [countries, setCountries] = useState(countriesData);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedRegion, setSelectedRegion] = useState('');
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Dark mode toggle
  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }
  }, [isDarkMode]);

  // Filter countries based on search and region
  useEffect(() => {
    let filteredCountries = countriesData;

    // Filter by search term (trim whitespace and make case-insensitive)
    if (searchTerm.trim()) {
      const searchLower = searchTerm.trim().toLowerCase();
      filteredCountries = filteredCountries.filter(
        country =>
          country.name.common.toLowerCase().includes(searchLower) ||
          country.name.official.toLowerCase().includes(searchLower)
      );
    }

    // Filter by region
    if (selectedRegion) {
      filteredCountries = filteredCountries.filter(country => country.region === selectedRegion);
    }

    setCountries(filteredCountries);
  }, [searchTerm, selectedRegion]);

  const handleSearchChange = value => {
    setSearchTerm(value);
  };

  const handleRegionChange = value => {
    setSelectedRegion(value);
  };

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <Router>
      <div className="app">
        <Header onToggleDarkMode={toggleDarkMode} isDarkMode={isDarkMode} />

        <Routes>
          <Route
            path="/"
            element={
              <main>
                <div className="search-filter-container">
                  <SearchBar onSearchChange={handleSearchChange} searchTerm={searchTerm} />
                  <SelectMenu onRegionChange={handleRegionChange} selectedRegion={selectedRegion} />
                </div>
                <CountriesList countries={countries} />
              </main>
            }
          />

          <Route
            path="/country/:name"
            element={
              <main>
                <CountryDetail />
              </main>
            }
          />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
