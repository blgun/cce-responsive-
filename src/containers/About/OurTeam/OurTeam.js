import React, { Component } from "react";
import { connect } from "react-redux";
import Card from "../../../components/UI/Card/OurTeamCard/Card";
import * as actions from "../../../store/actions";

class OurTeam extends Component {
  // componentDidMount() {
  //   this.props.onFetchOurTeam();
  //   console.log("A0", this.props);
  // }
  render() {
    return (
      <div>
        <div>
          <h1
            style={{
              margin: "15px auto",
              padding: "15px",
              width: "500px",
              textAlign: "center",
              backgroundColor: "#494d4c",
              color: "#fff",
              textDecoration: "underline",
              textDecorationColor: "#5fadad",
            }}
          >
            Our Team
          </h1>
          <Card />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { stateRedux: state };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onFetchOurTeam: () => dispatch(actions.fetchOurTeam()),
  };
};

// export default connect(mapStateToProps, mapDispatchToProps)(OurTeam);
export default OurTeam;
