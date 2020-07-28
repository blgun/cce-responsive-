import React, { Component } from "react";
import ECO from "./ecologiUI";
class ecologi extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text1:
        "Develop ecological education curriculum for Eco schools and camps and introduce into the Mongolian education system",
      text2:
        "Develop,publish,and disseminate ecological educational materials,textbooks and manuals",
      text3: "Train school teachers and environmentalists",
      text4:
        " Conduct training for local people and community environmental groups",
      text5:
        " Run an ecological summer camp for children and provide children width environmental education ",
      text6:
        " Support and promote environmental projection actions and initiatives of comminity",
      text7: "Coordinate international environmental exchange programs",
    };
  }
  render() {
    return (
      <div>
        <br />
        <br />
        <h1 className="ecoGarchig">
          <i class="fa fa-hand-peace-o" aria-hidden="true"></i>
          Ecological Education Program
        </h1>
        <hr className="ecozuraas" />
        <div className="ecodisplay" style={{ display: "flex" }}>
          <ECO text={this.state.text1} />
          <ECO text={this.state.text2} />
          <ECO text={this.state.text3} />
        </div>
        <div style={{ display: "flex", padding: "1px 90px" }}>
          <ECO text={this.state.text4} />
          <ECO text={this.state.text5} />
          <ECO text={this.state.text6} />
          <ECO text={this.state.text7} />
        </div>
      </div>
    );
  }
}
export default ecologi;
