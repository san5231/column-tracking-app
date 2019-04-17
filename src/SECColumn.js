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
              {column.alias}
            </div>
          </li>
        ))}
      </ul>
    );
  }
}

export default SECColumn;
