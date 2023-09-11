const Country = ({country}) => {
  console.log(country);
  return (
    <div className="border border-gray-300 rounded-lg shadow-lg p-8 ">
      <img className="h-[150px] mb-4" src={country.flags.png} alt="National Flag" />
      <h2 className="text-xl font-medium">Name: {country.name.common}</h2>
    </div>
  );
};

export default Country;