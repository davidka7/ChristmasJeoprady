import React from "react";

import useSound from "use-sound";
import soundUrl from "./mp3.mp3";
import "./Chop.css";
function Sounder1() {
  const [play, { stop }] = useSound(soundUrl, { volume: 0.5 });

  return (
    <div
      className="first-Click glower1"
      onMouseEnter={() => {
        play();
      }}
      onMouseLeave={() => {
        stop();
      }}
    >
      ▶
    </div>
  );
}

export default Sounder1;
