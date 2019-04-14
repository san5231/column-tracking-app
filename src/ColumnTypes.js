import React, {Component} from 'react'

function ColumnTypes(props) {
  return(
    <ul className='column-types'>
      {props.columns.map((column) => (
        <li key={column.id} className='column-types-item'>
          <div className='column-type-name'>
            {column.name}
          </div>
        </li>
      ))}
    </ul>
  )
}



export default ColumnTypes
