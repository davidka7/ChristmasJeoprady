import React from "react";
import useSound from "use-sound";

import game from "./game.mp3";

import "./winner.css";

function Winner(props) {
  const [play, { stop }] = useSound(game, { volume: 0.3 });
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
