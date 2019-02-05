import React from 'react'
import FilterableProductTable from './FilterableProductTable'
import { data } from '../data'

function App(props) {
  return (
    <FilterableProductTable data={data} />
  )
}

export default App