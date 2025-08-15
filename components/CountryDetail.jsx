import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import countriesData from '../countriesData.js';

export default function CountryDetail() {
  const { name } = useParams();
  const navigate = useNavigate();

  // Find the country by name (case-insensitive)
  const country = countriesData.find(
    c => c.name.common.toLowerCase() === decodeURIComponent(name).toLowerCase()
  );

  if (!country) {
    return (
      <div className="country-detail">
        <button onClick={() => navigate('/')} className="back-button">
          <i className="fa-solid fa-arrow-left"></i>
          &nbsp;&nbsp;Back
        </button>
        <div className="error-message">
          <h2>Country not found</h2>
          <p>The country "{decodeURIComponent(name)}" could not be found.</p>
        </div>
      </div>
    );
  }

  const formatNumber = num => {
    return num.toLocaleString('en-IN');
  };

  const getBorderCountries = () => {
    if (!country.borders || country.borders.length === 0) return [];
    return country.borders
      .map(borderCode => {
        const borderCountry = countriesData.find(c => c.cca3 === borderCode);
        return borderCountry ? borderCountry.name.common : borderCode;
      })
      .filter(Boolean);
  };

  const borderCountries = getBorderCountries();

  return (
    <div className="country-detail">
      <button onClick={() => navigate('/')} className="back-button">
        <i className="fa-solid fa-arrow-left"></i>
        &nbsp;&nbsp;Back
      </button>

      <div className="country-detail-content">
        <div className="country-flag">
          <img src={country.flags.svg} alt={`${country.name.common} flag`} />
        </div>

        <div className="country-info">
          <h1>{country.name.common}</h1>

          <div className="country-details-grid">
            <div className="details-left">
              <p>
                <strong>Native Name:</strong> {country.name.official}
              </p>
              <p>
                <strong>Population:</strong> {formatNumber(country.population)}
              </p>
              <p>
                <strong>Region:</strong> {country.region}
              </p>
              <p>
                <strong>Sub Region:</strong> {country.subregion || 'N/A'}
              </p>
              <p>
                <strong>Capital:</strong> {country.capital?.join(', ') || 'N/A'}
              </p>
            </div>

            <div className="details-right">
              <p>
                <strong>Top Level Domain:</strong> {country.tld?.join(', ') || 'N/A'}
              </p>
              <p>
                <strong>Currencies:</strong>{' '}
                {country.currencies
                  ? Object.values(country.currencies)
                      .map(curr => curr.name)
                      .join(', ')
                  : 'N/A'}
              </p>
              <p>
                <strong>Languages:</strong>{' '}
                {country.languages ? Object.values(country.languages).join(', ') : 'N/A'}
              </p>
            </div>
          </div>

          {borderCountries.length > 0 && (
            <div className="border-countries">
              <h3>Border Countries:</h3>
              <div className="border-buttons">
                {borderCountries.map(borderCountry => (
                  <button
                    key={borderCountry}
                    onClick={() => navigate(`/country/${encodeURIComponent(borderCountry)}`)}
                    className="border-button"
                  >
                    {borderCountry}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
