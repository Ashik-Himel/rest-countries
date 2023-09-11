import { useEffect } from "react";
import { useState } from "react";
import Country from "./Country";

const Countries = ({handleAddVisited, handleRemoveVisited}) => {
  const [countries, setCountries] = useState([]);
  useEffect(() => {
    fetch('https://restcountries.com/v3.1/all')
    .then(res => res.json())
    .then(data => setCountries(data))
  }, [])

  return (
    <section className="mt-8">
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {
          countries.map(country => <Country key={country.name.common} country={country} handleAddVisited={handleAddVisited} handleRemoveVisited={handleRemoveVisited}></Country>)
        }
      </div>
      </div>
    </section>
  );
};

export default Countries;