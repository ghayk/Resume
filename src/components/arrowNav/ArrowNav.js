import React, { useEffect, useState } from "react";
import { withRouter } from "react-router-dom";
function ArrowNav(props) {
  const [next, setNext] = useState(0);
  const [prev, setPrev] = useState(0);
  const router = props.history;
  const arr = ["/", "/about-me", "/resume", "/portfolio", "/blog", "/contact"];
  useEffect(() => {
    let x = arr.findIndex((item) => item === router.location.pathname);
    if (x < arr.length - 1) {
      setNext(x + 1);
    } else setNext(0);

    if (x > 0) {
      setPrev(x - 1);
    } else {
      setPrev(arr.length - 1);
    }
  });
  return (
    <div className="lmpixels-arrows-nav">
      <div
        style={{ cursor: "pointer", userSelect: "none" }}
        onClick={() => router.push(arr[next])}
        className="lmpixels-arrow-right"
      >
        {`>`}
      </div>
      <div
        style={{ cursor: "pointer", userSelect: "none" }}
        onClick={() => router.push(arr[prev])}
        className="lmpixels-arrow-left"
      >
        {`<`}
      </div>
    </div>
  );
}
export default withRouter(ArrowNav);
