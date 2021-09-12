import React from "react";
import { withRouter } from "react-router-dom";
function ArrowNav(props) {
  return (
    <div className="lmpixels-arrows-nav">
      <div className="lmpixels-arrow-right">
        <span>{`>`}</span>
      </div>
      <div className="lmpixels-arrow-left">
        <span>{`<`}</span>
      </div>
    </div>
  );
}
export default withRouter(ArrowNav);
