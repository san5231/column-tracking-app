import React, { Component } from "react";
import "react-tabulator/lib/styles.css";
import "react-tabulator/lib/css/tabulator.min.css";
import { ReactTabulator } from "react-tabulator";
import DateEditor from "react-tabulator/lib/editors/DateEditor";

const columns = [
  {
    title: "Date",
    field: "date",
    editor: DateEditor,
    editorParams: { format: "MM/dd/yyyy" }
  },
  { title: "Backpressure", field: "backpressure", editor: "input" },
  { title: "Number of Injections", field: "injection", editor: "input" }
];


class TrackTable extends Component {
  state = {
    data: []
  };

  addRow = (d) => {
    this.setState((state) => ({
      d: state.data.push({})
    }))
    //console.log(this.state.data)
  }


  render() {
    return (
      <div>
        <div>
          <button onClick={this.addRow}>Add Row</button>
        </div>
        <ReactTabulator columns={columns} data={this.state.data} />
      </div>


    )
  }
}

export default TrackTable;
