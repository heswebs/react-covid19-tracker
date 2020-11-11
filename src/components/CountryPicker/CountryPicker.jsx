import React, { useState, useEffect } from 'react';

import { fetchCountries } from '../../api';

import './CountryPicker.css';

const Countries = ({ handleCountryChange }) => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    const fetchAPI = async () => {
      setCountries(await fetchCountries());
    };

    fetchAPI();
  }, []);

  return (
      <section className="picker">
            <select className="picker__select" onChange={(e) => handleCountryChange(e.target.value)}>
            <option value="">Global</option>
            {countries.map((country, i) => <option key={i} value={country}>{country}</option>)}
            </select> 
        </section>
          );
};

export default Countries;