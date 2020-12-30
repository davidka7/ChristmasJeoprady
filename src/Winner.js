import React from "react";
import useSound from "use-sound";

import game from "./aaa.mp3";

import "./winner.css";

function Winner(props) {
  const [play, { stop }] = useSound(game, { volume: 1 });
  return (
    <>
      <div
        onMouseEnter={() => {
          play();
        }}
        onMouseLeave={() => {
          stop();
        }}
        className="glower"
      >
        {" "}
        {props.animal}
      </div>
    </>
  );
}

export default Winner;
