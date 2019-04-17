import React, { Component } from 'react'

class SECColumn extends Component {
  state = {
    ListSEC: [
      {
        'sn': '0006436139-15',
        'name': 'Agilent AdvanceBio SEC',
        'particleSize': '300A',
        'diameter': 7.8,
        'length': 300,
        'alias': 'Column 5'
      },
      {
        'sn': '0006436139-12',
        'name': 'Agilent AdvanceBio SEC',
        'particleSize': '300A',
        'diameter': 7.8,
        'length': 300,
        'alias': 'Column 4'
      }
    ]
  }

  render(){
    return(
      <ul className='sec-list'>
        {this.state.ListSEC.map((column) => (
          <li key={column.sn} className='sec-column-list'>
            <div className='sec-column-name'>
              {column.name}
              <div className='column-details'>
                <p>Alias: {column.alias}</p>
                <p>Serial Number: {column.sn}</p>
                <p>Particle Size: {column.particleSize}</p>
                <p>Diameter: {column.diameter}</p>
                <p>Length: {column.length}</p>
              </div>

            </div>
          </li>
        ))}
      </ul>
    )
  }
}

export default SECColumn
