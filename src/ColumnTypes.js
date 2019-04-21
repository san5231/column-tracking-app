import React, { Component } from 'react'
import { Link } from 'react-router-dom'

function ColumnTypes(props) {
  return(
    <ul className='column-types'>
      {props.columns.map((column) => (
        <li key={column.id} className='column-types-item'>
          <div className='column-type-name' >
            <Link to="/sec" >{column.name}</Link>

          </div>
        </li>
      ))}
    </ul>
  )
}



export default ColumnTypes
