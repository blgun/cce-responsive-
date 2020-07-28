import React, { Component } from "react";
class Huudas3 extends Component {
  //constructor(props) {
  //super(props);
  //this.state = {};
  //}
  state = {
    Youth: "Youth Development Program",
    Target: "Target Group",
    Youthbetween: "Youth between the ages of 15 to 34 years",
    Scope: "Scope",
    Ulaanbaatar:
      "Ulaanbaatar city,Darkhan-Uul,Orkhon,Bayan-Ulgii,Uvs,Khowd,Zackan,Gobi-Altai,Bayankhongor,Umnu-Gobi,Dornogobi,Dornod-provinceu",
    Project: "Project",
    Goal:
      "Goal Enhance youth participation in the policy making process and youth development program, run influencing activities on youth issues, and empower youth organisations",
    Parthners: "Parthners",
    ParthnersP:
      "Partners Implementing agency of the Government of Mongolia - Authority of Family, Child and Youth development, Youth Development Agency, Centres for Youth Development, Youth clubs,Interest groups, Mongolian Youth Council and other youth organisations",
    Supporters: "Supporters",
    UNFPA:
      " UNFPA, Government of Mongolia, Ministry of Labour and Social Protection, Swiss Agency for Development and Cooperation,Government of Luxembourg",
    ptext:
      "Activities underaken within this project: Conducted 33 trainings for members of Youth development centres and youth NGOs,which involved 1312 youth and over 230 youth organisations. Organized and supported over 30 events,such as,Social Good summit Mongolia,TEDx Ulaanbaatar,StartUp Weekend,Hackathon,Youth Civil Society Forum, Supported youth organisations initiatives and implemented 86 small initiatives and monitoring projects. Our impact over the years includes: In 2014, direct beneficiaries-1545/indirect beneficiaries-49973 In 2015, direct beneficiaries-1856/indirect beneficiaries-557654 In 2016, direct beneficiaries-6161/indirect beneficiaries-406602 There were 23000 youth who benefitted from the project directly and 1014229 indirect beneficiaries.",
  };
  render() {
    return (
      <div>
        <br />
        <br />
        <h1 className="Garchig">
          <i class="fa fa-hand-peace-o" aria-hidden="true"></i>
          {this.state.Youth}
        </h1>
        <hr className="zuraas" />
        <div style={{ display: "flex", width: "60%", margin: "auto" }}>
          <div style={{ width: "50%" }}>
            <div
              style={{
                boxShadow: "9px 10px 13px -4px rgba(0,0,0,0.75)",
                backgroundColor: "#f5dd48",
                margin: "5px 10px 5px 10px",
                minHeight: "20%",
              }}
            >
              <h1>{this.state.Target}</h1>
              <p>{this.state.Youthbetween}</p>
            </div>
            <div
              style={{
                boxShadow: "9px 10px 13px -4px rgba(0,0,0,0.75)",
                backgroundColor: "#f5dd48",
                margin: "5px 10px 5px 10px",
              }}
            >
              <h1>{this.state.Scope}</h1>
              <p>{this.state.Ulaanbaatar}</p>
            </div>
            <div
              style={{
                boxShadow: "9px 10px 13px -4px rgba(0,0,0,0.75)",
                backgroundColor: "#f6cb44",
                margin: "5px 10px 5px 10px",
              }}
            >
              <h2> {this.state.Project}</h2>
              {this.state.Goal}
            </div>
          </div>
          <div style={{ width: "50%" }}>
            <div
              style={{
                boxShadow: "9px 10px 13px -4px rgba(0,0,0,0.75)",
                backgroundColor: "#f7b53f",
                margin: "5px 10px 5px 10px",
                minHeight: "52%",
              }}
            >
              <h3>{this.state.Parthners}</h3>
              <p>{this.state.ParthnersP}</p>
            </div>
            <div
              style={{
                boxShadow: "9px 10px 13px -4px rgba(0,0,0,0.75)",
                backgroundColor: "#f6cb44",
                margin: "5px 10px 5px 10px",
                minHeight: "40%",
              }}
            >
              <h5>{this.state.Supporters}</h5>
              {this.state.UNFPA}
            </div>
          </div>
        </div>
        <div style={{ margin: "26px" }}>
          <div>
            <p className="items" style={{ margin: "auto" }}>
              {this.state.ptext}
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Huudas3;
