import { useState } from "react"
import Countries from "./components/Countries"
import VisitedTable from "./components/VisitedTable"
import Header from "./components/Header";

function App() {
  const [visitedCountries, setVisitedCountries] = useState([]);

  function handleAddVisited(name, img) {
    setVisitedCountries([...visitedCountries, {name: name, img: img}]);
  }
  function handleRemoveVisited(name) {
    setVisitedCountries(visitedCountries.filter(country => country.name !== name))
  }

  return (
    <>
      <Header></Header>
      {
        visitedCountries.length !== 0 && <VisitedTable visitedCountries={visitedCountries}></VisitedTable>
      }
      <Countries handleAddVisited={handleAddVisited} handleRemoveVisited={handleRemoveVisited}></Countries>
    </>
  )
}

export default App
