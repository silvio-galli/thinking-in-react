import React from 'react'

const Search = (props) => {
  return (
    <form>
      <input
        type="text"
        name="searchWord"
        placeholder="Search..."
        onChange={(e) => props.handleSearch(e)}
      />
      <br />
      <input type="checkbox" name="inStock" onChange={props.handleCheckbox} />
      <label htmlFor="inStock">Only show products in stock</label>
    </form>
  )
}

export default Search