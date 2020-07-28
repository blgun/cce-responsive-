import React, { Component } from "react";
import { FaUserAlt } from "react-icons/fa";
class Huudas2 extends Component {
  //constructor(props) {
  //super(props);
  //this.state = {};
  //}
  state = {
    civicparticipatory: "Citizen Participatory Program",
    Conducttrainingonicitizen:
      "1 Conduct training on citizen participation and m power citizens",
    Conducttrainingongood:
      "2 Conduct training on good governance and civic education",
    Conducttrainingonenvironmental:
      "3 Conduct training on environmental conservation such as water qualiti monitoring,files management and environmental assessment",
    SetUp: "4 Set up local community groups and facilitate their activities",
    Organise:
      " 5 Organise training on how to develop small projects for local community and support/promote projects",
    Setuplocalenvironmental:
      " 6 Set up local environmental group and provide training andguadance on how to monitor busenesses that have an impact onevcironment",
    train: "7 Train and facilitate local youth",
    citizensfrom:
      "  766 citizens from 10 provinces participated ion Citizen Participation project, As a result of the project,community movements have been established in 4 souls and 1 bag. Within the framework of NGO capacity building project,a regional training in Ulaanbaatar city and 21 provinces were organised and 3250 NGOs and staff were involved",
  };
  render() {
    return (
      <div>
        <br />
        <br />
        <h1 className="CivicParticipationProgramPrimary">
          <i class="fa fa-user" aria-hidden="true"></i>
          {this.state.civicparticipatory}
        </h1>
        <hr className="CivicParticipationProgramHr" />

        <div className="CivicParticipationProgramgrid-container">
          <div className="CivicParticipationProgramitem1">
            <p className="item1p">{this.state.Conducttrainingonicitizen}</p>
            <hr className="CivicParticipationProgramitem1Hr" />
          </div>
          <div className="CivicParticipationProgramitem2">
            <p className="item2p">{this.state.Conducttrainingongood}</p>
            <hr className="CivicParticipationProgramitem1Hr" />
          </div>
          <div className="CivicParticipationProgramitem3">
            <p className="item3p">
              {this.state.Conducttrainingonenvironmental}
            </p>
            <hr className="CivicParticipationProgramitem1Hr" />
          </div>
          <div className="CivicParticipationProgramitem4">
            <p className="item4p">{this.state.SetUp}</p>
            <hr className="CivicParticipationProgramitem1Hr" />
          </div>
          <div class="CivicParticipationProgramitem5">
            <p className="item5p">{this.state.Organise}</p>
            <hr className="CivicParticipationProgramitem1Hr" />
          </div>
          <div className="CivicParticipationProgramitem6">
            <p className="item6p">{this.state.Setuplocalenvironmental}</p>
            <hr className="CivicParticipationProgramitem1Hr" />
          </div>
          <div className="CivicParticipationProgramitem7">
            <p className="item7p">{this.state.train}</p>
            <hr className="CivicParticipationProgramitem1Hr" />
          </div>
        </div>
        <div>
          <br />
          <div>
            <p className="Civicparticipationhvree" style={{ margin: "auto" }}>
              {this.state.citizensfrom}
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Huudas2;
