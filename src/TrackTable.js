import React, { Component } from "react";
import "react-tabulator/lib/styles.css";
import "react-tabulator/lib/css/semantic-ui/tabulator_semantic-ui.min.css";
import { ReactTabulator } from "react-tabulator";
import DateEditor from "react-tabulator/lib/editors/DateEditor";

const columns = [
  {
    title: "Date",
    field: "date",
    editor: DateEditor,
    editorParams: { format: "MM/dd/yyyy" }
  },
  { title: "Backpressure (bar)", field: "backpressure", editor: "input", bottomCalc: "max", validator: ["numeric"] },
  { title: "Number of Injections", field: "injection", editor: "input", bottomCalc:"sum", validator: ["numeric"] }
];

let input = document.createElement("input")
class TrackTable extends Component {
  state = {data: [{}]}

  addRow = (d) => {
    this.setState((state) => ({
      d: state.data.push({})
    }))
    // console.log(this.state.data)
  }

  render() {
    return (
      <div>
        <div className="contol-buttons">
          <button onClick={this.addRow}>Add Row</button>

        </div>
        <div className="table">
          <ReactTabulator columns={columns} data={this.state.data} />
        </div>
      </div>


    )
  }
}

export default TrackTable;
