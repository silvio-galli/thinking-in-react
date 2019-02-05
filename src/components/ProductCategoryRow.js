import React from 'react'

const ProductCategoryRow = (props) => {
  return (
    <tr>
      <td colSpan="2" className="category">
        {props.children}
      </td>
    </tr>
  )
}

export default ProductCategoryRow