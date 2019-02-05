import React from 'react'

const Search = (props) => {
  return (
    <form>
      <input type="text" placeholder="Search..." onChange={(e) => props.handleSearch(e)} />
      <p>
        <input type="checkbox" onChange={props.handleCheckbox} />
        {' '}
        Only show products in stock
      </p>
    </form>
  )
}

export default Search