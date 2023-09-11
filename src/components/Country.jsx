import { useState } from "react";

const Country = ({country}) => {
  const {name, flags, area, population} = country;
  console.log(country);
  const [isVisited, setIsVisited] = useState(false);

  const handleClick = () => {
    setIsVisited(!isVisited);
  }

  const cardContainer = {
    backgroundColor: '#4A07DA',
    color: 'white',
  }

  return (
    <div className="border border-gray-300 rounded-lg shadow-lg p-8" style={isVisited ? cardContainer : null}>
      <img className="h-[150px] mb-4" src={flags.png} alt="National Flag" />
      <h2 className="text-xl font-medium mb-2">Name: {name.common}</h2>
      <div className="mb-3" style={isVisited ? {color: 'white'} : {color: 'gray'}}>
        <p>Area: {area} S. KM</p>
        <p>Population: {population}</p>
      </div>
      <p className="mb-4 text-primary font-bold" style={isVisited ? {color: 'white'} : null}>{isVisited ? 'Yes! I visited this country!' : 'I wish I will go to this country!'}</p>
      <a href="#/" className="btn btn-primary text-white normal-case text-base" style={isVisited ? {backgroundColor: 'white', color: '#4A07DA'} : null} onClick={handleClick}>{isVisited ? 'Visited': 'Going'}</a>
    </div>
  );
};

export default Country;