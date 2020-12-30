import React from "react";

import a1 from "./Denis1.png";
import a2 from "./Alex.png";
import a3 from "./andre.png";
import a4 from "./denis2.png";
import a5 from "./Ruvim.png";
import a6 from "./Noah.png";
import "./Modals.css";

function Part1({ data }) {
  return (
    <div>
      {data.category == 1 ? (
        <div>
          <img
            className="special-s align"
            // style={{ width: "100%", height: "100%" }}

            src={`${a1}`}
          />{" "}
          {data.question}
        </div>
      ) : (
        <div></div>
      )}
      {data.category == 2 ? (
        <div>
          <img
            className="special-s align"
            // style={{ width: "100%", height: "100%" }}

            src={`${a2}`}
          />{" "}
          {data.question}
        </div>
      ) : (
        <div></div>
      )}
      {data.category == 3 ? (
        <div>
          <img
            className="special-s align"
            // style={{ width: "100%", height: "100%" }}

            src={`${a3}`}
          />{" "}
          {data.question}
        </div>
      ) : (
        <div></div>
      )}
      {data.category == 4 ? (
        <div>
          <img
            className="special-s align"
            // style={{ width: "100%", height: "100%" }}

            src={`${a4}`}
          />{" "}
          {data.question}
        </div>
      ) : (
        <div></div>
      )}
      {data.category == 5 ? (
        <div>
          <img
            className="special-s align"
            // style={{ width: "100%", height: "100%" }}

            src={`${a5}`}
          />{" "}
          {data.question}
        </div>
      ) : (
        <div></div>
      )}
      {data.category == 6 ? (
        <div>
          <img
            className="special-s align"
            // style={{ width: "100%", height: "100%" }}

            src={`${a6}`}
          />{" "}
          {data.question}
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
}

export default Part1;
