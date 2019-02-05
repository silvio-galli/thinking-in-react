import React from 'react'

class FilterableProductTable extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      searchWord: '',
      inStock: false
    }
  }

  handleSearch(event) {
    console.log( event.target.value );
    this.setState({
      searchWord: event.target.value
    })
  }

  handleCheckbox() {
    console.log( "BEFORE => ", this.state.inStock ) 
    let value = this.state.inStock === false ? true : false;
    console.log( "VALUE => ", value )
    this.setState({
      inStock: value
    })
  }

  render() {
    return (
      <div>
        <SearchBar searchProducts={ (e) => this.handleSearch(e) } onCheckboxChange={ () => this.handleCheckbox() } />
        <ProductTable
          products=
          {
            this.props.products
            .filter( product => product.name.toUpperCase().includes(this.state.searchWord.toUpperCase()) )
            .filter( product => this.state.inStock ? product.stocked === true : product.stocked === true || product.stocked === false )
          }
        />
      </div>
    );
  }
}

export default FilterableProductTable