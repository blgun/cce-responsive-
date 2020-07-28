import React, { Component } from "react";
import ArchiveFeedback from "../../../components/UI/Card/ArchiveFeedback/Card";

class Report extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div style={{ width: "1200px", margin: "auto" }}>
        <div style={{ display: "table" }}>
          <ArchiveFeedback />
          <ArchiveFeedback />
          <ArchiveFeedback />
          <ArchiveFeedback />
          <ArchiveFeedback />
        </div>
      </div>
    );
  }
}

export default Report;
