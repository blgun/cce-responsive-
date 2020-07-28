import React from "react";
const ecologi = (props) => {
  console.log("props", props);
  return (
    <div className="ECO">
      <div className="ECOoverflow"></div>
      <div className="ECO-body text-dark">
        <p className="ECO-text text-secondary">{props.text}</p>
      </div>
    </div>
  );
};

export default ecologi;
