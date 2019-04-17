import React, { Component } from "react";
import ColumnTypes from "./ColumnTypes";
import SECColumn from "./SECColumn";
import { Route } from "react-router-dom";
import TrackTable from "./TrackTable";


class App extends Component {
  state = {
    columns: [
      {
        id: "sec",
        name: "Size Exclusion"
      },
      {
        id: "cex",
        name: "Cation Exchange"
      },
      {
        id: "aex",
        name: "Anion Exchange"
      },
      {
        id: "hic",
        name: "Hydrophobic Interaction"
      },
      {
        id: "glycan",
        name: "HILIC (Glycan)"
      },
      {
        id: "rp",
        name: "Reversed Phase"
      }
    ]
  };
  render() {
    return (

      //<ColumnTypes columns={this.state.columns}/>
      <TrackTable/>
      // <Route
      //   exact
      //   path="/"
      //   render={() => <ColumnTypes columns={this.state.columns} />}
      // />
      // <SECColumn />

    );
  }
}

export default App;
