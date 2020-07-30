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
      <div>
        <div className={style.ArchiveReportTitle}>
          <MenuTitle title={"Reports"} />
        </div>
        <div className={style.ArchiveReportContainer}>
          <ReportCard imgsrc={reportimg} />
          <ReportCard imgsrc={reportimg} />
          <ReportCard imgsrc={reportimg} />
          <ReportCard imgsrc={reportimg} />
          <ReportCard imgsrc={reportimg} />
        </div>
      </div>
    );
  }
}

export default Report;
