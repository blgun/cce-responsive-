import React, { Component } from "react";
import ReportCard from "../../../components/UI/Card/ArchiveReports/Card";
import MenuTitle from "../../../components/UI/MenuTitle/MenuTitle";
import reportimg from "./report.png";
import style from "./style.css";

class Report extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className={style.ArchiveReportContainer}>
        <MenuTitle title={"Reports"} />
        <ReportCard imgsrc={reportimg} />
        <ReportCard imgsrc={reportimg} />
        <ReportCard imgsrc={reportimg} />
        <ReportCard imgsrc={reportimg} />
        <ReportCard imgsrc={reportimg} />
      </div>
    );
  }
}

export default Report;
