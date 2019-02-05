import React from 'react'
import Search from './Search'
import ProductTable from './ProductTable'

class FilterableProductTable extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      searchInput: '',
      inStock: false
    }
    this._handleSearch = this._handleSearch.bind(this)
    this._handleCheckbox = this._handleCheckbox.bind(this)

  }

  render() { 
    let filteredData = this.props.data
    .filter( product => new RegExp(this.state.searchInput, 'gi').test(product.name) )
    if (this.state.inStock) {
      filteredData  = filteredData.filter( product =>  product.stocked)
    }

    return (
      <div className="filterable-products">
        <h1>Products</h1>
        <Search
          handleSearch={ this._handleSearch}
          handleCheckbox={ this._handleCheckbox }
          />
        <ProductTable
          products={filteredData}
          />
      </div>
    )
  }

  _handleSearch(event) {
    this.setState({
      [event.target.name]: event.target.value
    })
  }
  
  _handleCheckbox() {
    this.setState({
      inStock: !this.state.inStock
    })
  }
}

export default FilterableProductTable