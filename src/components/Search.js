import React from 'react'

const Search = (props) => {
  return (
    <form>
      <div className="form-group">
        <input
          type="text"
          className="form-control"
          id="searchInput"
          name="searchInput"
          placeholder="Search..."
          onChange={(e) => props.handleSearch(e)}
          autoFocus
        />
      </div>
      <div className="form-group">
        <input type="checkbox" className="form-check-input" name="inStock" onChange={props.handleCheckbox} />
        <label className="form-check-label" htmlFor="inStock">Only show products in stock</label>
      </div>
    </form>
  )
}

export default Search