import VisitedRow from "./VisitedRow";

const VisitedTable = ({visitedCountries}) => {
  return (
    <section className="mt-8">
      <div className="container">
        <table className="w-full max-w-[400px] mx-auto [&_th]:border [&_th]:border-black [&_td]:border [&_td]:border-black [&_th]:bg-primary [&_th]:text-white [&_th]:font-normal [&_th]:px-4 [&_th]:py-1 [&_td]:py-2 [&_td]:px-4 text-center">
          <thead>
            <tr>
              <th colSpan={2}>Visited Country</th>
            </tr>
            <tr>
              <th>Country Name</th>
              <th>Country Flag</th>
            </tr>
          </thead>
          <tbody>
            {
              visitedCountries.map(visitedCountry => <VisitedRow key={visitedCountry.name} visitedCountry={visitedCountry}></VisitedRow>)
            }
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default VisitedTable;