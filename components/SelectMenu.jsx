import React from 'react'

export default function SelectMenu({ onRegionChange, selectedRegion }) {
  const handleChange = (e) => {
    onRegionChange(e.target.value)
  }

  return (
    <select 
      className="filter-by-region" 
      value={selectedRegion}
      onChange={handleChange}
    >
      <option value="">Filter by Region</option>
      <option value="Africa">Africa</option>
      <option value="Americas">Americas</option>
      <option value="Asia">Asia</option>
      <option value="Europe">Europe</option>
      <option value="Oceania">Oceania</option>
    </select>
  )
}
