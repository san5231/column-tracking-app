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
  { title: "Backpressure", field: "backpressure" },
  { title: "Number of Injections", field: "injection" }
];
const data = [
  { id: 1, date: "04/04/2019", backpressure: 100, injection: 5 },
  { id: 2, date: "04/04/2019", backpressure: 101, injection: 10 },
  { id: 3, date: "04/04/2019", backpressure: 105, injection: 22 }
];

class TrackTable extends Component {
  render() {
    return <ReactTabulator columns={columns} data={data} />;
  }
}

export default TrackTable;
