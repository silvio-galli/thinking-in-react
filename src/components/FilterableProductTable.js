import React from 'react'
import Search from './Search'
import ProductTable from './ProductTable'

class FilterableProductTable extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      searchWord: '',
      inStock: false
    }
    this._handleSearch = this._handleSearch.bind(this)
  }

  render() { 
    const filteredData = this.props.data
    .filter( product => product.name.toUpperCase().includes(this.state.searchWord.toUpperCase()) )
    .filter( product => this.state.inStock ? product.stocked === true : product.stocked === true || product.stocked === false )
    return (
      <div className="filterable-products">
        <h1>Products</h1>
        <Search
          handleSearch={ this._handleSearch}
          handleCheckbox={ () => this._handleCheckbox() }
          />
        <ProductTable
          products={filteredData}
          />
      </div>
    )
  }

  _handleSearch(event) {
    this.setState({
      searchWord: event.target.value
    })
  }
  
  _handleCheckbox() {
    console.log( "BEFORE => ", this.state.inStock ) 
    let value = this.state.inStock === false ? true : false;
    console.log( "VALUE => ", value )
    this.setState({
      inStock: value
    })
  }
}

export default FilterableProductTable