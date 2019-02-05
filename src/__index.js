import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const PRODUCTS = [
  {category: "Sporting Goods", price: "$49.99", stocked: true, name: "Football"},
  {category: "Sporting Goods", price: "$9.99", stocked: true, name: "Baseball"},
  {category: "Sporting Goods", price: "$29.99", stocked: false, name: "Basketball"},
  {category: "Electronics", price: "$99.99", stocked: true, name: "iPod Touch"},
  {category: "Electronics", price: "$399.99", stocked: false, name: "iPhone 5"},
  {category: "Electronics", price: "$199.99", stocked: true, name: "Nexus 7"},
  {category: "Clothes", price: "$399.99", stocked: false, name: "Man Suite"},
  {category: "Clothes", price: "$199.99", stocked: true, name: "Woman Suite"}
];

class ProductRow extends React.Component{
  render (){
    return(
      <tr className="product-row">
        <td>
          {this.props.info.name}
        </td>
        <td>
          {this.props.info.price}
        </td>
      </tr>
    )
  }
}

class ProductCategoryRow extends React.Component{
  render (){
    return(
      <div>
        <tr className="product-category-row">
          <td>
            {this.props.category}
          </td>
          <td></td>
        </tr>
        {
          PRODUCTS
          .filter(product => product.category === this.props.category)
          .map( product => <ProductRow info={product} /> )
        }
      </div>
    )
  }
}


class ProductTable extends React.Component{
  
  createCategories(arr) {
    let categories = [];
    return arr.map( (obj) => {
      if (!categories.includes(obj.category)) {
        return categories.push( obj.category )
      }
    })
  }
  
  render () {
    return(
      <table>
        <thead>
          <th>Name</th>
          <th>Price</th>
        </thead>
        <tbody>
          { this.createCategories().map( category => <ProductCategoryRow key={category} category={category} />) }
        </tbody>
      </table>

    )
  }
}

class SearchBar extends React.Component{
  render (){
    return(
      <form action="">
        <input type="text" placeholder="Search products" />
        <input type="checkbox" name="inStock" /> Only show peoduct in stock
      </form>
    )
  }
}

class FilterableProductTable extends React.Component{
  render (){
    return(
      <div>
         <SearchBar/>
         <ProductTable/>
      </div>
    )
  }
}

class App extends React.Component{
  render (){
    return(
     <FilterableProductTable/>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'));

