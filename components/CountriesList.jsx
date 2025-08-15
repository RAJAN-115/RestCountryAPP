import React from 'react';
import CountryCard from './CountryCard';

export default function CountriesList({ countries }) {
  return (
    <div className="countries-container">
      {countries.map(country => {
        return (
          <CountryCard
            key={country.name.common}
            name={country.name.common}
            flag={country.flags.svg}
            population={country.population}
            region={country.region}
            capital={country.capital?.[0]}
          />
        );
      })}
    </div>
  );
}
