import React from "react";

import a1 from "./twitter11.png";
import "./Modals.css";

function Part1({ data }) {
  return (
    <div>
      {data.category == 1 ? (
        <div>
          <img
            className="special-s"
            // style={{ width: "100%", height: "100%" }}

            src={`${a1}`}
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
