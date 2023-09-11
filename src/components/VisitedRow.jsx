const VisitedRow = ({visitedCountry}) => {
  return (
    <tr>
      <td><span>{visitedCountry.name}</span></td>
      <td><img className="h-[40px]" src={visitedCountry.img} alt="National Flag" /></td>
    </tr>
  );
};

export default VisitedRow;