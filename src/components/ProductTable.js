import React from 'react'
import ProductCategoryRow from './ProductCategoryRow'
import ProductRow from './ProductRow'

function ProductTable(props) {
  const displayProducts = filterData(props.products)
  
  return (
    <table className="table products-table" cellPadding='0' cellSpacing='0'>
      <thead className="thead-light">
        <tr>
          <th>Name</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>
        { displayProducts }
      </tbody>
    </table>
  )
}

function filterData(data) {
  // get the categories
  const categories = new Set(data.map(item => item.category))
  // here we store the components to display in the table
  let displayProducts = [];
  // parse the products list per category
  [...categories].map(category => {
    // one row for the category
    displayProducts.push(
      <ProductCategoryRow key={category}>
        {category}
      </ProductCategoryRow>
    )
    data.filter(product => product.category === category).map(product => {
      const stock = product.stocked ? "in-stock" : "out-of-stock"
      // one row for every item of that category
      displayProducts.push(
        <ProductRow key={product.name}>
          <td className={`product-name ${stock}`}>{product.name}</td>
          <td className="product-price">{product.price}</td>
        </ProductRow>
      )
      return false
    })
    return false
  })
  return displayProducts
}

export default ProductTable