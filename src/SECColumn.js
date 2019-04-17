import React, { Component } from "react";
import SECColumnList from "./Data/SECColumn.json";

class SECColumn extends Component {
  state = {
    SECColumnList
  };

  render() {
    return (
      <ul className="sec-list">
        {this.state.SECColumnList.map(column => (
          <li key={column.sn} className="sec-column-list">
            <div className="sec-column-name">
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
    );
  }
}

export default SECColumn;
