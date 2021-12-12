
// FilterForm.js
import { useState, useEffect } from 'react';

function FilterForm(props) {

  // setting state
  const [userChoice, setUserChoice] = useState('all')
  const filterBy = props.getProducts;
  

  // retrieves the value of the chosen radio button on change
  const handleUserChoice = (e) => {
    setUserChoice(e.target.value);
  }

  useEffect(() => {
    filterBy(userChoice)
  }, [userChoice])




  return (
    <>
      <form
        className="filterContainer"
        onChange={handleUserChoice}
      >
        <h2>Filters</h2>
        <div className="filters">
          <input type="radio" name="filter" id="all" value="all" defaultChecked/>
          <label htmlFor="all">All</label>
          <input type="radio" name="filter" id="houseware" value="houseware" />
          <label htmlFor="houseware">Houseware</label>
          <input type="radio" name="filter" id="wallmounted" value="wallmounted" />
          <label htmlFor="wallmounted">Wallmounted</label>
          <input type="radio" name="filter" id="misc" value="misc" />
          <label htmlFor="misc">Miscellaneous</label>
        </div>
        {/* /filters */}
      </form>
      {/* /filterContainer */}
    </>
  )
}

export default FilterForm;