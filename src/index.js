import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';


class ProductCategoryRow extends React.Component {
  render() {
    const category = this.props.category;
    return (
      <tr>
        <th colSpan="2">
          {category}
        </th>
      </tr>
    );
  }
}

class ProductRow extends React.Component {
  render() {
    const product = this.props.product;
    const name = product.stocked ?
      product.name :
      <span style={{color: 'red'}}>
        {product.name}
      </span>;

    return (
      <tr>
        <td>{name}</td>
        <td>{product.price}</td>
      </tr>
    );
  }
}

class ProductTable extends React.Component {
  render() {
    const rows = [];
    let lastCategory = null;
    
    this.props.products.forEach((product) => {
      if (product.category !== lastCategory) {
        rows.push(
          <ProductCategoryRow
            category={product.category}
            key={product.category} />
        );
      }
      rows.push(
        <ProductRow
          product={product}
          key={product.name} />
      );
      lastCategory = product.category;
    });

    return (
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </table>
    );
  }
}

class SearchBar extends React.Component {
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


const PRODUCTS = [
  {category: 'Sporting Goods', price: '$49.99', stocked: true, name: 'Football'},
  {category: 'Sporting Goods', price: '$9.99', stocked: true, name: 'Baseball'},
  {category: 'Sporting Goods', price: '$29.99', stocked: false, name: 'Basketball'},
  {category: 'Electronics', price: '$99.99', stocked: true, name: 'iPod Touch'},
  {category: 'Electronics', price: '$399.99', stocked: false, name: 'iPhone 5'},
  {category: 'Electronics', price: '$199.99', stocked: true, name: 'Nexus 7'}
];
 
ReactDOM.render(
  <FilterableProductTable products={PRODUCTS} />,
  document.getElementById('root')
);