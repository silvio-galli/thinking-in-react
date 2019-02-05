import React from 'react'

class Search extends React.Component {
  render() {
    return (
      <form>
        <input type="text" placeholder="Search..." onChange={this.props.searchProducts} />
        <p>
          <input type="checkbox" onChange={this.props.onCheckboxChange} />
          {' '}
          Only show products in stock
        </p>
      </form>
    );
  }
}

export default Search