// FilterForm.js

function FilterForm() {
  return (
    <>
      <div className="filterContainer">
        <h2>Filters</h2>
        <div className="filters">
          <button className="filterAll">All</button>
          <button className="filterHouseware">Houseware</button>
          <button className="filterWallmounted">Wall Mounted</button>
          <button className="filterMisc">Miscellaneous</button>
        </div>
        {/* /filters */}
      </div>
      {/* /filterContainer */}
    </>
  )
}

export default FilterForm;