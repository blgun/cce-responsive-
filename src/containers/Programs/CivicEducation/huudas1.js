import React, { Component } from "react";
import { FaBeer, FaUserAlt } from "react-icons/fa";
import { BsBook } from "react-icons/bs";
import { GiTeacher } from "react-icons/gi";
import { faUserAlt } from "react-icons/fa";
import { FiUserCheck } from "react-icons/fi";
import { FaBuilding } from "react-icons/fa";
import { FaUserTimes } from "react-icons/fa";
import book from "./nom1.jpg";
class Huudas1 extends Component {
  //constructor(props) {
  //super(props);
  //this.state = {};
  //}
  state = {
    header: "Civic Education Program",
    p1: "Translate,develop,and publish civic educational",
    p2: "curricula,textbooks and manuals",
    p3: "Orgonise training and seminars for civil education ",
    p4: "teachers,and provide methodological support",
    p5:
      "Provide guidance,training and methodological support for school's self-governance",
    p6:
      " Provide quiadance, training and methodological support for school's self-governance",
    p7:
      " Host regional and international forums,conferences and workshops on Civic Education",
    p8:
      " Organise training and workshops on school democracy,open education and provide guidance and methodological support",
    p9:
      " Since 1996,Project Citizen training has been organised for 2935 teachers and about 32,888 children and youth from urban and rural regions of Mongolia.More than 200 high school teachers have been trained to conduct these trainings. 1187 high school students,university students,80 teachers and over 200 parents from Ulaanbaatar city and 11 provices have been trained on Students' self-governance. A total of 482 civic and social sciences teachers from Ulaanbaatar city and some provinces and slums participated in the training winthin the Democracy Memory Bank project,project to train social sciences teachers.",
  };
  render() {
    return (
      <div>
        <br />
        <br />
        <h1 className="primary">
          <i class="fa fa-users" aria-hidden="true"></i>
          {this.state.header}
        </h1>
        <hr className="hr" />
        <div className="grid-container">
          <div style={{ display: "flex" }}>
            <BsBook color="red" size="1.25rem" style={{ margin: "auto" }} />
            <p className="item1" style={{ margin: "10px" }}>
              {this.state.p1}
              {this.state.p2}
            </p>
          </div>
          <div style={{ display: "flex" }}>
            <GiTeacher color="red" size="1.25rem" style={{ margin: "auto" }} />
            <p className="item1" style={{ margin: "10px" }}>
              {this.state.p3}
              {this.state.p4}
            </p>
          </div>
          <div style={{ display: "flex" }}>
            <FaUserAlt color="red" size="1.25rem" style={{ margin: "auto" }} />
            <p className="item1" style={{ margin: "10px" }}>
              {this.state.p5}
            </p>
          </div>
          <div style={{ display: "flex" }}>
            <FiUserCheck
              color="red"
              size="1.25rem"
              style={{ margin: "auto" }}
            />
            <p className="item1" style={{ margin: "10px" }}>
              {this.state.p6}
            </p>
          </div>
          <div style={{ display: "flex" }}>
            <FaBuilding color="red" size="1.25rem" style={{ margin: "auto" }} />
            <p className="item1" style={{ margin: "10px" }}>
              {this.state.p7}
            </p>
          </div>
          <div style={{ display: "flex" }}>
            <FaUserTimes
              color="red"
              size="1.25rem"
              style={{ margin: "auto" }}
            />
            <p className="item1" style={{ margin: "10px" }}>
              {this.state.p8}
            </p>
          </div>
        </div>
        <div>
          <div>
            <p className="Chvree" style={{ margin: "auto" }}>
              {this.state.p9}
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Huudas1;
