import React from 'react'

const Search = (props) => {
  return (
    <form>
      <input
        type="text"
        id="searchInput"
        name="searchInput"
        placeholder="Search..."
        onChange={(e) => props.handleSearch(e)}
        autoFocus
      />
      <br />
      <input type="checkbox" name="inStock" onChange={props.handleCheckbox} />
      <label htmlFor="inStock">Only show products in stock</label>
    </form>
  )
}

export default Search