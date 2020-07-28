import React, { Component } from "react";
import ReportCard from "../../../components/UI/Card/ArchiveReports/Card";

class Report extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div style={{ width: "1200px", margin: "auto" }}>
        <div style={{ display: "table" }}>
          <ReportCard />
          <ReportCard />
          <ReportCard />
          <ReportCard />
          <ReportCard />
        </div>
      </div>
    );
  }
}

export default Report;
